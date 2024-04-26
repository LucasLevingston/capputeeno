import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalogo from './pages/Catalogo';
import Produto from './pages/Produto';
import Carrinho from './pages/Carrinho';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Catalogo />} caseSensitive={false} />
				<Route path="/produto/:id" element={<Produto />} caseSensitive={false} />
				<Route path="/carrinho" element={<Carrinho />} caseSensitive={false} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
