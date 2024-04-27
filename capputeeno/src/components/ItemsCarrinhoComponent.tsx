import { getItemsFromCart } from '../hooks/carrinho-local-storage'
import { CarrinhoType } from '../types/product-type'
import ItemCarrinhoCard from './ItemCarrinhoCard'

export default function ItemsCarrinhoComponent() {
   const items = getItemsFromCart()
   console.log(items)
   return (
      <div className='gap-3 flex flex-col'>
         {items?.map((item: CarrinhoType) => {
            // { console.log(produto.produto) }
            return <ItemCarrinhoCard produto={item.produto} quantidade={item.quantidade} key={item.produto.id} />;
         })}

      </div>
   )
}
