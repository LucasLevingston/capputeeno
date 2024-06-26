import Container from '../components/Container';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { SlArrowLeftCircle } from 'react-icons/sl';
import { useParams } from 'react-router-dom';
import { getProdutoById, } from '../hooks/useProducts';
import { ProdutoType } from '../types/product-type';
import { useEffect, useState } from 'react'
import { formatarPreco } from '../static';
import { useCarrinho } from '../hooks/useCarrinho';
import { Header } from '../components/Header';


export function Produto() {
	const { id } = useParams<{ id: string }>();
	const { adicionarAoCarrinho } = useCarrinho();
	if (!id) {
		return <div>Id não definido</div>;
	}
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [produto, setProduto] = useState<ProdutoType>()
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		const fetchProduto = async () => {
			try {
				const produtoData = await getProdutoById(id);
				setProduto(produtoData);
				return produto;
			} catch (error) {
				console.error('Erro ao buscar produto:', error);
			}
		};

		fetchProduto();
	}, [id]);
	if (!produto) {
		return <div>Id não definido</div>;
	}

	return (
		<Container>
			<Header />
			<div className="h-full w-full bg-[#F0F0F5] px-5 py-[34px] md:px-40 min-h-screen">
				<button
					onClick={() => (window.history.back())}
					className="flex items-center gap-2 pt-[25px]"
				>
					<SlArrowLeftCircle />
					Voltar
				</button>

				<div className="flex flex-col sm:gap-8 gap-3 pt-11 sm:flex-row ">
					<img src={produto.image_url} alt="" className="sm:h-[580px] w-[640px] border  h-[330px]" />
					<div className="flex flex-col justify-between">
						<div className="space-y-8">
							<p className="text-[16px] leading-[24px] ">{produto.category}</p>
							<div>
								<h1 className="text-[32px] leading-[48px] text-[#41414D]">
									{produto.name}
								</h1>
								<h1 className="text-[20px] font-bold leading-[30px]">{formatarPreco(produto.price_in_cents)}</h1>
							</div>
							<h1 className="text-[12px] leading-[18px] ">
								*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
								R$900,00.
							</h1>
							<div className="pt-8">
								<h1 className="text-[16px] leading-6 text-[#737380]">
									Descrição
								</h1>
								<h1 className="text-[14px] leading-[21px]">
									{produto.description}
								</h1>
							</div>
						</div>
						<button
							onClick={() => adicionarAoCarrinho(produto)}
							className="flex h-11 sm:w-[448px] mt-3 items-center justify-center sm:gap-3 gap-1 rounded bg-[#115D8C] text-white"
						>
							<MdOutlineShoppingBag className=" flex text-[24px] items-center justify-center" />
							<p className="flex text-[16px] leading-[24px] items-center justify-center">ADICIONAR AO CARRINHO</p>
						</button>
					</div>
				</div>
			</div>
		</Container >
	);
}

export default Produto;
