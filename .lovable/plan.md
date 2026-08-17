# Atualizar texto/conteúdo da Hero segundo referência

## Objetivo
Substituir apenas o conteúdo escrito da Hero da loja física para refletir exatamente o texto da referência enviada, preservando o design visual atual (fontes, cores, espaçamentos, imagem e estrutura dos botões).

## Conteúdo a aplicar

1. **Eyebrow**
   - De: `Coleção Primavera–Verão`
   - Para: `LOJA FÍSICA EM SÃO JOSÉ DO RIO PRETO • DESDE 2014`

2. **Título H1**
   - De: `A nova estação começa com você`
   - Para: `Prove antes. Sinta o caimento. Leve com total certeza.`

3. **Parágrafo principal**
   - De: os dois parágrafos atuais sobre coleção e provador
   - Para: `Nada substitui experimentar no seu corpo. Venha conhecer a Sheila Oliveira Store na Bernardino de Campos e receba atendimento consultivo para encontrar peças que realmente valorizam você.`

4. **Linha de endereço**
   - Adicionar abaixo do parágrafo, com ícone de localização:
   - Texto: `Rua Bernardino de Campos, 3465 - Loja 1 (Centro / SJRP)`

5. **CTAs**
   - Botão primário (outline preenchido):
     - Texto: `Traçar Rota no Google Maps`
     - Ícone: `MapPin`
     - Link: `loja.maps.rota`
   - Botão secundário (outline):
     - Texto: `Avisar que Estou Indo no WhatsApp`
     - Ícone: `MessageCircle`
     - Link: `wa(MSG_VISITA)`

6. **Remover selo de presente**
   - O selo animado “Mini Bolsa exclusiva” não consta na referência e será removido para que o conteúdo fique idêntico ao solicitado.

## Arquivos afetados
- `src/routes/loja.tsx`

## Critérios de aceitação
- Hero exibe exatamente o texto da referência.
- Design visual (cores, fontes, espaçamentos, imagem, animação) é preservado.
- Botões usam os links corretos (Google Maps e WhatsApp).
- Typecheck e build passam sem erros.
