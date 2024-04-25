import { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import { getProdutos } from '../hooks/useProducts';
import { ProdutoType } from '../types/product-type';

const ProdutosComponent = () => {
   const [produtos, setProdutos] = useState<ProdutoType[]>([]);

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
   }, []);

   return (
      <div className="flex flex-wrap gap-5 pt-[110px]">
         {produtos && produtos.length > 0 ? (
            produtos.map(produto => (
               <ItemCard key={produto.id} produto={produto} />
            ))
         ) : (
            <div>Não há produtos disponíveis.</div>
         )}
      </div>
   );
};

export default ProdutosComponent;
