import React from 'react'
import './SobreMi.css'

const SobreMi = () => {
    return (
        <div className='sobremiContainer' id='sobremi'>
            <h1 className='smTitle'>Sobre Mí</h1>
            <p className='smPara'>
                Soy Santiago Gragera, un desarrollador Front-End de 18 años de edad. Elegí este camino impulsado por mi profunda fascinación por la tecnología y
                mi inquebrantable deseo de innovar y mejorar de manera constante.
                Mi afinidad natural con la tecnología y mi dedicación al trabajo me llevaron a encontrar
                mi lugar en el mundo de la tecnología de la información, específicamente como desarrollador Front-End.
                Este campo me cautivó debido a la libertad que el mismo brinda y la constante necesidad de aprender y adaptarse a las últimas tendencias.
                Cada día, estoy comprometido en la adquisición de nuevos conocimientos y en perfeccionar mis habilidades. Este proceso me ha proporcionado
                las herramientas necesarias para dar vida a mis propios proyectos y conceptos creativos, los cuales se presentan en este portfolio.
                Les doy la bienvenida a explorar mi trabajo y espero que disfruten de las creaciones que aquí les presento.
            </p>
            <button className='botonCV'>
                <a className='anchorCV' href="/cv.pdf" download>
                    Descargar CV
                </a>
            </button>
        </div>
    )
}

export default SobreMi