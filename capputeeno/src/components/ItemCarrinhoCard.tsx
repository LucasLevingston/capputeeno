import { SlArrowDown } from 'react-icons/sl';
import imagem from '../assets/image.png';
import { FaRegTrashAlt } from 'react-icons/fa';
import { CarrinhoType } from '../types/product-type';


export default function ItemCarrinhoCard({ produto: CarrinhoType }) {
   return (
      <div className="flex rounded-lg w-[736px] overflow-hidden" >
         <div className="w-64 border h-[211px] ">
            <img src={imagem} alt="" />
         </div>
         <div className="bg-white p-6 w-[480px] flex justify-between flex-col">
            <div className='flex justify-between'>
               <h1 className='text-[20px] leading-7'>
                  {produto.produto.name}
               </h1>
               <FaRegTrashAlt className='text-[#DE3838] text-[24px]' />
            </div>
            <h1 className="text-[12px] leading-4 text-[#41414D]">
               Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.
            </h1>
            <div className='flex justify-between'>
               <button
                  className=" h-8 w-16 rounded-lg gap-5 bg-[#E9E9F0] flex items-center justify-center border border-[#A8A8B3]"
               >
                  <span className='text-[16px] text-[#737380]'>
                     1
                  </span>
                  <SlArrowDown className='w-[8px]' />
               </button>
               <h1 className='font-bold text-[16px]'>R$ 40,00</h1>
            </div>
         </div>
      </div>
   )
}
