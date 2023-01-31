import React from 'react'
import '../../App.css'
import Pensamiento from '../../components/QueEs/pensamiento/Pensamiento'
import QueEs from '../../components/QueEs/QueEs'


const Landing = () => {
  return (
    <div className='landing-container'>
    <div className='title-container'>
            <div className='title'>
            <h2>Bienvenidos a</h2>
            <h1>Kenmukan Kyokai</h1>
            <p>
            Acérquese a conocer el mundo de la esgrima japonesa, e informarse acerca de nuestra organización y sus distintas sedes.
            </p>

            <div className='button-container'>
              <a>¿Que es Kendo y Iaido?</a>
              <a>Sedes / horarios</a>
            </div>
            </div>
          </div>

            <div className='container-pensamiento'>
                <QueEs/>
            </div>

            <div className='container-pensamiento'>
                    <Pensamiento/>
            </div>
    </div>
  )
}

export default Landing