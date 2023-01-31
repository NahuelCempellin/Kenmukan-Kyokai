import React from 'react'
import Logo from '../../logo/Logo'
import '../navbar.css'
import {RxHamburgerMenu} from 'react-icons/rx'


const Navbar = () => {
  return (
    <div className='nav-container'>
        <Logo/>


        <div className='item-container'>
            <a href='#landing'>Home</a>
            {/* <a>Noticias</a> */}
            <a href='#kendo'>Kendo / Iaido</a>
            <a href='#sedes'>Sedes</a>
            <a href='#footer'>Contacto</a>
        </div>


        <div className='responsive-nav'>
          {/* <RxHamburgerMenu/> */}
        </div>
    </div>
  )
}

export default Navbar