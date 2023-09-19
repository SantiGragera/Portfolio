import React from 'react'
import './Proyectos.css'

const Proyectos = () => {
  return (
    <div className='proyectsContainer'>
        <h1 className='skillTitle'>Proyectos</h1>
        <div className="proyectos">
            <div className="resolved" /* RESOLVED */>
                <div className="txtsProy">
                    <p className='proyPara'>
                        Dentro de mis habilidades se encuentran las bases, que serían HTML5 y CSS. Luego, aprendí
                        JavaScript, lo que me permitió expandirme más y lograr mayores avances. Uno de estos grandes
                        avances que obtuve como desarrollador fue aprender React.js, en el cual estoy más especializado.
                        En mis páginas y proyectos, valoro mucho su diseño, y por esa razón, conozco y utilizo tanto
                        Adobe Photoshop como Figma.
                    </p>
                    <div className="logosCont">
                        <a href="https://re-solved.netlify.app/" className='hover'>
                            <img src="/demo.png" alt="logo URL" className="logosProy" />
                            <p className="logoTxt">Demo</p>
                        </a>
                        <a href="https://github.com/SantiGragera/ReSolved" className='hover'>
                            <img src="/github.png" alt="logo Github" className="logosProy" />
                            <p className="logoTxt">Repositorio</p>
                        </a>
                    </div>
                </div>
                <img className='imgProyect' src="/resolved.png" alt="" />
            </div>
            <div className="resolved" /* LUTZ FERRANDO */>
                <img className='imgProyect' src="/lutzferrando.png" alt="foto Lutz" />                
                <div className="txtsProy">
                    <p className='proyPara'>
                        Dentro de mis habilidades se encuentran las bases, que serían HTML5 y CSS. Luego, aprendí
                        JavaScript, lo que me permitió expandirme más y lograr mayores avances. Uno de estos grandes
                        avances que obtuve como desarrollador fue aprender React.js, en el cual estoy más especializado.
                        En mis páginas y proyectos, valoro mucho su diseño, y por esa razón, conozco y utilizo tanto
                        Adobe Photoshop como Figma.
                    </p>
                    <div className="logosCont">
                        <a href="https://lutzferrando.netlify.app/" className='hover'>
                            <img src="/demo.png" alt="logo URL" className="logosProy" />
                            <p className="logoTxt">Demo</p>
                        </a>
                        <a href="https://github.com/SantiGragera/LutzFerrando" className='hover'>
                            <img src="/github.png" alt="logo Github" className="logosProy" />
                            <p className="logoTxt">Repositorio</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="resolved" /* CAMBIO DOLAR */>
                <div className="txtsProy">
                    <p className='proyPara'>
                        Dentro de mis habilidades se encuentran las bases, que serían HTML5 y CSS. Luego, aprendí
                        JavaScript, lo que me permitió expandirme más y lograr mayores avances. Uno de estos grandes
                        avances que obtuve como desarrollador fue aprender React.js, en el cual estoy más especializado.
                        En mis páginas y proyectos, valoro mucho su diseño, y por esa razón, conozco y utilizo tanto
                        Adobe Photoshop como Figma.
                    </p>
                    <div className="logosCont">
                        <a href="https://cambiodolar.netlify.app/" className='hover'>
                            <img src="/demo.png" alt="logo URL" className="logosProy" />
                            <p className="logoTxt">Demo</p>
                        </a>
                        <a href="https://github.com/SantiGragera/CambioDolar" className='hover'>
                            <img src="/github.png" alt="logo Github" className="logosProy" />
                            <p className="logoTxt">Repositorio</p>
                        </a>
                    </div>
                </div>
                <img className='imgProyect' src="/cambiodolar.png" alt="" />
            </div>
            <div className="resolved" /* TIENDA CAT */>
                <img className='imgProyect' src="/tiendacat.png" alt="foto Lutz" />                
                <div className="txtsProy">
                    <p className='proyPara'>
                        Dentro de mis habilidades se encuentran las bases, que serían HTML5 y CSS. Luego, aprendí
                        JavaScript, lo que me permitió expandirme más y lograr mayores avances. Uno de estos grandes
                        avances que obtuve como desarrollador fue aprender React.js, en el cual estoy más especializado.
                        En mis páginas y proyectos, valoro mucho su diseño, y por esa razón, conozco y utilizo tanto
                        Adobe Photoshop como Figma.
                    </p>
                    <div className="logosCont">
                        <a href="https://tiendatalleres.netlify.app/" className='hover'>
                            <img src="/demo.png" alt="logo URL" className="logosProy" />
                            <p className="logoTxt">Demo</p>
                        </a>
                        <a href="https://github.com/SantiGragera/tiendaTalleres" className='hover'>
                            <img src="/github.png" alt="logo Github" className="logosProy" />
                            <p className="logoTxt">Repositorio</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="clubesarg"></div>
        </div>
    </div>
  )
}

export default Proyectos