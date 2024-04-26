import axios from 'axios';
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
      return response.data.data.allProducts;
   } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
      throw new Error('Erro ao fazer a requisição');
   }
};

export const getProdutoById = async (id: string) => {
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

      const allProducts = response.data.data.allProducts;

      const specificProduct = allProducts.find(produto => produto.id === id);

      return specificProduct;
   } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
      throw new Error('Erro ao fazer a requisição');
   }

}
