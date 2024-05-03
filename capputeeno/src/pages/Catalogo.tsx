import { useState } from 'react';
import Container from '../components/Container';
import ProdutosComponent from '../components/ProdutosComponent';
import FiltroCatalogo from '../components/FiltroCatalogo';

export default function Catalogo() {
	const [botaoSelecionado, setBotaoSelecionado] = useState('all');
	const [paginaAtual, setPaginaAtual] = useState(1);
	const [filtroAtual, setFiltroAtual] = useState('Mais vendidos');

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
					<FiltroCatalogo
						paginaAtual={paginaAtual} setPaginaAtual={setPaginaAtual} filtroAtual={filtroAtual} setFiltroAtual={setFiltroAtual} />
				</div>
				<ProdutosComponent selecionado={botaoSelecionado} paginaAtual={paginaAtual} filtroAtual={filtroAtual} />
			</Container >
		</div >
	);
}
