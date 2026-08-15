import { createFileRoute } from "@tanstack/react-router";

import fachada from "@/assets/fachada-real.png.asset.json";
import vitrineManequins from "@/assets/vitrine-manequins.png.asset.json";
import provador from "@/assets/provador.jpg";
import araras from "@/assets/araras.jpg";
import miniBolsa from "@/assets/mini-bolsa.jpg";
import vestidoAzul from "@/assets/vestido-azul.png.asset.json";
import conjuntoAmarelo from "@/assets/conjunto-amarelo.png.asset.json";
import blusaPoas from "@/assets/blusa-poas.png.asset.json";
import lookCasual from "@/assets/look-casual.png.asset.json";
import lookVersatil from "@/assets/look-versatil.png.asset.json";
import { loja, wa } from "@/lib/loja-config";
import mapaPreview from "@/assets/mapa-localizacao.jpg";

const TITLE = "Loja Física de Moda Feminina em São José do Rio Preto | Sheila Oliveira Store";
const DESC =
  "Visite a Sheila Oliveira Store na Rua Bernardino de Campos, 3465, em São José do Rio Preto. Atendimento consultivo, provador e peças que vestem bem de verdade.";

export const Route = createFileRoute("/loja")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/loja" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      {
        name: "keywords",
          content:
            "loja física de roupas femininas em São José do Rio Preto, provador em Rio Preto, atendimento consultivo de moda, loja feminina centro Rio Preto, Sheila Oliveira Store, moda feminina Rio Preto",
      },
    ],
    links: [{ rel: "canonical", href: "/loja" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ClothingStore",
          name: loja.nome,
          description: DESC,
          address: {
            "@type": "PostalAddress",
            streetAddress: loja.endereco,
            addressLocality: "São José do Rio Preto",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          areaServed: "São José do Rio Preto e região",
        }),
      },
    ],
  }),
  component: LojaPage,
});

const MSG_PRESENTE =
  "Olá! Gostaria de visitar a Sheila Oliveira Store e saber como garantir minha Mini Bolsa exclusiva nas compras acima de R$ 250!";
const MSG_LOOKS =
  "Olá! Gostaria de conhecer os looks disponíveis na loja física e receber atendimento presencial.";
const MSG_VISITA =
  "Olá! Gostaria de saber os horários de atendimento da loja física hoje e como funciona o provador.";
const MSG_ENTREGA =
  "Olá! Gostaria de consultar a entrega para minha cidade em Rio Preto e região.";
const MSG_PROVADOR =
  "Olá! Vi este modelo no site e gostaria de saber se está disponível para eu provar na loja física.";

const beneficios = [
  {
    icone: "👗",
    titulo: "Provador & Caimento Real",
    texto:
      "Experimente modelos e tamanhos com calma, sem a frustração de errar compras pela internet.",
  },
  {
    icone: "☕",
    titulo: "Atendimento Consultivo",
    texto:
      "Nossa equipe ajuda você a combinar looks completos para o trabalho, dia a dia e ocasiões especiais.",
  },
  {
    icone: "☀️",
    titulo: "Tecidos Leves para Rio Preto",
    texto:
      "Peças frescas, elegantes e confortáveis pensadas para o clima da nossa cidade.",
  },
  {
    icone: "🎁",
    titulo: "Presentão na Loja",
    texto:
      "Faça suas compras na loja física acima de R$ 250 e saia com a Mini Bolsa exclusiva em mãos.",
  },
];

const categorias = [
  {
    nome: "Vestidos",
    img: vestidoAzul.url,
    msg: MSG_PROVADOR,
  },
  {
    nome: "Conjuntos",
    img: conjuntoAmarelo.url,
    msg: MSG_PROVADOR,
  },
  {
    nome: "Blusas",
    img: blusaPoas.url,
    msg: MSG_PROVADOR,
  },
  {
    nome: "Looks Casuais",
    img: lookCasual.url,
    msg: MSG_PROVADOR,
  },
  {
    nome: "Peças Versáteis",
    img: lookVersatil.url,
    msg: MSG_PROVADOR,
  },
];

