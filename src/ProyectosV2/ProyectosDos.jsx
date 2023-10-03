import React from 'react'
import './ProyectosDos.css'

const ProyectosDos = () => {
  return (
    <div className='todoProy' id='proyectos'>
        <h1 className='skillTitle'>Proyectos</h1>
        <div className="cardProyectos" /* RESOLVED */>
            <div className="txtsProyectos">
                <p className="proyPara">
                    He desarrollado una aplicación web de gestión financiera que te permite registrar
                    tus gastos e ingresos de forma organizada. Con esta aplicación, puedes ingresar 
                    un título, el monto del gasto o ingreso, y categorizarlos para obtener una 
                    representación visual en forma de gráficos. Esto te brinda un mayor control y una 
                    gestión más efectiva de tus recursos económicos.
                </p>
                <div className="skillUsada">
                    <img src="/html.png" alt="" className='imgSkills'/>
                    <img src="/css.png" alt="" className='imgSkills'/>
                    <img src="/react.png" alt="" className='imgSkills'/>
                    <img src="/figma.png" alt="" className='imgSkills'/>
                </div>
            </div>
            <div className='imgContainer'>
                <img src="/resolved.png" alt="" className="imgProy" />
                <div className="enlaces">
                      <a href="https://github.com/SantiGragera/ReSolved" className="enlaceA">
                        <img src="/github.png" alt="" className="imgEnlace" />
                      </a>
                      <a href="https://re-solved.netlify.app/" className="enlaceA">
                        <img src="/demo.png" alt="" className="imgEnlace" />
                      </a>
                </div>
            </div>
        </div>
        <div className="cardProyectos" /* LUTZ FERRANDO */>
              <div className='imgContainer'>
                  <img src="/lutzferrando.png" alt="" className="imgProy" />
                  <div className="enlaces">
                      <a href="https://github.com/SantiGragera/LutzFerrando" className="enlaceA">
                          <img src="/github.png" alt="" className="imgEnlace" />
                      </a>
                      <a href="https://lutzferrando.netlify.app/" className="enlaceA">
                          <img src="/demo.png" alt="" className="imgEnlace" />
                      </a>
                  </div>
              </div>
            <div className="txtsProyectos lutz">
                <p className="proyPara">
                En este caso cree una eCommerce completa que te permite explorar una amplia gama de 
                categorías y productos. Puedes seleccionar productos de tu interés y agregarlos a tu 
                carrito de compras. Posteriormente, tienes la opción de generar una orden de compra para
                finalizar tu proceso de compra. Para llevar a cabo esta funcionalidad, hemos implementado
                una base de datos en Firebase, asegurando así la confiabilidad y disponibilidad de tus
                datos de compra en todo momento. Esta solución te brinda una experiencia de compra fluida
                y segura en línea.
                </p>
                <div className="skillUsada">
                    <img src="/html.png" alt="" className='imgSkills'/>
                    <img src="/css.png" alt="" className='imgSkills'/>
                    <img src="/react.png" alt="" className='imgSkills'/>
                    <img src="/figma.png" alt="" className='imgSkills'/>
                </div>
            </div>
        </div>
        <div className="cardProyectos" /* CAMBIO DOLAR */>
            <div className="txtsProyectos">
                <p className="proyPara">
                Se trata de una aplicación web que permite efectuar conversiones entre Pesos Argentinos
                y Dólares de manera rápida y sencilla. Esta aplicación se mantiene constantemente 
                actualizada gracias a la integración con una API que actualiza los tipos de cambio
                cada dos minutos.
                </p>
                <div className="skillUsada">
                    <img src="/html.png" alt="" className='imgSkills'/>
                    <img src="/css.png" alt="" className='imgSkills'/>
                    <img src="/react.png" alt="" className='imgSkills'/>
                    <img src="/figma.png" alt="" className='imgSkills'/>
                </div>
            </div>
            <div className='imgContainer'>
                <img src="/cambiodolar.png" alt="" className="imgProy" />
                <div className="enlaces">
                      <a href="https://github.com/SantiGragera/CambioDolar" className="enlaceA">
                        <img src="/github.png" alt="" className="imgEnlace" />
                      </a>
                      <a href="https://cambiodolar.netlify.app/" className="enlaceA">
                        <img src="/demo.png" alt="" className="imgEnlace" />
                      </a>
                </div>
            </div>
        </div>
        <div className="cardProyectos" /* TIENDA TALLERES */>
              <div className='imgContainer'>
                  <img src="/tiendacat.png" alt="" className="imgProy" />
                  <div className="enlaces">
                      <a href="https://github.com/SantiGragera/tiendaTalleres" className="enlaceA">
                          <img src="/github.png" alt="" className="imgEnlace" />
                      </a>
                      <a href="https://tiendatalleres.netlify.app/" className="enlaceA">
                          <img src="/demo.png" alt="" className="imgEnlace" />
                      </a>
                  </div>
              </div>
            <div className="txtsProyectos lutz">
                <p className="proyPara">
                He creado una eCommerce inspirada en una tienda física real y la he personalizado de
                acuerdo a mis conocimientos para ofrecer una experiencia completa. Esta página web
                es altamente funcional y cuenta con una amplia variedad de productos organizados
                en diferentes categorías. Además, incorpora un carrito de compras que permite
                a los usuarios seleccionar y gestionar los productos que desean adquirir.
                </p>
                <div className="skillUsada">
                    <img src="/html.png" alt="" className='imgSkills'/>
                    <img src="/css.png" alt="" className='imgSkills'/>
                    <img src="/react.png" alt="" className='imgSkills'/>
                    <img src="/figma.png" alt="" className='imgSkills'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProyectosDos