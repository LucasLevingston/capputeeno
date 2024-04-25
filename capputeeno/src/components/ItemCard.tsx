import { ProdutoType } from "../types/product-type";

export default function ItemCard({ produto }: { produto: ProdutoType }) {
	return (
		<button
			onClick={() => (window.location.href = '/caneca')}
			className="h-[378px] w-64 overflow-hidden rounded-lg"
		>
			<div className="h-[300px]">
				<img src={produto.image_url} alt="Imagem" />
			</div>
			<div className="flex h-[78px] flex-col items-start justify-center gap-1 rounded-t-none bg-white pl-3 ">
				<div className="border-b pb-[8px]">{produto.description}</div>
				<div className="font-bold">R$ {produto.name}</div>
			</div>
		</button>
	);
}
