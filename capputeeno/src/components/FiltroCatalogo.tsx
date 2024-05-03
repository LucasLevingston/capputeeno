import React, { useState } from 'react';
import { SlArrowDown, SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import PageButton from './PageButton';
import DropdownFilter from './DropdownFilter';

interface FiltroCatalogoProps {
   paginaAtual: number;
   filtroAtual: string;
   setFiltroAtual: React.Dispatch<React.SetStateAction<string>>;
   setPaginaAtual: React.Dispatch<React.SetStateAction<number>>;
}

const FiltroCatalogo: React.FC<FiltroCatalogoProps> =
   ({ paginaAtual: paginaAtualProp, setPaginaAtual, filtroAtual: FiltroAtualProp, setFiltroAtual }) => {

      const [dropdown, setDropdown] = useState(false);
      const [filtroAtual, setLocalFiltroAtual] = useState<string>(FiltroAtualProp);
      const [paginaAtual, setLocalPaginaAtual] = useState(paginaAtualProp);
      const paginaIndex = [1, 2, 3, 4, 5];

      const handlePaginaChange = (novaPagina: number) => {
         setLocalPaginaAtual(novaPagina);
         setPaginaAtual(novaPagina);
      };
      const handleFiltroChange = (novoFiltro: string) => {
         setLocalFiltroAtual(novoFiltro);
         setFiltroAtual(novoFiltro)
      };

      return (
         <div className="space-y-4 flex flex-col">
            <button onClick={() => setDropdown(!dropdown)} className=''>
               <div className="flex items-center justify-end gap-2 text-[#737380]">
                  <span>{filtroAtual ? filtroAtual : 'Organizar por'}</span>
                  <SlArrowDown />
               </div>
               <div className='flex justify-end'>
                  {dropdown ? <DropdownFilter onFilterChange={handleFiltroChange} /> : null}
               </div>
            </button>
            <div className=' hidden sm:block'>
               <div className="flex items-center justify-center gap-1">
                  <PageButton
                     disabled={paginaAtual === 1}
                     bgColor={paginaAtual === 1 ? '#FFF' : undefined}
                     onClick={() => handlePaginaChange(paginaAtual - 1)}
                  ><SlArrowLeft />
                  </PageButton>
                  {paginaIndex.map((index) => (
                     paginaAtual === index ?
                        <PageButton disabled key={index} bgColor='gray' text='black' >{index}</PageButton> :
                        <PageButton key={index} onClick={() => handlePaginaChange(index)}>{index}</PageButton>
                  ))}
                  <PageButton
                     disabled={paginaAtual === 5}
                     bgColor={paginaAtual === 5 ? '#FFF' : undefined}
                     onClick={() => handlePaginaChange(paginaAtual + 1)}
                  >

                     <SlArrowRight />
                  </PageButton>
               </div>
            </div>
         </div >
      );
   };

export default FiltroCatalogo;
