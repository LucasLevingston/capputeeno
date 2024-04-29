import React, { useState } from 'react';
import { SlArrowDown, SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import PageButton from './PageButton';
import DropdownFilter from './DropdownFilter';

interface FiltroCatalogoProps {
   paginaAtual: number;
}

const FiltroCatalogo: React.FC<FiltroCatalogoProps> = ({ paginaAtual: paginaAtualProp }) => {
   const [dropdown, setDropdown] = useState(false);
   const [paginaAtual, setPaginaAtual] = useState(paginaAtualProp);
   const paginaIndex = [1, 2, 3, 4, 5];

   return (
      <div className="space-y-4 flex flex-col">
         <button onClick={() => setDropdown(!dropdown)} className=''>
            <div className="flex items-center justify-end gap-2 text-[#737380]">
               <span>Organizar por</span>
               <SlArrowDown />
            </div>
            <div className='text-right'>
               {dropdown ? <DropdownFilter /> : null}
            </div>
         </button>
         <div className="flex items-center justify-center gap-1">
            {paginaIndex.map((index) => (
               paginaAtual === index ?
                  <PageButton disabled key={index} bgColor='black' >{index}</PageButton> :
                  <PageButton key={index} onClick={() => {
                     setPaginaAtual(index)

                  }}>{index}</PageButton>
            ))}
            <div className="flex">
               {paginaAtual === 1 ? (
                  <PageButton disabled bgColor="FFF" >
                     <SlArrowLeft />
                  </PageButton>
               ) :
                  <PageButton onClick={() => { setPaginaAtual(paginaAtual - 1) }}>
                     <SlArrowLeft />
                  </PageButton>
               }
               {paginaAtual === 5 ? (
                  <PageButton disabled bgColor="FFF" >
                     <SlArrowRight />
                  </PageButton>
               ) :
                  <PageButton onClick={() => { setPaginaAtual(paginaAtual + 1) }}>
                     <SlArrowRight />
                  </PageButton>
               }
            </div>
         </div>
      </div>
   );
};

export default FiltroCatalogo;
