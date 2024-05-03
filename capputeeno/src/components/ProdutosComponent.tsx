import { useState, useEffect } from 'react';
import { getProdutos } from '../hooks/useProducts';
import { ProdutoType } from '../types/product-type';
import ItemCard from './ItemCatalagoCard';

function ProdutosComponent({ selecionado, paginaAtual, filtroAtual }: { selecionado: string, paginaAtual: number, filtroAtual: string }) {

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
            const produtosData = await getProdutos();

            setProdutos(filterProducts(produtosData, filtroAtual));
         } catch (error) {
            console.error('Erro ao buscar produtos:', error);
         }
      };
      fetchProdutos();
   }, [paginaAtual, filtroAtual]);


   return (
      <div className="flex flex-wrap gap-5 pt-[30px]">
         {produtos && produtos.length > 0 ? (
            produtos.slice(startIndex, endIndex).map(produto => (
               selecionado === 'all' ? (
                  <ItemCard key={produto.id} produto={produto} />

               )
                  : produto.category === selecionado ?
                     <ItemCard key={produto.id} produto={produto} /> : (
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
