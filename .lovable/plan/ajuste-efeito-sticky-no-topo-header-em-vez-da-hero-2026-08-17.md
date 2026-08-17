# Ajuste: efeito sticky no topo (header) em vez da Hero

## Objetivo
Transferir o comportamento de fixação/pin atualmente aplicado na Hero section para o topo da página (barra de aviso + navegação), conforme ajuste solicitado pelo usuário.

## Alterações propostas

1. **Remover sticky da Hero**
   - Remover `sticky top-0 z-0` do `<header id="top">` da Hero.
   - Restaurar a Hero ao fluxo normal do documento para evitar que ela fique como plano de fundo fixo.

2. **Aplicar sticky no topo (header completo)**
   - Agrupar a barra de aviso vermelha e a barra de navegação rosa em um único container.
   - Aplicar `sticky top-0 z-50` (ou valor adequado) nesse container para que ele permaneça visível durante o scroll.

3. **Ajustar z-index e layout**
   - Garantir que o conteúdo subsequente (Hero, benefícios, etc.) role por cima do header sticky sem sobreposição invertida.
   - Revisar o `z-10` da seção de benefícios — se a Hero voltar ao fluxo normal, ele pode não ser mais necessário ou precisar de ajuste.

4. **Manter âncoras e funcionalidades**
   - Preservar os links de navegação (`#colecao`, `#presente`, `#localizacao`) e o botão de WhatsApp no header.
   - Garantir que o `id="top"` continue no topo ou na nova estrutura sticky, sem quebrar o scroll ao clicar no logo.

## Arquivos afetados
- `src/routes/loja.tsx` (estrutura do header e Hero)
- `src/styles.css` (se necessário para ajustar sombra/background do header sticky)

## Critérios de aceitação
- O topo (barra de aviso + navegação) permanece visível ao rolar a página.
- A Hero rola normalmente junto com o conteúdo, sem ficar fixa no fundo.
- Nenhum elemento fica sobreposto de forma incorreta.
- Typecheck e build passam sem erros.
