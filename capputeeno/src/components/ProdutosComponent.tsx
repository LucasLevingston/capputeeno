import { useState, useEffect } from 'react';
import { getProdutos } from '../hooks/useProducts';
import { ProdutoType } from '../types/product-type';
import ItemCatalagoCard from './ItemCatalagoCard';

function ProdutosComponent({ selecionado, paginaAtual, filtroAtual, pesquisa }:
   { selecionado: string, paginaAtual: number, filtroAtual: string, pesquisa?: string }) {

   const [produtos, setProdutos] = useState<ProdutoType[]>([]);
   const startIndex = (paginaAtual - 1) * 12;
   const endIndex = Math.min(startIndex + 12, produtos.length);

   function filterProducts(products: ProdutoType[], filterType: string): ProdutoType[] {
      if (filterType === 'Novidades') {
         const cutoffDate = new Date();
         cutoffDate.setDate(cutoffDate.getDate() - 30);
         return products.filter(product => new Date(product.created_at) >= cutoffDate);
      }
      else if (filterType === 'Preço: Maior - menor') {

         return [...products].sort((a, b) => b.price_in_cents - a.price_in_cents);
      }
      else if (filterType === 'Preço: Menor - maior') {

         return [...products].sort((a, b) => a.price_in_cents - b.price_in_cents);
      }
      else if (filterType === 'Mais vendidos') {

         return [...products].sort((a, b) => b.sales - a.sales);
      } else {
         return products
      }

   }

   useEffect(() => {
      const fetchProdutos = async () => {
         try {
            const produtosData: ProdutoType[] = await getProdutos();
            let produtos = produtosData
            if (pesquisa) {
               produtos = produtosData.filter(product => product.name.toLowerCase().includes(pesquisa.toLowerCase()));
            }

            setProdutos(filterProducts(produtos, filtroAtual));
         } catch (error) {
            console.error('Erro ao buscar produtos:', error);
         }
      };
      fetchProdutos();
   }, [paginaAtual, filtroAtual, pesquisa]);


   return (
      <div className="flex flex-wrap gap-5 pt-[30px]">
         {produtos && produtos.length > 0 ? (
            produtos.slice(startIndex, endIndex).map(produto => (
               selecionado === 'all' ? (
                  <ItemCatalagoCard key={produto.id} produto={produto} />

               )
                  : produto.category === selecionado ?
                     <ItemCatalagoCard key={produto.id} produto={produto} /> : (
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
