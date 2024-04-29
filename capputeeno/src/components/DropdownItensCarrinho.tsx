import { useCarrinho } from "../hooks/useCarrinho";
import { ProdutoType } from "../types/product-type";
interface DropdownItensCarrinhoProps {
   produto: ProdutoType;
}

export const DropdownItensCarrinho: React.FC<DropdownItensCarrinhoProps> = ({ produto }) => {
   const numbers = Array.from({ length: 8 }, (_, i) => i + 1);
   const { alterarQuantidadeDoProduto } = useCarrinho()
   return (
      <div className="absolute z-10 mt-2 w-16 origin-top-right rounded-md bg-[#E9E9F0] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
         <div className="py-1 space-y-2" role="none">
            {numbers.map((number, index) => (
               <a key={index} href="#" className="text-gray-700 items-center justify-center flex text-sm " role="menuitem"
                  onClick={() => { alterarQuantidadeDoProduto(produto, number) }}>
                  {number}
               </a>
            ))}
         </div>
      </div>
   );
}
