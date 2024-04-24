import { useState } from 'react';
import Container from '../components/Container';
import ItemCard from '../components/ItemCard';
import PageButton from '../components/PageButton';
import { SlArrowDown, SlArrowLeft, SlArrowRight } from 'react-icons/sl';

export default function Catalogo() {
	const [botaoSelecionado, setBotaoSelecionado] = useState('todos');

	return (
		<div className="">
			<Container>
				<div className="flex justify-between">
					<ul className="flex items-center gap-x-5 text-[#737380]">
						<button
							onClick={() => setBotaoSelecionado('todos')}
							className={
								botaoSelecionado === 'todos'
									? 'border-b-4 border-[#FFA585] pb-1 font-bold text-black'
									: 'pb-2'
							}
						>
							<li>TODOS OS PRODUTOS</li>
						</button>
						<button
							onClick={() => setBotaoSelecionado('camisetas')}
							className={
								botaoSelecionado === 'camisetas'
									? 'border-b-4 border-[#FFA585] pb-1 font-bold text-black'
									: 'pb-2'
							}
						>
							<li>CAMISETAS</li>
						</button>
						<button
							onClick={() => setBotaoSelecionado('canecas')}
							className={
								botaoSelecionado === 'canecas'
									? 'border-b-4 border-[#FFA585] pb-1 font-bold text-black'
									: 'pb-2'
							}
						>
							<li>CANECAS</li>
						</button>
					</ul>
					<div className="space-y-4">
						<div className="flex items-center justify-end gap-2 text-[#737380]">
							<span>Organizar por</span>
							<SlArrowDown />
						</div>
						<div className="flex items-center justify-center gap-1">
							<PageButton>1</PageButton>
							<PageButton>2</PageButton>
							<PageButton>3</PageButton>
							<PageButton>4</PageButton>
							<PageButton>5</PageButton>
							<div className="flex">
								<PageButton>
									<SlArrowLeft />
								</PageButton>
								<PageButton>
									<SlArrowRight />
								</PageButton>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-wrap gap-5 pt-[110px]">
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
				</div>
			</Container>
		</div>
	);
}
