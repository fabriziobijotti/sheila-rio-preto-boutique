// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

/**
 * `STATIC_EXPORT=1` (ver `npm run build:static`) gera um site 100% estático em
 * `.output/public`, para publicação por ZIP:
 *
 *  - desliga o Nitro (nenhum worker Cloudflare é emitido);
 *  - liga o pré-render do TanStack Start, que sobe um preview server sobre o
 *    bundle SSR e grava os `index.html` no output do client.
 *
 * O Nitro precisa ficar desligado nesse modo: o pré-render do TanStack importa
 * `<ssr outDir>/server.js`, que o Nitro não emite (ele consome o bundle SSR
 * direto), e o pré-render próprio do Nitro reconstrói o servidor com rolldown,
 * sem os serviços Vite — a rota `/` responde 404 lá.
 *
 * As páginas são listadas explicitamente e `crawlLinks` fica desligado: o
 * rodapé aponta para `/politica-de-privacidade` e `/termos-de-uso`, que não
 * existem como rotas, e o crawler quebraria o build com `failOnError`.
 *
 * Sem a flag, o build é idêntico ao da Lovable (Nitro + cloudflare-module).
 */
const staticExport = process.env["STATIC_EXPORT"] === "1";

const STATIC_PUBLIC_DIR = ".output/public";
const STATIC_SERVER_DIR = ".output/server";

/** Reproduz o `_headers` que o preset cloudflare do Nitro geraria. */
const assetHeadersPlugin = {
  name: "lp2-sheila:static-asset-headers",
  apply: "build",
  applyToEnvironment: (env: { name: string }) => env.name === "client",
  writeBundle() {
    const dir = resolve(STATIC_PUBLIC_DIR);
    mkdirSync(dir, { recursive: true });
    writeFileSync(
      resolve(dir, "_headers"),
      "/assets/*\n  cache-control: public, max-age=31536000, immutable\n",
    );
  },
} as const;

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(staticExport
      ? {
          pages: [{ path: "/" }, { path: "/loja" }],
          prerender: { enabled: true, crawlLinks: false, failOnError: true },
        }
      : {}),
  },
  ...(staticExport
    ? {
        nitro: false as const,
        plugins: [assetHeadersPlugin],
        vite: {
          // outDir na raiz também aponta para o public: é o diretório que o
          // `vite preview` usado pelo pré-render serve.
          build: { outDir: STATIC_PUBLIC_DIR, emptyOutDir: true },
          environments: {
            client: { build: { outDir: STATIC_PUBLIC_DIR } },
            ssr: { build: { outDir: STATIC_SERVER_DIR } },
          },
        },
      }
    : {}),
});
