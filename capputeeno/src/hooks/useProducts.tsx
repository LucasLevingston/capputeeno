import Fastify from 'fastify';
import { GraphQLClient } from 'graphql-request';
import { ProdutoType } from '../types/product-type';

const fastify = Fastify({
   logger: true
});

export const getProdutos = async (): Promise<ProdutoType[]> => {
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
      const client = new GraphQLClient('http://localhost:3333/graphql');
      const data: { allProducts: ProdutoType[] } = await client.request(query);
      return data.allProducts;
   } catch (error) {
      fastify.log.error(error);
      throw new Error('Erro ao obter produtos da API GraphQL');
   }
};

fastify.get('/produtos', async (request, reply) => {
   try {
      const produtos = await getProdutos();
      reply.send(produtos);
   } catch (error) {
      const err: Error = error as Error;
      reply.status(500).send({ error: err.message });
   }
});

const start = async () => {
   try {
      await fastify.listen(3000);
   } catch (err) {
      fastify.log.error(err);
      process.exit(1);
   }
};
start();
