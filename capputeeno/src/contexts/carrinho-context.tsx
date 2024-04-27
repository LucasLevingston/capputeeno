import React, { createContext, useState, useContext, Dispatch } from "react";
import { ProdutoType } from "../types/product-type";
import { getItemsFromCart } from "../hooks/carrinho-local-storage";

// Definição da interface para os itens do carrinho
interface CarrinhoType {
   produto: ProdutoType;
   quantidade: number;
}

// Definição do tipo para o contexto do carrinho
interface CarrinhoContextType {
   carrinho: CarrinhoType[];
   adicionarAoCarrinho: (produto: ProdutoType) => void;
   limparCarrinho: () => void;

   quantidadeItemsCarrinho: number;
   setCarrinho: Dispatch<CarrinhoType[]>;
}

// Criação do contexto do carrinho
export const CarrinhoContext = createContext<CarrinhoContextType>({
   carrinho: [],
   adicionarAoCarrinho: () => { },
   limparCarrinho: () => { },
   quantidadeItemsCarrinho: 0,

   setCarrinho: () => { },
});

export const useCarrinho = () => useContext(CarrinhoContext);

interface CarrinhoProps {
   children: React.ReactNode;
}

export const CarrinhoProvider: React.FC<CarrinhoProps> = ({ children }) => {
   const [carrinho, setCarrinho] = useState<CarrinhoType[]>([]);
   const [quantidadeItemsCarrinho, setQuantidadeItemsCarrinho] = useState<number>(0);

   const adicionarAoCarrinho = (produto: ProdutoType) => {
      const items = getItemsFromCart()
      const itemExistente = items.find(item => item.produto.id === produto.id);
      let novoCarrinho: CarrinhoType[] = [];
      if (itemExistente) {
         novoCarrinho = items.map(item =>
            item.produto.id === produto.id
               ? { ...item, quantidade: item.quantidade + 1 }
               : item
         );
         console.log("PRODUTO EXISTENTE")
      } else {
         novoCarrinho = [...items, { produto, quantidade: 1 }];
         console.log("NOVO PRODUTO")
      }

      localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
      setCarrinho(novoCarrinho);
   };


   const limparCarrinho = () => {
      setQuantidadeItemsCarrinho(0);
      setCarrinho([]);
      localStorage.clear();
   };

   return (
      <CarrinhoContext.Provider value={{ carrinho, adicionarAoCarrinho, limparCarrinho, quantidadeItemsCarrinho, setCarrinho }}>
         {children}
      </CarrinhoContext.Provider>
   );
};
