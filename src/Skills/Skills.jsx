import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className='skillContainer' id='skills'>
        <h1 className="skillTitle">Habilidades</h1>
        <div className="txts_logos">
            <p className='skillPara'>
                Dentro de mis habilidades se encuentran las bases, que serían HTML5 y CSS. Luego, aprendí 
                JavaScript, lo que me permitió expandirme más y lograr mayores avances. Uno de estos grandes
                avances que obtuve como desarrollador fue aprender React.js, en el cual estoy más 
                especializado.
                <br />
                En mis páginas y proyectos, valoro mucho su diseño, y por esa razón, conozco y utilizo 
                tanto Adobe Photoshop como Figma.
            </p>
            <div className="skill_logos">
                <img src="/html.png" alt="logo HTML" />
                <img src="/css.png" alt="logo CSS" />
                <img src="/javascript.png" alt="logo JavaScript" />
                <img src="/react.png" alt="logo React" />
                <img src="/figma.png" alt="logo Figma" />
                <img src="/photoshop.png" alt="logo Photoshop" />
            </div>
        </div>
    </div>
  )
}

export default Skills