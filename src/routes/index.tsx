import { createFileRoute } from "@tanstack/react-router";

import { Route as LojaRoute } from "./loja";

// A landing é publicada também como site estático (martec.page), onde `/` é a
// única URL garantida pelo host. Renderizar a página aqui — em vez do redirect
// para `/loja` que o scaffold trazia — faz o `index.html` da raiz sair com o HTML
// real da loja, sem redirect na hidratação. `/loja` continua existindo. Reusa as
// opções da rota /loja (head + component) sem exigir exports extras nela — edições
// do Lovable em loja.tsx não quebram este arquivo.
export const Route = createFileRoute("/")({
  head: LojaRoute.options.head,
  component: LojaRoute.options.component,
});
