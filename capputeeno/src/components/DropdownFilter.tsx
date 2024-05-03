import { useState } from "react";
import { FaCheck } from "react-icons/fa";

interface DropdownFilterProps {
   onFilterChange: (filtro: string) => void;
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({ onFilterChange }) => {
   const filtros = ["Novidades", "Preço: Maior - menor", "Preço: Menor - maior", "Mais vendidos"];
   const [filtroAtual, setFiltroAtual] = useState("")

   async function handleFilterClick(filtro: string) {
      onFilterChange(filtro)
      setFiltroAtual(filtro)
   }

   return (
      <div className="absolute w-44 rounded-md text-[#737380] bg-[#FFF] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
         role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
         <div className="p-3 space-y-2" role="none">
            {filtros.map((filtro) => (
               <p key={filtro}
                  className={`text-gray-700 items-left justify-start flex text-sm ${filtro === filtroAtual ? 'gap-1' : ''}`}
                  role="menuitem"
                  onClick={() => handleFilterClick(filtro)}>
                  <>
                     {filtro === filtroAtual && <FaCheck />}
                     {filtro}
                  </>
               </p>
            ))}
         </div>
      </div>
   );
};

export default DropdownFilter;
