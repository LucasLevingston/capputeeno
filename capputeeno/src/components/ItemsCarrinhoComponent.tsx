import React from 'react'
import { getItemsFromCart } from '../hooks/carrinho-local-storage'
import { CarrinhoType } from '../types/product-type'
import ItemCard from './ItemCard'
import ItemCarrinhoCard from './ItemCarrinhoCard'

export default function ItemsCarrinhoComponent() {
   const items = getItemsFromCart()
   return (
      <div className='gap-3 flex flex-col'>
         {items?.map((produto: CarrinhoType) => {
            return <ItemCarrinhoCard produto={produto} key={produto.produto.id} />;
         })}

      </div>
   )
}
