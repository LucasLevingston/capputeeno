import { useEffect } from "react";
import { useCarrinho } from "./useCarrinho";

export const useLocalStorage = () => {
   const { carrinho, setCarrinho } = useCarrinho();

   useEffect(() => {
      const carrinhoString = localStorage.getItem("carrinho");
      if (carrinhoString) {
         setCarrinho(JSON.parse(carrinhoString));
      }
   }, [setCarrinho]);

   useEffect(() => {
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
   }, [carrinho]);
};
