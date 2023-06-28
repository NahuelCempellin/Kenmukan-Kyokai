import React from 'react'
import './footer.css'
import {SiInstagram,SiFacebook,SiYoutube} from 'react-icons/si'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='redes-box'>
        <p>Contacto</p>
        <p>kenmukan.kyokai@gmail.com</p>

        <div className='redes-container'>
           
           <a target={'_blank'} href='https://www.facebook.com/kenmukan'> 
             <SiFacebook/>
            </a>
            <a>
                <SiYoutube/>
            </a>
            <a>
            <SiInstagram/>
            </a>
        </div>
        <p>© Copyright - kenmukan kyokai</p>
        <hr/>
        <a className='link' href='http://nahuelcempellin.vercel.app' target='_blank'>Desarrollado por Nahuel Cempellin</a>
        </div>

       
    </div>
  )
}

export default Footer