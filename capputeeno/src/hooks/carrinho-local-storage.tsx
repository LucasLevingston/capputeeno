import { CarrinhoType } from "../types/product-type";

export function getItemsFromCart(): CarrinhoType[] {
   const items = window.localStorage.getItem('carrinho');

   return items ? JSON.parse(items) : [];
}

export function carrinhoLenght() {
   return getItemsFromCart().length
}

export function valorTotalCarrinho() {
   const items = getItemsFromCart()
   let total = 0;
   items.map((item) => {
      total += item.produto.price_in_cents * item.quantidade
   })
   return total
}

export function limparLocalStorage() {
   localStorage.clear();
}