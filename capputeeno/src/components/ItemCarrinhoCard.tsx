import { SlArrowDown } from 'react-icons/sl';
import { FaRegTrashAlt } from 'react-icons/fa';
import { CarrinhoType } from '../types/product-type';
import { formatarPreco } from '../static';
import { useCarrinho } from '../hooks/useCarrinho';


export default function ItemCarrinhoCard({ produto, quantidade }: CarrinhoType) {

   const { removerDoCarrinho } = useCarrinho()
   return (
      <div className="flex rounded-lg w-[736px] overflow-hidden" >
         <div className="w-64 border h-[211px] ">
            <img src={produto.image_url} alt="" />
         </div>
         <div className="bg-white p-6 w-[480px] flex justify-between flex-col">
            <div className='flex justify-between'>
               <h1 className='text-[20px] leading-7'>
                  {produto.name}
               </h1>
               <button onClick={() => { removerDoCarrinho(produto) }} >

                  <FaRegTrashAlt className='text-[#DE3838] text-[24px]' />
               </button>
            </div>
            <h1 className="text-[12px] leading-4 text-[#41414D]">
               {produto.description}
            </h1>
            <div className='flex justify-between'>
               <button
                  className=" h-8 w-16 rounded-lg gap-5 bg-[#E9E9F0] flex items-center justify-center border border-[#A8A8B3]"
               >
                  <span className='text-[16px] text-[#737380]'>
                     {quantidade}
                  </span>
                  <SlArrowDown className='w-[8px]' />
               </button>
               <h1 className='font-bold text-[16px]'>R$ {formatarPreco(produto.price_in_cents)}</h1>
            </div>
         </div>
      </div >
   )
}
