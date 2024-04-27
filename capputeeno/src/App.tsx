import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalogo from './pages/Catalogo';
import Produto from './pages/Produto';
import Carrinho from './pages/Carrinho';
import { CarrinhoProvider } from './contexts/carrinho-context';

function App() {
	return (
		<BrowserRouter>
			<CarrinhoProvider>
				<Routes>
					<Route path="/" element={<Catalogo />} caseSensitive={false} />
					<Route path="/produto/:id" element={<Produto />} caseSensitive={false} />
					<Route path="/carrinho" element={<Carrinho />} caseSensitive={false} />
				</Routes>
			</CarrinhoProvider>
		</BrowserRouter>
	);
}

export default App;
