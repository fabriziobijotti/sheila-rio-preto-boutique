import { createFileRoute } from "@tanstack/react-router";

import { LojaPage, lojaHead } from "./loja";

// A landing é publicada também como site estático (martec.page), onde `/` é a
// única URL garantida pelo host. Renderizar a página aqui — em vez do redirect
// para `/loja` que o scaffold trazia — faz o `index.html` da raiz sair com o HTML
// real da loja, sem redirect na hidratação. `/loja` continua existindo.
export const Route = createFileRoute("/")({
  head: lojaHead,
  component: LojaPage,
});
