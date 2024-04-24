import Container from '../components/Container';
import imagem from '../assets/image.png';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { SlArrowLeftCircle } from 'react-icons/sl';

function Produto() {
	return (
		<Container>
			<button
				onClick={() => (window.location.href = '/')}
				className="flex items-center gap-2 pt-[25px]"
			>
				<SlArrowLeftCircle />
				Voltar
			</button>
			<div className="flex flex-col gap-8 pt-11 sm:flex-row">
				<img src={imagem} alt="" className="h-[580px] w-[640px] border " />
				<div className="flex flex-col justify-between">
					<div className="space-y-8">
						<p className="text-[16px] leading-[24px] ">Caneca</p>
						<div>
							<h1 className="text-[32px] leading-[48px] text-[#41414D]">
								Caneca de cerâmica rústica
							</h1>
							<h1 className="text-[20px] font-bold leading-[30px]">R$ 40,00</h1>
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
								Aqui vem um texto descritivo do produto, esta caixa de texto
								servirá apenas de exemplo para que simule algum texto que venha
								a ser inserido nesse campo, descrevendo tal produto.
							</h1>
						</div>
					</div>
					<div className="flex h-11 w-[448px] items-center justify-center gap-3 rounded bg-[#115D8C] text-white">
						<MdOutlineShoppingBag className="text-[24px] " />
						<p className="text-[16px] leading-[24px]">ADICIONAR AO CARRINHO</p>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default Produto;
