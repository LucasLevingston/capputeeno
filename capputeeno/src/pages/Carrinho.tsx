import Container from '../components/Container';
import { SlArrowLeftCircle } from 'react-icons/sl';
import ItemsCarrinhoComponent from '../components/ItemsCarrinhoComponent';
import { formatarPreco } from '../static';
import { useCarrinho } from '../hooks/useCarrinho';
import { FaRegTrashAlt } from 'react-icons/fa';

export default function Carrinho() {

   function valorFrete() {
      if (valorTotalCarrinho() === 0) {
         return 0
      }
      const total = valorTotalCarrinho() < 90000 ? 4000 : 0
      return total
   }
   const { carrinhoLenght, valorTotalCarrinho, limparCarrinho } = useCarrinho()
   return (
      <Container>
         <div className='space-y-4'>
            <button
               onClick={() => (window.history.back())}
               className="flex items-center gap-2 pt-[25px]"
            >
               <SlArrowLeftCircle />
               Voltar
            </button>
            <div className='flex '>
               <div className='w-[60%]  space-y-3'>
                  <div className='flex justify-between w-[90%]'>
                     <div>

                        <h1 className='text-[24px] leading-9'>
                           SEU CARRINHO
                        </h1>
                        <p className='text-[16px]'>
                           Total ({carrinhoLenght()} produtos)
                           <span className='font-bold'> {formatarPreco(valorTotalCarrinho())}</span>
                        </p>
                     </div>
                     <div className='items-center flex justify-center'>

                        <button
                           className='flex justify-center items-center  w-[50px] rounded  text-white p-3'
                           onClick={limparCarrinho}
                        >
                           <FaRegTrashAlt className='text-[#DE3838] text-[24px]' />

                        </button>
                     </div>
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
                              {formatarPreco(valorTotalCarrinho())}
                           </h1>
                           <h1>
                              {formatarPreco(valorFrete())}
                           </h1>
                        </div>
                     </div>
                     <div className='flex justify-between font-bold'>
                        <h1>Total</h1>
                        <h1>{formatarPreco(valorFrete() + valorTotalCarrinho())}</h1>
                     </div>
                     <div className='flex justify-center items-center'>
                        <button>
                           <div className='flex justify-center  border w-[304px] rounded bg-[#51B853] text-white p-3'>
                              FINALIZAR A COMPRA
                           </div>
                        </button>
                     </div>
                  </div>
                  <div className='space-y-2'>
                     <div className='flex flex-col items-start'>
                        <button className='text-[14px] underline leading-5 text-[#737380]'>AJUDA</button>
                        <button className='text-[14px] underline leading-5 text-[#737380]'>REEMBOLSOS</button>
                        <button className='text-[14px] underline leading-5 text-[#737380]'>ENTREGAS E FRETE</button>
                        <button className='text-[14px] underline leading-5 text-[#737380]'>TROCAS E DEVOLUÇÕES</button>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </Container>
   );
}
