# Adicionar Localização e Horário ao header (layout clean)

## Objetivo
Incluir no header informações úteis de navegação para a loja física — Localização e Horário de funcionamento — mantendo o topo clean e sem poluir visualmente.

## Decisões tomadas com o usuário
- Objetivo principal: **Navegação**
- Elementos a incluir: **Localização** e **Horário de funcionamento**
- Layout desejado: **Clean** — apenas links essenciais, sem segunda linha de informações

## Alterações propostas

1. **Expandir o menu de navegação do header**
   - Adicionar links âncora ao lado de "Coleção", "Novidades" e "Contato":
     - `Localização` → `#localizacao` (seção já existente)
     - `Horário` → `#horario` (nova âncora)
   - Manter todos os links em uma única linha para preservar o visual clean.
   - Ajustar espaçamento (`gap`) se necessário para acomodar os novos links em desktop.

2. **Criar âncora de destino para Horário**
   - Adicionar `id="horario"` à seção do FAQ que já responde "Vocês ajudam a montar o look?" ou a uma seção próxima que fale sobre atendimento/horários.
   - Caso não exista uma seção adequada, criar um pequeno bloco dentro da seção de localização ou FAQ com os horários de funcionamento e aplicar o `id="horario"`.

3. **Manter comportamento responsivo**
   - No mobile, manter o menu colapsado (hambúrguer) ou ocultar os novos links, para que o topo não fique lotado.
   - Garantir que o logo e o botão do WhatsApp continuem alinhados.

4. **Ajustar a barra de aviso (se necessário)**
   - Avaliar se a promo bar pode conter uma informação curta de horário em mobile (ex.: "Seg–Sex 9h–19h, Sáb 9h–14h") sem perder a legibilidade.
   - Como o usuário escolheu layout clean, a solução principal continua sendo os links de navegação; a promo bar pode ou não receber essa informação extra.

## Arquivos afetados
- `src/routes/loja.tsx` (menu de navegação do header e âncoras de destino)

## Critérios de aceitação
- Header continua com aparência clean e organizada.
- Links "Localização" e "Horário" aparecem na navegação desktop.
- Clicar em "Localização" rola suavemente até a seção de endereço.
- Clicar em "Horário" rola suavemente até a seção/âncora com horários.
- Layout mobile não fica sobrecarregado.
- Typecheck e build passam sem erros.
