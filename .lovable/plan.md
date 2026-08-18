# Aplicar a animação Reveal na página da loja

O componente `Reveal` foi criado, mas ainda não está sendo usado em nenhum lugar da página `/loja` — por isso nada anima ao rolar. O plano é aplicá-lo aos blocos de conteúdo.

## O que será feito

Importar `Reveal` em `src/routes/loja.tsx` e envolver os elementos de cada seção, com atraso em cascata (0ms, 120ms, 240ms...) para que os itens apareçam em sequência:

- Hero: texto, botões e imagem (a hero é a primeira dobra, então entra imediatamente)
- Benefícios (bg-background e bg-pink): cada card com delay progressivo
- Coleção (bg-butter): título + cada card de look em cascata
- Presente / Mini Bolsa: texto e imagem
- Por que visitar: título, textos e galeria de fotos
- Localização: bloco de endereço, botões e mapa
- Faixa verde e rodapé: título e conteúdo

## Detalhes técnicos

- Nenhuma mudança de layout, cores ou textos: `Reveal` envolve o conteúdo sem alterar o espaçamento, usando `className` quando precisar herdar classes de grid/flex do elemento pai.
- Em listas (`.map`) o delay é calculado por índice, limitado a ~360ms para não atrasar demais.
- O componente já respeita `prefers-reduced-motion` e renderiza visível no SSR, então não há risco de conteúdo invisível sem JavaScript.
