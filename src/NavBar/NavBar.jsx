import React, { useRef } from 'react'
import {Link} from 'react-scroll'
import './NavBar.css'

const NavBar = () => {

  const targetRef = useRef(null)

  return (
    <div className='nbcontainer'>
        <p className='title'>
          <Link to='hero' spy={true} smooth={true} offset={-window.innerHeight / 4} duration={500}>
           gragera.dev
          </Link>
        </p>
        <div className="list">
            <li className='list_item'>
              <Link to='sobremi' spy={true} smooth={true} offset={-window.innerHeight / 4} duration={500}>
                Sobre Mi
              </Link>
            </li>
            <li className='list_item'>
              <Link to='skills' spy={true} smooth={true} offset={-window.innerHeight / 4} duration={500}>
               Habilidades
              </Link>
            </li>
            <li className='list_item'>
              <Link to='proyectos' spy={true} smooth={true} offset={-window.innerHeight / 4} duration={500}>
                Proyectos
              </Link>
            </li>
            <li className='list_item'>
              <Link to='contacto' spy={true} smooth={true} offset={-window.innerHeight / 4} duration={500}>
                Contacto
              </Link>
            </li>
        </div>
    </div>
  )
}

export default NavBar