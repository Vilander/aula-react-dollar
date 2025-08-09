import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import NoPage from "./pages/NoPage";
import CalculadoraMetros from './pages/CalculadoraMetros';
import CalculadoraCentimetros from './pages/CalculadoraCentimetros';



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='calculadora-centimetros' element={<CalculadoraCentimetros />} />
          <Route path='calculadora-metros' element={<CalculadoraMetros />} />
          <Route path='sobre' element={<Sobre />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
