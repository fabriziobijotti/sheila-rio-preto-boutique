import { createFileRoute } from "@tanstack/react-router";

import { Route as LojaRoute } from "./loja";

// A landing é publicada também como site estático (martec.page), onde `/` é a
// única URL garantida pelo host. Renderizar a página aqui — em vez do redirect
// para `/loja` que o scaffold trazia — faz o `index.html` da raiz sair com o HTML
// real da loja, sem redirect na hidratação. `/loja` continua existindo.
//
// Por que um wrapper: o plugin do TanStack Router remove exports que não sejam
// `Route` de arquivos de rota (e não aceita `Route.options.*` direto nas opções
// da rota). Lendo `options` em runtime, `loja.tsx` fica exatamente como o Lovable
// o edita — nenhum export extra a manter.
function IndexPage() {
  const Loja = LojaRoute.options.component;
  return Loja ? <Loja /> : null;
}

export const Route = createFileRoute("/")({
  head: (ctx) => (LojaRoute.options.head ? LojaRoute.options.head(ctx as never) : {}),
  component: IndexPage,
});