const faq = [
  {
    q: "Onde fica a Sheila Oliveira Store?",
    a: "Bernardino de Campos, 3465, Loja 1 — São José do Rio Preto/SP.",
  },
  {
    q: "Posso experimentar as peças na loja?",
    a: "Sim. Você pode experimentar as peças disponíveis e contar com nossa equipe para ajudar na escolha dos modelos e tamanhos.",
  },
  {
    q: "Vocês ajudam a montar o look?",
    a: "Sim. Nossa equipe pode ajudar você a encontrar combinações de acordo com seu estilo e ocasião.",
  },
  {
    q: "A Sheila Oliveira Store faz entregas?",
    a: "Sim. Realizamos entregas em São José do Rio Preto e região. Consulte disponibilidade e condições pelo WhatsApp.",
  },
  {
    q: "Como funciona o presente da Primavera-Verão?",
    a: `Nas compras elegíveis a partir de ${loja.campanha.valorMinimo}, você ganha uma Mini Bolsa exclusiva da campanha, enquanto durarem os estoques. Consulte as condições na loja.`,
  },
  {
    q: "Posso perguntar pelo WhatsApp se uma peça está disponível antes de ir à loja?",
    a: "Sim. Fale com nossa equipe e consulte modelos, tamanhos e disponibilidade antes de visitar a loja.",
  },
];

function LojaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 1. Hero */}
      <header className="bg-pink">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <p className="eyebrow">
              LOJA FÍSICA EM SÃO JOSÉ DO RIO PRETO • DESDE 2014
            </p>
            <h1 className="mt-5 text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
              Prove antes. Sinta o caimento. Leve com total certeza.
            </h1>
            <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground">
              Nada substitui experimentar no seu corpo. Venha conhecer a Sheila Oliveira
              Store na Bernardino de Campos e receba atendimento consultivo para
              encontrar peças que realmente valorizam você.
            </p>
            <p className="mt-6 inline-flex items-start gap-2 rounded-2xl bg-blush px-4 py-3 text-sm text-ink">
              <span aria-hidden="true">📍</span>
              <span>Rua Bernardino de Campos, 3465 - Loja 1 (Centro / SJRP)</span>
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={loja.maps.rota}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-primary"
              >
                📍 Traçar Rota no Google Maps
              </a>
              <a
                href={wa(MSG_VISITA)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-outline"
              >
                💬 Avisar que Estou Indo no WhatsApp
              </a>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              Atendimento consultivo e provador disponível para você experimentar com calma.
            </p>
          </div>
          <div className="relative">
            <img
              src={fachada.url}
              alt="Fachada da Sheila Oliveira Store em São José do Rio Preto"
              width={1600}
              height={1200}
              className="aspect-[4/5] w-full rounded-4xl object-cover shadow-soft"
            />
            <img
              src={araras}
              alt="Araras com peças da nova coleção na loja"
              width={1408}
              height={1008}
              loading="eager"
              decoding="async"
              className="absolute -bottom-8 -left-4 block w-32 rounded-3xl border-4 border-cream object-cover shadow-card sm:w-44"
            />
          </div>
        </div>
      </header>

      {/* 3. Benefícios */}
      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {beneficios.map((b) => (
            <div
              key={b.titulo}
              className="rounded-3xl border border-border bg-card p-6 shadow-card"
            >
              <span className="text-2xl" aria-hidden="true">
                {b.icone}
              </span>
              <h3 className="mt-4 text-xl text-ink">{b.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {b.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Por que visitar */}
      <section className="bg-pink py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={provador}
              alt="Atendente ajudando cliente a escolher um vestido no provador"
              width={1408}
              height={1008}
              loading="eager"
              decoding="async"
              className="col-span-2 aspect-[4/3] w-full rounded-4xl object-cover shadow-card"
            />
            <img
              src={vitrineManequins.url}
              alt="Vitrine da Sheila Oliveira Store com manequins e looks da coleção"
              width={1600}
              height={1200}
              loading="eager"
              decoding="async"
              className="aspect-square w-full rounded-3xl object-cover shadow-card"
            />
            <img
              src={araras}
              alt="Araras de roupas femininas na loja de Rio Preto"
              width={1408}
              height={1008}
              loading="eager"
              decoding="async"
              className="aspect-square w-full rounded-3xl object-cover shadow-card"
            />
          </div>
          <div>
            <p className="eyebrow">Por que visitar a loja</p>
            <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
              Moda de verdade feita para mulheres reais
            </h2>
            <p className="mt-6 text-[0.98rem] leading-relaxed text-muted-foreground">
              Sabemos como é frustrante comprar roupas online que marcam ou não têm o
              tecido que você esperava. Aqui você toca nas peças, vê a qualidade de
              perto e sai pronta para arrasar com looks que vestem bem de verdade.
            </p>
            <p className="mt-6 border-l-2 border-sheila pl-4 font-serif text-xl italic leading-snug text-ink">
              Experimente, sinta o caimento e descubra peças que valorizam seu corpo,
              com atendimento de verdade em São José do Rio Preto.
            </p>
            <a
              href={loja.maps.rota}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-primary mt-8"
            >
              Quero visitar a loja física
            </a>
          </div>
        </div>
      </section>

      {/* 5. Nova coleção */}
      <section className="bg-[#f7f0d1] mx-auto max-w-6xl px-4 py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Nova coleção</p>
          <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
            A Primavera-Verão chegou à Sheila
          </h2>
          <p className="mt-4 text-[0.98rem] leading-relaxed text-muted-foreground">
            Cores, tecidos e produções pensadas para acompanhar você nos dias mais
            leves da estação.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categorias.map((c) => (
            <article
              key={c.nome}
              className="overflow-hidden rounded-4xl border border-border bg-card shadow-card"
            >
              <img
                src={c.img}
                alt={`${c.nome} da coleção Primavera-Verão na Sheila Oliveira Store`}
                width={1008}
                height={1312}
                loading="eager"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="flex min-w-0 flex-col items-stretch gap-3 p-5">
                <h3 className="max-w-none overflow-visible whitespace-normal break-normal text-clip text-xl leading-snug text-ink lg:text-2xl">
                  {c.nome}
                </h3>
                <a
                  href={wa(c.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-outline w-full px-4 py-2.5 text-center text-xs"
                >
                  Provar na loja
                </a>

              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. Presentão */}
      <section className="bg-pink py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16">
          <img
            src={miniBolsa}
            alt="Mini Bolsa Exclusiva Primavera-Verão"
            width={1200}
            height={1200}
            loading="eager"
            decoding="async"
            className="aspect-square w-full rounded-4xl object-cover shadow-soft"
          />
          <div>
            <p className="eyebrow">Presentão Primavera-Verão</p>
            <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
              Seu look novo ainda vem com presente
            </h2>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-ink/80">
              Nas compras a partir de {loja.campanha.valorMinimo} em peças da campanha,
              você ganha uma Mini Bolsa exclusiva da Primavera-Verão.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              Escolha seus looks favoritos, complete {loja.campanha.valorMinimo} em
              compras e leve sua Mini Bolsa para completar suas produções.
            </p>
            <p className="mt-7 rounded-3xl bg-card/80 px-5 py-4 text-center text-[0.72rem] font-medium tracking-[0.14em] text-sheila sm:text-sm">
              COMPROU {loja.campanha.valorMinimo} EM LOOKS → GANHOU UMA MINI BOLSA
            </p>
            <a
              href={wa(MSG_PRESENTE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-primary mt-7"
            >
              🎁 Quero garantir meu presente
            </a>
            <p className="mt-4 text-xs leading-relaxed text-ink/60">
              Brinde sujeito à disponibilidade de estoque. Consulte as condições da
              campanha.
              {loja.campanha.periodo ? ` ${loja.campanha.periodo}.` : ""}
            </p>
          </div>
        </div>
      </section>

      {/* 7. Entrega local */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="eyebrow">Entrega local</p>
        <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
          Não está em Rio Preto? A Sheila pode chegar até você.
        </h2>
        <p className="mt-5 text-[0.98rem] leading-relaxed text-muted-foreground">
          Também realizamos entregas em São José do Rio Preto e cidades da região. Fale
          com nossa equipe pelo WhatsApp, veja os modelos disponíveis e consulte a
          entrega para sua cidade.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={wa(MSG_ENTREGA)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-primary"
          >
            Consultar entrega pelo WhatsApp
          </a>
          <a
            href={wa(MSG_LOOKS)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-outline"
          >
            Quero ver os looks disponíveis
          </a>
        </div>
        </div>
      </section>

      {/* 8. Localização */}
      <section className="bg-blue py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <p className="eyebrow">Localização</p>
            <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">
              Venha conhecer a Sheila Oliveira Store
            </h2>
            <address className="mt-5 not-italic text-[0.98rem] leading-relaxed text-muted-foreground">
              <span className="block font-medium text-ink">{loja.nome}</span>
              📍 Rua Bernardino de Campos, 3465 - Loja 1 (Centro / SJRP — Próximo ao
              Praça Shopping e Hospital Santa Helena). Fácil acesso e estacionamento
              próximo para você provar com calma.
            </address>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <img
              src={fachada.url}
              alt="Fachada da Sheila Oliveira Store na Bernardino de Campos, 3465"
              width={1600}
              height={1200}
              loading="eager"
              decoding="async"
              className="aspect-[4/3] w-full rounded-4xl object-cover shadow-card"
            />
            <a
              href={loja.maps.search}
              target="_blank"
              rel="noopener noreferrer"
               className="group relative block overflow-hidden rounded-4xl border border-border bg-card shadow-card"
            >
              <img
                src={mapaPreview}
                alt="Localização da Sheila Oliveira Store na Rua Bernardino de Campos, 3465"
                width={1024}
                height={768}
                loading="eager"
                decoding="async"
                 className="aspect-[4/3] w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <span className="btn-base btn-primary absolute bottom-5 left-1/2 -translate-x-1/2 px-5 py-2.5 text-xs shadow-soft">
                📍 Abrir no Google Maps
              </span>
            </a>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={loja.maps.rota}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-primary w-full px-8 py-4 text-sm tracking-[0.12em] sm:w-auto"
            >
              📍 Abrir Localização no GPS
            </a>
            <a
              href={wa(MSG_VISITA)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-outline w-full sm:w-auto"
            >
              💬 Avisar que estou indo pelo WhatsApp
            </a>
          </div>
        </div>
      </section>




      {/* 10. CTA final */}
      <section className="bg-mint-soft py-20 text-ink">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl leading-tight sm:text-4xl">
            Sua próxima produção pode estar esperando por você na Sheila
          </h2>
          <p className="mt-5 text-[0.98rem] leading-relaxed text-ink/80">
            Venha experimentar a nova Coleção Primavera-Verão ou fale com nossa equipe
            para descobrir os modelos disponíveis.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={loja.maps.rota}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base bg-card px-8 py-4 text-sheila hover:bg-cream"
            >
              📍 Quero visitar a loja
            </a>
            <a
              href={wa(MSG_LOOKS)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-outline px-8 py-4"
            >
              💬 Quero escolher pelo WhatsApp
            </a>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-ink/60">
            Compras a partir de {loja.campanha.valorMinimo} ainda garantem uma Mini
            Bolsa exclusiva, enquanto durarem os estoques.
          </p>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-4">
        <p className="eyebrow text-center">Dúvidas frequentes</p>
        <h2 className="mt-4 text-center text-3xl leading-tight text-ink sm:text-4xl">
          Perguntas frequentes
        </h2>
        <div className="mt-10 divide-y divide-border">
          {faq.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer items-start justify-between gap-4 font-serif text-xl text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="min-w-0">{f.q}</span>
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-sheila transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            </details>
          ))}
        </div>
        </div>
      </section>

      {/* 12. Rodapé */}
      <footer className="border-t border-border bg-secondary py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-3">
          <div>
            <h3 className="text-2xl text-ink">{loja.nome}</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Moda feminina para você se sentir bonita, confiante e autêntica.
            </p>
            <nav className="mt-5 flex flex-col gap-2 text-sm text-muted-foreground">
              <a
                href={loja.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sheila"
              >
                Instagram
              </a>
              <a
                href={wa(MSG_LOOKS)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sheila"
              >
                WhatsApp
              </a>
              <a href="/politica-de-privacidade" className="hover:text-sheila">
                Política de Privacidade
              </a>
              <a href="/termos-de-uso" className="hover:text-sheila">
                Termos de Uso
              </a>
            </nav>
          </div>

          <div>
            <p className="eyebrow">Visite a loja</p>
            <address className="mt-4 not-italic text-sm leading-relaxed text-muted-foreground">
              {loja.endereco}
              <br />
              {loja.cidade}
            </address>
            <a
              href={loja.maps.rota}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-outline mt-5 px-5 py-2.5 text-xs"
            >
              Ver localização
            </a>
          </div>

          <img
            src={fachada.url}
            alt="Fachada da Sheila Oliveira Store"
            width={1600}
            height={1200}
            loading="eager"
            decoding="async"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card"
          />
        </div>
        <p className="mx-auto mt-10 max-w-6xl px-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {loja.nome} — São José do Rio Preto/SP.
        </p>
      </footer>

      {/* WhatsApp flutuante */}
      <a
        href={wa(MSG_LOOKS)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Sheila Oliveira Store pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl text-primary-foreground shadow-soft transition-transform hover:scale-105"
      >
        💬
      </a>
    </div>
  );
}
