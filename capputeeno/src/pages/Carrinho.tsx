import Container from '../components/Container';
import { SlArrowLeftCircle } from 'react-icons/sl';
import { carrinhoLenght, limparLocalStorage, valorTotalCarrinho } from '../hooks/carrinho-local-storage';
import ItemsCarrinhoComponent from '../components/ItemsCarrinhoComponent';
import { formatarPreco } from '../static';

export default function Carrinho() {

   function valorFrete() {
      const total = valorTotalCarrinho() < 90000 ? 40 : 0
      console.log(total)
      return total
   }

   return (
      <Container>
         <div className='space-y-4'>
            <button
               onClick={() => (window.location.href = '/')}
               className="flex items-center gap-2 pt-[25px]"
            >
               <SlArrowLeftCircle />
               Voltar
            </button>
            <div className='flex '>
               <div className='w-[60%]  space-y-3'>
                  <div>
                     <h1 className='text-[24px] leading-9'>
                        SEU CARRINHO
                     </h1>
                     <p className='text-[16px]'>
                        Total ({carrinhoLenght()} produtos)
                        <span className='font-bold'> R$161,00</span>
                     </p>
                  </div>
                  <div className='gap-4  flex flex-col'>
                     <ItemsCarrinhoComponent />
                  </div>
               </div>
               <div className='bg-white w-[30%] p-6 flex flex-col justify-between h-[700px]'>
                  <div className='space-y-7'>
                     <h1 className='font-bold pb-6'>
                        RESUMO DO PEDIDO
                     </h1>
                     <div className='flex justify-between border-b-2 pb-5 '>
                        <div>
                           <h1>
                              Subtotal de produtos
                           </h1>
                           <h1>
                              Entrega
                           </h1>
                        </div>
                        <div>
                           <h1>
                              R$ 161,00
                           </h1>
                           <h1>
                              R$ 40,00
                           </h1>
                        </div>
                     </div>
                     <div className='flex justify-between font-bold'>
                        <h1>Total</h1>
                        <h1>{formatarPreco(valorFrete() + valorTotalCarrinho())}</h1>
                     </div>
                     <div className='flex justify-center items-center'>
                        <div className='flex justify-center  border w-[304px] rounded bg-[#51B853] text-white p-3'>
                           FINALIZAR A COMPRA
                        </div>
                     </div>
                     <button onClick={limparLocalStorage} className='flex justify-center  border w-[304px] rounded bg-red-500 text-white p-3'>
                        LIMPAR CARRINHO
                     </button>
                  </div>
                  <div className='flex flex-col items-start'>
                     <button className='text-[14px] underline leading-5 text-[#737380]'>AJUDA</button>
                     <button className='text-[14px] underline leading-5 text-[#737380]'>REEMBOLSOS</button>
                     <button className='text-[14px] underline leading-5 text-[#737380]'>ENTREGAS E FRETE</button>
                     <button className='text-[14px] underline leading-5 text-[#737380]'>TROCAS E DEVOLUÇÕES</button>
                  </div>
               </div>
            </div>
         </div>
      </Container>
   );
}
