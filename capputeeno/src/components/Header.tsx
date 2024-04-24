import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";

export default function Header() {
   return (
      <div className="w-full h-20 flex justify-between items-center px-5 sm:px-40">
         <p className="font-saira-stencil text-[40px] text-[#5D5D6D]">capputeeno</p>
         <div className="flex items-center space-x-5">
            <div className="flex items-center bg-[#F3F5F6] sm:w-[352px] sm:h-10 rounded-lg p-2 w-0 h-0 ">
               <input type="text" placeholder="Procurando por algo específico?"
                  className="bg-[#F3F5F6] px-2 py-1 w-full  ring-0 focus:ring-0 border-0 bg-transparent outline-none" />
               <CiSearch className="size-6 " />
            </div>
            <MdOutlineShoppingBag className="text-[24px] text-[#5D5D6D]" />
         </div>
      </div>
   )
}
