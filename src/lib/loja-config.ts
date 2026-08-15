// Ponto único de edição das informações da loja e da campanha.
export const loja = {
  nome: "Sheila Oliveira Store",
  endereco: "Bernardino de Campos, 3465, Loja 1",
  cidade: "São José do Rio Preto — SP",
  // Substitua pelo número real com DDI/DDD (somente dígitos).
  whatsapp: "5517992287373",
  instagram: "https://instagram.com/sheilaoliveirastorerp",
  maps: {
    rota: "https://www.google.com/maps/dir/?api=1&destination=Bernardino+de+Campos,+3465,+Loja+1,+S%C3%A3o+Jos%C3%A9+do+Rio+Preto+-+SP",
    embed:
      "https://www.google.com/maps?q=Bernardino+de+Campos,+3465,+S%C3%A3o+Jos%C3%A9+do+Rio+Preto+-+SP&output=embed",
  },
  campanha: {
    valorMinimo: "R$ 250",
    // Deixe vazio para não exibir datas. Ex.: "Válida de 01/09 a 30/09".
    periodo: "",
  },
} as const;

export function wa(mensagem: string) {
  return `https://wa.me/${loja.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
