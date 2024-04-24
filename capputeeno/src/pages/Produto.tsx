import Container from '../components/Container'
import imagem from "../assets/image.png"
import { IoMdArrowBack } from 'react-icons/io'
import { MdOutlineShoppingBag } from 'react-icons/md'

function Produto() {
   return (
      <Container>
         <button
            onClick={() => (window.location.href = "/")}
            className='pt-[25px] flex items-center gap-2'
         >
            <IoMdArrowBack />
            Voltar
         </button>
         <div className='pt-11 sm:flex-row flex gap-8 flex-col'>
            <img src={imagem} alt="" className='w-[640px] h-[580px] border ' />
            <div className='flex justify-between flex-col'>
               <div className='space-y-8'>
                  <p className='text-[16px] leading-[24px] '>Caneca</p>
                  <div>
                     <h1 className='text-[32px] leading-[48px] text-[#41414D]'>Caneca de cerâmica rústica</h1>
                     <h1 className='text-[20px] font-bold leading-[30px]'>R$ 40,00</h1>
                  </div>
                  <h1 className='text-[12px] leading-[18px] '>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</h1>
                  <div className='pt-8'>

                     <h1 className='text-[16px] text-[#737380] leading-6'>Descrição</h1>
                     <h1 className='text-[14px] leading-[21px]'>
                        Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.</h1>
                  </div>
               </div>
               <div className='items-center flex justify-center w-[448px] h-11 bg-[#115D8C] rounded text-white gap-3'>
                  <MdOutlineShoppingBag className="text-[24px] " />
                  <p className='text-[16px] leading-[24px]'>
                     ADICIONAR AO CARRINHO
                  </p>
               </div>
            </div>
         </div>
      </Container>
   )
}

export default Produto