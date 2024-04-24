import imagem from "../assets/image.png"

export default function ItemCard() {
   return (
      <div className='w-64 h-[378px]  rounded'>
         <div className='h-[300px]'>
            <img src={imagem} alt="Imagem" />
         </div>
         <div className='flex flex-col justify-center h-[78px]  bg-white pl-3 rounded-t-none gap-1 '>
            <div className='border-b pb-[8px]'>
               Caneca de cerâmica rústica
            </div>
            <div className='font-bold'>
               R$ 40,00
            </div>
         </div>
      </div>
   )
}
