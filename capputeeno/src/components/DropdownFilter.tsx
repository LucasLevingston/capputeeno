export default function DropdownFilter() {
   return (
      <div className="absolute w-44  rounded-md  text-[#737380]  bg-[#FFF] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
         role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
         <div className="p-3 space-y-2" role="none">
            <a href="#" className="text-gray-700 items-left justify-start flex text-sm " role="menuitem"
               onClick={() => { }}>
               Novidades
            </a>
            <a href="#" className="text-gray-700 items-left justify-start flex text-sm " role="menuitem"
               onClick={() => { }}>
               Preço: Maior - menor
            </a>
            <a href="#" className="text-gray-700 items-left justify-start flex text-sm " role="menuitem"
               onClick={() => { }}>
               Preço: Menor - maior
            </a>
            <a href="#" className="text-gray-700 items-left justify-start flex text-sm " role="menuitem"
               onClick={() => { }}>
               Mais vendidos
            </a>
         </div>
      </div>
   )
}
