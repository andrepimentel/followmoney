import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home";
import Saque from "./components/saque";
import Pix from "./components/pix";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="saque" element={<Saque />} />
        <Route path="pix" element={<Pix />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
