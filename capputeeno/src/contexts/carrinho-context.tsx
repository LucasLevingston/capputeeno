import React, { createContext, useState, useContext, Dispatch } from "react";
import { ProdutoType } from "../types/product-type";

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

// Hook personalizado para usar o contexto do carrinho
export const useCarrinho = () => useContext(CarrinhoContext);

// Props para o CarrinhoProvider
interface CarrinhoProps {
   children: React.ReactNode;
}

// Componente do provedor do carrinho
export const CarrinhoProvider: React.FC<CarrinhoProps> = ({ children }) => {
   const [carrinho, setCarrinho] = useState<CarrinhoType[]>([]);
   const [quantidadeItemsCarrinho, setQuantidadeItemsCarrinho] = useState<number>(0);

   // Função para adicionar um produto ao carrinho
   const adicionarAoCarrinho = (produto: ProdutoType) => {
      const itemExistente = carrinho.find(item => item.produto.id === produto.id);
      let novoCarrinho: CarrinhoType[] = [];

      if (itemExistente) {
         novoCarrinho = carrinho.map(item =>
            item.produto.id === produto.id
               ? { ...item, quantidade: item.quantidade + 1 }
               : item
         );
      } else {
         novoCarrinho = [...carrinho, { produto, quantidade: 1 }];
      }

      // Recuperar os itens existentes do localStorage
      const localStorageItems = localStorage.getItem('carrinho');
      const itensExistente: CarrinhoType[] = localStorageItems ? JSON.parse(localStorageItems) : [];

      // Combinar os itens existentes com os novos itens do carrinho
      const carrinhoCompleto = [...itensExistente, ...novoCarrinho];

      // Salvar o resultado de volta no localStorage
      localStorage.setItem("carrinho", JSON.stringify(carrinhoCompleto));
      setCarrinho(novoCarrinho);
   };




   // Função para limpar o carrinho
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
