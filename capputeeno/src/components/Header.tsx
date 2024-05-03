import { CiSearch } from 'react-icons/ci';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { useCarrinho } from '../hooks/useCarrinho';

interface HeaderProps {
	pesquisa?: string;
	onPesquisaChange?: (novaPesquisa: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ pesquisa, onPesquisaChange }) => {
	const { carrinhoLenght } = useCarrinho()
	return (
		<div className="flex h-20 w-full items-center justify-between px-5 sm:px-40">
			<button onClick={() => { window.location.href = "/" }}>

				<p className="font-saira-stencil text-[40px] text-[#5D5D6D]">
					capputeeno
				</p>
			</button>
			<div className="flex items-center space-x-5 ">
				<div className='sm:block hidden'>

					{onPesquisaChange ?
						<div className="flex  items-center rounded-lg bg-[#F3F5F6] p-2 sm:h-10 sm:w-[352px] ">
							<input
								type="text"
								placeholder={pesquisa ? pesquisa : "Procurando por algo específico?"}
								className="w-full border-0 bg-[#F3F5F6] bg-transparent  px-2 py-1 outline-none ring-0 focus:ring-0 "
								onChange={(e) => onPesquisaChange(e.target.value)}
							/>
							<CiSearch className="size-6 " />
						</div>
						: null
					}
				</div>
				<button
					onClick={() => {
						window.location.href = '/carrinho';
					}}
					className='flex'
				>
					<MdOutlineShoppingBag className="text-[24px] text-[#5D5D6D]" />
					<div className='bg-red-500 rounded-full size-6 items-center justify-center'>
						{carrinhoLenght()}
					</div>
				</button>
			</div>
		</div>
	);
}
