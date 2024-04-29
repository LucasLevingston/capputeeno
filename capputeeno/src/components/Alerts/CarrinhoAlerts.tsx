import { toast } from "sonner";
import { ProdutoType } from "../../types/product-type";

export const AdicionadoAoCarrinhoAlerta = (produto: ProdutoType) => {
   toast.success(`Produto: ${produto.name} adicionado ao carrinho!`);
   setTimeout(() => {
      window.location.href = '/';
   }, 2000);
}
export const LimparCarrinhoAlerta = () => {
   toast.error(`Carrinho Limpo!`);
   setTimeout(() => {
      window.location.reload();
   }, 2000);
}
export const RemoverDoCarrinhoAlerta = (produto: ProdutoType) => {
   toast.error(`Produto: ${produto.name} removido do carrinho!`);
   setTimeout(() => {
      window.location.reload()
   }, 2000);
}
export const QuantidadeAtualizadaAlerta = (produto: ProdutoType, novaQuantidade: number) => {
   toast.success(`Produto: ${produto.name}. Quantidade alterada para ${novaQuantidade}.`);
   setTimeout(() => {
      window.location.reload()
   }, 2000);
}