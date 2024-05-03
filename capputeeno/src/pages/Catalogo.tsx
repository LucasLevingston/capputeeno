import { useState } from 'react';
import Container from '../components/Container';
import ProdutosComponent from '../components/ProdutosComponent';
import FiltroCatalogo from '../components/FiltroCatalogo';
import { Header } from '../components/Header';

export default function Catalogo() {
	const [botaoSelecionado, setBotaoSelecionado] = useState('all');
	const [paginaAtual, setPaginaAtual] = useState(1);
	const [filtroAtual, setFiltroAtual] = useState('Mais vendidos');
	const [pesquisa, setPesquisa] = useState<string>('');

	const handlePesquisaChange = (novaPesquisa: string) => {
		setPesquisa(novaPesquisa);
	};
	return (
		<Container>
			<Header onPesquisaChange={handlePesquisaChange} pesquisa={pesquisa} />
			<div className="h-full w-full bg-[#F0F0F5] px-5 py-[34px] md:px-40 min-h-screen">
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
									: 'pb-2 hidden sm:block'
							}
						>
							<li>CAMISETAS</li>
						</button>
						<button
							onClick={() => setBotaoSelecionado('mugs')}
							className={
								botaoSelecionado === 'mugs'
									? 'border-b-4 border-[#FFA585] pb-1 font-bold text-black'
									: 'pb-2 hidden sm:block'
							}
						>
							<li>CANECAS</li>
						</button>
					</ul>
					<FiltroCatalogo
						paginaAtual={paginaAtual} setPaginaAtual={setPaginaAtual} filtroAtual={filtroAtual} setFiltroAtual={setFiltroAtual} />
				</div>
				<ProdutosComponent pesquisa={pesquisa} selecionado={botaoSelecionado} paginaAtual={paginaAtual} filtroAtual={filtroAtual} />
			</div >
		</Container >
	);
}
