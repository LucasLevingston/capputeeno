import { useState } from "react";
import Container from "../components/Container";
import ItemCard from "../components/ItemCard";

export default function Catalogo() {
   const [botaoSelecionado, setBotaoSelecionado] = useState("todos");

   return (
      <div className="">
         <Container>
            <ul className="flex gap-x-5 text-[#737380] items-center">
               <button
                  onClick={() => setBotaoSelecionado('todos')}
                  className={botaoSelecionado === "todos" ? "text-black font-bold border-b-4 border-[#FFA585] pb-1" : "pb-2"}
               >
                  <li>TODOS OS PRODUTOS</li>
               </button>
               <button
                  onClick={() => setBotaoSelecionado('camisetas')}
                  className={botaoSelecionado === "camisetas" ? "text-black font-bold border-b-4 border-[#FFA585] pb-1" : "pb-2"}
               >
                  <li>CAMISETAS</li>
               </button>
               <button
                  onClick={() => setBotaoSelecionado('canecas')}
                  className={botaoSelecionado === "canecas" ? "text-black font-bold border-b-4 border-[#FFA585] pb-1" : "pb-2"}
               >
                  <li>CANECAS</li>
               </button>
            </ul>
            <div className="pt-[110px] gap-5 flex flex-wrap"><ItemCard /><ItemCard /><ItemCard /><ItemCard /><ItemCard /><ItemCard /><ItemCard /><ItemCard /><ItemCard /></div>
         </Container>
      </div>
   )
}
