import { useContext } from "react";
import { CarrinhoContext } from "../contexts/carrinho-context";

export const useCarrinho = () => {
   const context = useContext(CarrinhoContext);
   if (!context) {
      throw new Error("useCarrinho deve ser usado dentro de um CarrinhoProvider");
   }
   return context;
};
