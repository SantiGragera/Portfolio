import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='heroContainer' id='hero'>
        <div className="txtsHero">
              <h1 className='heroTitle'>Desarrollador Front-End en React</h1>
              <p className='heroPara'>Hola! Soy Santiago Gragera, un apasionado
                  desarrollador situado en Córdoba, Argentina
              </p>
              <div className="lygContainer">
                <a href="https://github.com/SantiGragera">
                  <img className='heroContact' src="/github.png" alt="" />
                </a>
                <a href="https://www.linkedin.com/in/santiagogragera/">
                  <img className='heroContact' src="/linkedin.png" alt="" />
                </a>
              </div>
        </div>
        <img src="/foto.svg" alt="fotoMia" />
    </div>
  )
}

export default Hero