import { CarrinhoType } from "../types/product-type";

export function getItemsFromCart(): CarrinhoType[] {
   const items = window.localStorage.getItem('carrinho');
   // if (items) {
   //    const carrinhoCompleto: CarrinhoType[] = JSON.parse(items);
   // } else {
   //    console.log('Nenhum item no carrinho');
   // }
   // console.log(JSON.parse(items))
   return items ? JSON.parse(items) : [];
}



export function limparLocalStorage() {
   localStorage.clear();
}