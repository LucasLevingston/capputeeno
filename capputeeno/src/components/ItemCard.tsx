import imagem from '../assets/image.png';

export default function ItemCard() {
	return (
		<button
			onClick={() => (window.location.href = '/caneca')}
			className="h-[378px]  w-64 overflow-hidden rounded-lg"
		>
			<div className="h-[300px]">
				<img src={imagem} alt="Imagem" />
			</div>
			<div className="flex h-[78px] flex-col items-start justify-center  gap-1 rounded-t-none bg-white pl-3 ">
				<div className="border-b pb-[8px]">Caneca de cerâmica rústica</div>
				<div className="font-bold">R$ 40,00</div>
			</div>
		</button>
	);
}
