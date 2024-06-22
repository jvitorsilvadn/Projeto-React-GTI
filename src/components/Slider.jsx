import { useState, useEffect, useRef } from 'react'
import '../Styles/Slider.Modules.css'
import {motion} from "framer-motion"
import image1 from '../imgs/imagem1.jpg'
import image2 from '../imgs/imagem2.jpg'
import image3 from '../imgs/imagem3.jpg'
import image4 from '../imgs/imagem4.jpg'

const imagens = [image1, image2, image3, image4
]

function Slider(){
    const carrosel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carrosel.current?.scrollWidth, carrosel.current?.offsetWidth)
        setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth)
    }, [])
    return(
    <div className="slider">
        <motion.div ref={carrosel} className="carrosel" whileTap={{cursor: "grabbing"}}>
        <motion.div className="inicioCarrosel"
        drag="x"
        dragConstraints={{right: 0, left: (-width+50)}}
        initial={{x: 50}}
        
        animate={{x: 0}}
        transition={{duration: 0.6}}
        >
            {imagens.map(item => (
                <motion.div className='fotosCarrosel'>
                    <img src={item} alt="" />
                </motion.div>
            ))}
        </motion.div>
        </motion.div>
    </div>
    )
}

export default Slider