import { SlArrowDown } from 'react-icons/sl';
import { FaRegTrashAlt } from 'react-icons/fa';
import { CarrinhoType } from '../types/product-type';
import { formatarPreco } from '../static';
import { useCarrinho } from '../hooks/useCarrinho';
import { useState } from 'react';
import { DropdownItensCarrinho } from './DropdownItensCarrinho';


export default function ItemCarrinhoCard({ produto, quantidade }: CarrinhoType) {
   const [dropdown, setDropdown] = useState(false)
   const { removerDoCarrinho } = useCarrinho()

   return (

      <div className="flex rounded-lg sm:w-[736px] w-full sm:flex-row flex-col overflow-hidden" >
         <div className="sm:w-64 border sm:h-[211px] ">
            <img src={produto.image_url} alt="" />
         </div>
         <div className="bg-white sm:p-6 p-3 sm:w-[480px] flex justify-between flex-col gap-3">
            <div className='flex justify-between'>
               <h1 className='sm:text-[20px] text-[20px] leading-7'>
                  {produto.name}
               </h1>
               <button onClick={() => { removerDoCarrinho(produto) }} >

                  <FaRegTrashAlt className='text-[#DE3838] text-[24px]' />
               </button>
            </div>
            <h1 className="sm:text-[12px] leading-4 text-[#41414D] text-[14px]  text-left">
               {produto.description}
            </h1>
            <div className='flex justify-between'>
               <div className='flex justify-center items-center gap-2'>
                  <button
                     className="h-8 w-16 rounded-lg gap-5 bg-[#E9E9F0] flex items-center justify-center border border-[#A8A8B3]"
                     onClick={() => { setDropdown(!dropdown) }}
                  >
                     <span className='text-[16px] text-[#737380]' >
                        {quantidade}
                        {dropdown ? <DropdownItensCarrinho produto={produto} /> : null}
                     </span>
                     <SlArrowDown className='w-[8px]' />
                  </button>
                  <button className='h-8 w-20 rounded-lg gap-5 bg-[#E9E9F0] flex items-center justify-center border text-xs border-[#A8A8B3]' onClick={() => { window.location.href = `/produto/${produto.id}` }}>
                     <span>Ver Produto</span>
                  </button >
               </div>
               <h1 className='font-bold text-[16px]'>R$ {formatarPreco(produto.price_in_cents)}</h1>
            </div>
         </div>
      </div >
   )
}
