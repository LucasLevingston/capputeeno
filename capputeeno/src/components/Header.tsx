import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";

export default function Header() {
   return (
      <div className="w-full h-20 flex justify-between items-center px-40">
         <p className="font-saira text-[40px] text-[#5D5D6D]">capputeeno</p>
         <div className="flex items-center space-x-4">
            <div className="flex items-center bg-[#F3F5F6] w-[352px] h-10 rounded p-2">
               <input type="text" placeholder="Procurando por algo específico?"
                  className="bg-[#F3F5F6] px-2 py-1 w-full " />
               <CiSearch className="text-[24px]" />
            </div>
            <MdOutlineShoppingBag className="text-[24px]" />
         </div>
      </div>
   )
}
