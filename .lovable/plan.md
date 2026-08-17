# Hero section sticky/pinned on scroll

## Objetivo
Manter a Hero Section visualmente presente enquanto o usuário arrasta a página para baixo, fazendo com que o conteúdo seguinte (seção de benefícios) deslize sobre ela.

## Alterações propostas

### 1. Estrutura de empilhamento da Hero
- Transformar a `<header id="top">` em um bloco que ocupa `100vh` e fica fixo/presinho no topo da viewport.
- Aplicar `position: sticky; top: 0; height: 100vh` ou `position: fixed; inset: 0; height: 100vh; z-index: 0`.

### 2. Comportamento de scroll das seções seguintes
- A seção de benefícios (primeira após a Hero) deve rolar por cima da Hero, usando `position: relative; z-index: 10` e fundo opaco (`bg-background`).
- Se usar `position: fixed` na Hero, adicionar `margin-top: 100vh` na seção de benefícios para reservar o espaço da Hero e manter o scroll natural.
- Se usar `position: sticky`, garantir que o wrapper pai permita o sticky e que a seção seguinte tenha `z-index` maior para cobrir a Hero ao passar.

### 3. Ajustes visuais de segurança
- Manter o fundo `bg-pink/25` da Hero para que ela seja visível atrás do conteúdo que sobrepõe.
- Garantir que a imagem principal e os textos da Hero não sejam cortados em telas menores: ajustar o conteúdo interno com `overflow-y-auto` ou `max-h-full` se necessário, sem perder a proporção elegante atual.
- Preservar os botões de CTA, o selo de presente e a animação `fade-up` já existentes.

### 4. Verificação
- Rodar `bunx tsc --noEmit` após as alterações.
- Testar o scroll em desktop e mobile para confirmar que a Hero permanece visível e o conteúdo seguinte desliza sobre ela sem quebrar o layout.
