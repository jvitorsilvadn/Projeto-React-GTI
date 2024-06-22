import '../Styles/Navbar.Modules.css'
import Logo from "../imgs/logo.png"
import { Link } from 'react-router-dom';

function Navbar({acao}) {
    return(

        
        <nav className={acao ? 'someNavbar' : 'navbar'}>

            <div class="logo">
            <span class="iconeLogo"><Link to='/Main'><img src={Logo}/></Link></span>
            </div>


            <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to="/Sobre">Sobre</Link></li>
                    <li><Link to='/Contatos'>Contato</Link></li>
            </ul>
        </nav>


    )
}

export default Navbar