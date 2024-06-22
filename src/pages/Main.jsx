import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import image1 from '../imgs/imagem1.jpg'
import image2 from '../imgs/imagem2.jpg'
import image3 from '../imgs/imagem3.jpg'
import image4 from '../imgs/imagem4.jpg'
import { useEffect, useState } from "react"
import Carregar from "../components/Carregamento"
import Depoimentos from '../json/Depoimentos.json'
import Footer from "../components/Footer";
const imagens = [image1, image2, image3, image4]




function Main(){
    const [someNavbar, setSomeNavbar] = useState(false)
    useEffect(function(){
        function posicaoScroll(){
            if(window.scrollY > 10){
                setSomeNavbar(true)
            }else{
                setSomeNavbar(false)
            }
        }
        window.addEventListener('scroll', posicaoScroll)

    })

    const [carregando, setCarregando] = useState(true)
    useEffect(() => {
        setTimeout(() => setCarregando(false), 1500)
    },[])

    return(
        <>
        <Navbar acao={someNavbar}/>
      {   carregando ? <Carregar/> :
        <Slider/>
        }
        <div className="sessaoTexto">
        <div className="textoPrincipal">
            <h1>TRANSFORME SUA CASA COM O TOQUE ELEGANTE DO MÁRMORE</h1>
            <p className="centralizar">Seja bem-vindo à Emagran!</p><p className="justificar"> Na Emagran, acreditamos que cada espaço pode ser transformado em uma obra de arte com o uso adequado do mármore. Nossa missão é trazer elegância e sofisticação para sua casa ou empresa através de produtos de alta qualidade e um serviço excepcional.</p>
        </div>
        <h1 className="centralizarTitulo">Nossos Numeros</h1>
        <div className="nossosNumeros">
            <span>A mais de 4 anos no mercado</span>
            <span>+ de 1000 Clientes Satisfeitos</span>
            <span>Com mais de 30 tipos de granitos naturais e industrializados</span>
        </div>
        </div>
        <div className="depoimentos">
            <h1>Avaliações dos nossos Clientes</h1>
            <div className="avaliacoes">
                {Depoimentos.map(depoimento => {
                    return(
                        <div className="cardAvaliacoes">
                        <h3>{depoimento.cliente}</h3>
                        <p>{depoimento.avaliacao}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        <Footer />


                    
        </>
    )
}

export default Main