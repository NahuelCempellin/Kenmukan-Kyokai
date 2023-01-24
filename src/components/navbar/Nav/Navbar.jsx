import React from 'react'
import Logo from '../../logo/Logo'
import '../navbar.css'



const Navbar = () => {
  return (
    <div className='nav-container'>
        <Logo/>


        <div className='item-container'>
            <a>Noticias</a>
            <a>Kendo</a>
            <a>Iaido</a>
            <a>Sedes</a>
            <a>Contacto</a>
        </div>
    </div>
  )
}

export default Navbar