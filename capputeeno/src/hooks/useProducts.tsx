import axios from 'axios';
import { ProdutoType } from '../types/product-type';
const url = 'http://localhost:3333/graphql'

export const getProdutos = async () => {
   const query = `
      query {
         allProducts {
            id
            name
            description
            image_url
            category
            price_in_cents
            sales
            created_at
         }
      }
   `;

   try {
      const response = await axios.get(url, {
         params: {
            query: query
         }
      });
      const produtos = response.data.data.allProducts

      return produtos;
   } catch (error) {
      console.error('[GET PRODUTO] Erro ao fazer a requisição:', error);
      throw new Error('[GET PRODUTO] Erro ao fazer a requisição');
   }
};

export const getProdutoById = async (id: string): Promise<ProdutoType> => {
   try {
      const produtos = await getProdutos()
      const produto = produtos.find((produto: ProdutoType) => produto.id === id);
      if (!produto) {
         throw new Error(`Produto com o ID ${id} não encontrado.`);
      }

      return produto;
   } catch (error) {
      console.error('[GET PRODUTO BY ID] Erro ao fazer a requisição:', error);
      throw new Error('[GET PRODUTO BY ID] Erro ao fazer a requisição');
   }
}
