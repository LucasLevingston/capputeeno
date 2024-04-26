import { useState } from 'react';
import Container from '../components/Container';
import PageButton from '../components/PageButton';
import { SlArrowDown, SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import ProdutosComponent from '../components/ProdutosComponent';

export default function Catalogo() {
	const [botaoSelecionado, setBotaoSelecionado] = useState('all');

	return (
		<div className="">
			<Container>
				<div className="flex justify-between">
					<ul className="flex items-center gap-x-5 text-[#737380]">
						<button
							onClick={() => setBotaoSelecionado('all')}
							className={
								botaoSelecionado === 'all'
									? 'border-b-4 border-[#FFA585] pb-1 font-bold text-black'
									: 'pb-2'
							}
						>
							<li>TODOS OS PRODUTOS</li>
						</button>
						<button
							onClick={() =>
								setBotaoSelecionado('t-shirts')
							}
							className={
								botaoSelecionado === 't-shirts'
									? 'border-b-4 border-[#FFA585] pb-1 font-bold text-black'
									: 'pb-2'
							}
						>
							<li>CAMISETAS</li>
						</button>
						<button
							onClick={() => setBotaoSelecionado('mugs')}
							className={
								botaoSelecionado === 'mugs'
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
				<ProdutosComponent selecionado={botaoSelecionado} />
			</Container >
		</div >
	);
}
