import React from 'react'
import { CardData } from './mocked-data'
import './sedes.css'
import {SiFacebook, SiInstagram, SiGmail} from 'react-icons/si'



const Sedes = () => {
  return (
    <div className='sedes-container' id='sedes'>
        <div className='title-sedes'>
            <h3>Sedes, dias y horarios</h3>
        </div>

        <div className='cards-container'>
            {CardData.map((el,i)=>{
                return(
                    <div className='card' key={i}>
                        <div className='card-head'>
                            <div className='card-image'>
                                <img src={el.image}/>
                            </div>

                            <div className='text-head'>
                                <h4>{el.dojo}</h4>
                                <p>{el.jp}</p>
                            </div>
                        </div>
                        
                        <p>Profesor: {el.profesor}</p>
                        <p>Localidad: {el.localizacion}</p>
                        <p>Direccion: {el.direccion}</p>
                        <p>Dias: {el.dias}</p>
                        
                        
                        <div className='redes-container-sedes'>
                            <a href={el.facebook} target='_blank'><SiFacebook/></a>
                            <a href={el.instagram} target='_blank'><SiInstagram/></a>
                            <a href={el.mail} target='_blank'><SiGmail/></a>
                        </div>
                            {
                                el.ubicacion ? 
                        <div className='mapa-cont'>
                            <a href={el.ubicacion} target={'_blank'}>Ver mapa</a>
                        </div>
                            :null
                            }
                    </div>
                )
            })}
        </div>
        {console.log(CardData)}
    </div>
  )
}

export default Sedes