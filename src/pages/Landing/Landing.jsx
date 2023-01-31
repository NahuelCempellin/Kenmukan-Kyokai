import React from 'react'
import '../../App.css'
import Pensamiento from '../../components/QueEs/pensamiento/Pensamiento'
import QueEs from '../../components/QueEs/QueEs'
import Sedes from '../../components/sedes/Sedes'


const Landing = () => {
  return (
    <div className='landing-container' id='landing'>
    <div className='title-container'>
            <div className='title'>
            <h2>Bienvenidos a</h2>
            <h1>Kenmukan Kyokai</h1>
            <p>
            Acérquese a conocer el mundo de la esgrima japonesa, e informarse acerca de nuestra organización y sus distintas sedes.
            </p>

            <div className='button-container'>
              <a href='#kendo'>¿Que es Kendo y Iaido?</a>
              <a href='#sedes'>Sedes / horarios</a>
            </div>
            </div>
          </div>

            <div className='container-pensamiento' id='kendo'>
                <QueEs/>
            </div>

            <div className='container-pensamiento' >
                    <Pensamiento/>
            </div>


            <div className='container-pensamiento'> 
                <Sedes/>
            </div>
    </div>
  )
}

export default Landing