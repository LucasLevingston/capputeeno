import React, { createContext, useState, Dispatch } from "react";
import { CarrinhoType, ProdutoType } from "../types/product-type";
import { AdicionadoAoCarrinhoAlerta, LimparCarrinhoAlerta, QuantidadeAtualizadaAlerta, RemoverDoCarrinhoAlerta } from "../components/Alerts/CarrinhoAlerts";

interface CarrinhoContextType {
   carrinho: CarrinhoType[];
   adicionarAoCarrinho: (produto: ProdutoType) => void;
   removerDoCarrinho: (produto: ProdutoType) => void;
   limparCarrinho: () => void;
   quantidadeItemsCarrinho: number;
   carrinhoLenght: () => number;
   valorTotalCarrinho: () => number;
   getITodosItems: () => CarrinhoType[]
   alterarQuantidadeDoProduto: (produto: ProdutoType, novaQuantidade: number) => number
   setCarrinho: Dispatch<CarrinhoType[]>;
}

export const CarrinhoContext = createContext<CarrinhoContextType>({
   carrinho: [],
   adicionarAoCarrinho: () => { },
   limparCarrinho: () => { },
   quantidadeItemsCarrinho: 0,
   removerDoCarrinho: () => { },
   carrinhoLenght: () => 0,
   valorTotalCarrinho: () => 0,
   getITodosItems: () => [],
   alterarQuantidadeDoProduto: () => 0,
   setCarrinho: () => { },
});


interface CarrinhoProps {
   children: React.ReactNode;
}

export const CarrinhoProvider: React.FC<CarrinhoProps> = ({ children }) => {
   const [carrinho, setCarrinho] = useState<CarrinhoType[]>([]);
   const [quantidadeItemsCarrinho, setQuantidadeItemsCarrinho] = useState<number>(0);

   const adicionarAoCarrinho = (produto: ProdutoType) => {
      const items = getITodosItems()
      const itemExistente = items.find(item => item.produto.id === produto.id);
      let novoCarrinho: CarrinhoType[] = [];
      if (itemExistente) {
         novoCarrinho = items.map(item =>
            item.produto.id === produto.id
               ? { ...item, quantidade: item.quantidade + 1 }
               : item
         );
      } else {
         novoCarrinho = [...items, { produto, quantidade: 1 }];
      }

      localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
      setCarrinho(novoCarrinho);
      AdicionadoAoCarrinhoAlerta(produto)
   };
   const removerDoCarrinho = (produto: ProdutoType) => {
      const items = getITodosItems();
      const itemRemoverIndex = items.findIndex(item => item.produto.id === produto.id);

      if (itemRemoverIndex !== -1) {
         const novoCarrinho = [...items.slice(0, itemRemoverIndex), ...items.slice(itemRemoverIndex + 1)];

         localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
         setCarrinho(novoCarrinho);
         RemoverDoCarrinhoAlerta(produto)
      }
   };
   function getITodosItems(): CarrinhoType[] {
      const items = window.localStorage.getItem('carrinho');

      return items ? JSON.parse(items) : [];
   }

   function carrinhoLenght() {
      return getITodosItems().length
   }

   function valorTotalCarrinho() {
      const items = getITodosItems()
      let total = 0;
      items.map((item) => {
         total += item.produto.price_in_cents * item.quantidade
      })
      return total
   }

   const limparCarrinho = () => {
      setQuantidadeItemsCarrinho(0);
      setCarrinho([]);
      localStorage.clear();
      LimparCarrinhoAlerta()
   };
   const alterarQuantidadeDoProduto = (item: ProdutoType, novaQuantidade: number) => {
      const items = getITodosItems();

      if (items.some(produto => produto.produto.id === item.id)) {
         const novoCarrinho = items.map(itemAntigo =>
            itemAntigo.produto.id === item.id
               ? { ...itemAntigo, quantidade: novaQuantidade }
               : itemAntigo
         );

         localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
         QuantidadeAtualizadaAlerta(item, novaQuantidade)
         return novaQuantidade;
      } else {
         console.log("Inexistente");
         return novaQuantidade;
      }
   };



   return (
      <CarrinhoContext.Provider
         value={{
            carrinho, adicionarAoCarrinho, limparCarrinho, carrinhoLenght, getITodosItems, valorTotalCarrinho, quantidadeItemsCarrinho,
            setCarrinho, removerDoCarrinho, alterarQuantidadeDoProduto
         }}>
         {children}
      </CarrinhoContext.Provider>
   );
};
