import React from 'react'
import './Contacto.css'

const Contacto = () => {
  return (
    <div className='todoContacto' id='contacto'>
        <h1 className='titleContacto'>Contacto</h1>
        <div className="juntoContact">
              <div className="metodos">
                  <div className="linkedin">
                      <img src="/linkedinwyb.png" className='logosContacto' alt="logo linkedin" />
                      <h3 className='txtsMetodos'>
                            <a href="https://www.linkedin.com/in/santiagogragera/" className='linkdedin'>
                                www.linkedin.com/in/santiagogragera
                            </a>
                        </h3>
                  </div>
                  <div className="email">
                      <img src="/gmailwyb.png" className='logosContacto' alt="logo gmail" />
                      <h3 className='txtsMetodos'>santiagogragera7@gmail.com</h3>
                  </div>
                  <div className="numerocelu">
                      <img src="/telefonowyb.png" className='logosContacto' alt="logo telefono" />
                      <h3 className='txtsMetodos'>+54 351 682 5894</h3>
                  </div>
              </div>
              <div className="texto_de_contacto">
                  <p className='contactoPara'>
                      Actualmente me encuentro en la búsqueda de empleo, por lo que te invito a contactarme ante
                      cualquier pregunta o propuesta que puedas tener. Estoy siempre atento a las diversas vías
                      de comunicación que he proporcionado, por lo que puedes esperar una respuesta rápida de
                      mi parte. ¡Gracias!
                  </p>
              </div>
        </div>

    </div>
  )
}

export default Contacto