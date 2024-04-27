export const formatarPreco = (precoEmCentavos: number) => {
   const precoEmReais = (precoEmCentavos / 100).toFixed(2);
   return `R$ ${precoEmReais.replace('.', ',')}`;
};