import { ProdutoType } from "../types/product-type";

export const filtrarPorMaiorPreco = (produtos: ProdutoType[]): ProdutoType[] => {
   const produtosOrdenados = produtos.slice().sort((a, b) => b.price_in_cents - a.price_in_cents);
   return produtosOrdenados;
};
export const filtrarPorMenorPreco = (produtos: ProdutoType[]): ProdutoType[] => {
   const produtosOrdenados = produtos.slice().sort((a, b) => b.price_in_cents - a.price_in_cents);
   return produtosOrdenados;
};


