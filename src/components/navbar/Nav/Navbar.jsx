import React from 'react'
import Logo from '../../logo/Logo'
import '../navbar.css'
import {RxHamburgerMenu} from 'react-icons/rx'


const Navbar = () => {
  return (
    <div className='nav-container'>
        <Logo/>


        <div className='item-container'>
            <a>Home</a>
            <a>Noticias</a>
            <a>Kendo / Iaido</a>
            <a>Sedes</a>
            <a>Contacto</a>
        </div>


        <div className='responsive-nav'>
          <RxHamburgerMenu/>
        </div>
    </div>
  )
}

export default Navbar