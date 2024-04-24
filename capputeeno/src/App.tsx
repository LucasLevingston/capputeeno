import { BrowserRouter, Route, Routes } from "react-router-dom"
import Catalogo from "./pages/Catalogo"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalogo />} caseSensitive={false} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
