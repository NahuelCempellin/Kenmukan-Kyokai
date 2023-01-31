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
           
           <a>
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
        </div>

        <div className='message-box'>
            <p>Envianos un mensaje</p>
            <input placeholder='Nombre...'/>
            <input placeholder='Mail...'/>
            <input placeholder='Asunto...'/>
            <textarea placeholder='Mensaje...'/>
        </div>
    </div>
  )
}

export default Footer