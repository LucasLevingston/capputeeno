import { useState, useEffect } from 'react';
import ItemCard from './ItemCatalagoCard';
import { getProdutos } from '../hooks/useProducts';
import { ProdutoType } from '../types/product-type';

function ProdutosComponent({ selecionado, paginaAtual }: { selecionado: string, paginaAtual: number }) {

   const [produtos, setProdutos] = useState<ProdutoType[]>([]);

   const startIndex = (paginaAtual - 1) * 12;
   const endIndex = startIndex + 12;

   useEffect(() => {
      const fetchProdutos = async () => {
         try {
            const produtosData = await getProdutos();
            setProdutos(produtosData);
         } catch (error) {
            console.error('Erro ao buscar produtos:', error);
         }
      };

      fetchProdutos();
   }, [paginaAtual]);

   return (
      <div className="flex flex-wrap gap-20 pt-[30px]">
         {produtos && produtos.length > 0 ? (
            produtos.slice(startIndex, endIndex).map(produto => (
               selecionado === 'all' ? (
                  <ItemCard key={produto.id} produto={produto} />

               )
                  : produto.category === selecionado ?
                     < ItemCard key={produto.id} produto={produto} /> : (
                        null
                     )
            ))
         ) : (
            <div>Não há produtos disponíveis.</div>
         )
         }
      </div >

   );
}

export default ProdutosComponent;
