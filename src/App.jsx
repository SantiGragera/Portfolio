import './App.css'
import Contacto from './Contacto/Contacto'
import Hero from './Hero/Hero'
import NavBar from './NavBar/NavBar'
import ProyectosDos from './ProyectosV2/ProyectosDos'
import Skills from './Skills/Skills'
import SobreMi from './SobreMI/SobreMi'
/* font-family: 'Lalezar', cursive;
font-family: 'Raleway', sans-serif; */

function App() {
  return (
    <>
    <NavBar />
    <Hero />
    <SobreMi />
    <Skills />
    <ProyectosDos />
    <Contacto />
    </>
  )
}

export default App
