import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='nbcontainer'>
        <p className='title'>gragera.dev</p>
        <div className="list">
            <li className='list_item'>Sobre Mi</li>
            <li className='list_item'>Habilidades</li>
            <li className='list_item'>Proyectos</li>
            <li className='list_item'>Contacto</li>
        </div>
    </div>
  )
}

export default NavBar