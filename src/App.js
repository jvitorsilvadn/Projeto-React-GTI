import { register } from "swiper/element/bundle";
import Main from './pages/Main'
import Sobre from './pages/Sobre'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contatos from "./pages/Contatos";

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/Sobre' element={<Sobre/>}></Route>
      <Route path="/Contatos" element={<Contatos/>}></Route>
    </Routes>
    </Router>
  );
}

export default App;
