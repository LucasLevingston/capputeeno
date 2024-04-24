import { BrowserRouter, Route, Routes } from "react-router-dom"
import Catalogo from "./pages/Catalogo"
import Produto from "./pages/Produto"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalogo />} caseSensitive={false} />
        <Route path="/caneca" element={<Produto />} caseSensitive={false} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
