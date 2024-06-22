import Navbar from '../components/Navbar';
import '../Styles/Style.css'
import sedes from '../json/Contatos.json'
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import Footer from '../components/Footer';





function Contatos() {
  return (
        <>        
        <div className="container">
        <div className="apresentacaoContatos"></div>
        </div>
        <Navbar/>
        <div className='sedes'>
            <h2>Onde estamos</h2>
            <div className='cardsContatos'>
            {sedes.map( sede => {
        return(
            <div className='cardSede'>
              <span className='estado'>{sede.estado}</span>
              <span className='endereço'>{sede.rua}, {sede.bairro}, {sede.cidade}</span>
              <span className='iconeLocalizacao'><a href={sede.url}><FaLocationDot /></a></span>
            </div>
        )
      })}
            </div>
        </div>
        <div className='sessaoContato'>
          <h2>Ficou interessado?</h2> 
          <h3>Visite nossas redes sociais</h3>
        <div className='redesContato'>
        <span className='redesSociais'><a href=""><FaInstagram className='network'/> @emagranoficial</a></span>
        <span className='redesSociais'><a href=""><FaXTwitter className='network'/>@emagranoficial</a></span>
        <span className='redesSociais'><a href=""><FaTiktok className='network' />@emagranoficial</a></span>

        </div>
        </div>
        <Footer />
        </>
  );
}

export default Contatos