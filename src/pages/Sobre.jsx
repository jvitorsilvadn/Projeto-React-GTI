import  Projetos  from "../json/DadosContato.json";
import Navbar from "../components/Navbar";
import { Projeto } from "../components/Card"
import '../Styles/Style.css'
import Logo from '../imgs/logo.png'
import { motion } from "framer-motion";
import Carregar from "../components/Carregamento";
import Footer from "../components/Footer";


function Sobre() {
  return (
    <>
        
        <div className="container">
        <div className="foto-apresentacao"><img src={Logo} alt="" /></div>
        <div className="apresentacao"><span className='textoTopo'><p>Perfeição natural em cada projeto</p></span></div>
        </div>
        <Navbar/>
        <h1 className='titulo'>Projetos</h1>
      <p>{Projetos.map( projeto => {
        return(
          <div>
          <Projeto titulo={projeto.titulo} texto={projeto.texto} />
          </div>
        )
      })}</p>
      <Footer />
      </>
  );
}

export default Sobre