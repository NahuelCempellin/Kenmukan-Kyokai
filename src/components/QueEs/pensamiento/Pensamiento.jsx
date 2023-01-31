import React from 'react'
import './pensamiento.css'
import Iai from '../../../assets/Tozume.jpg'
import Fudo from '../../../assets/Fudo.png'
import Firma from '../../../assets/firma.png'
import Sello from '../../../assets/sello.png'




const Pensamiento = () => {
  return (
    <div className='container-pens'>

        
        <div className='text-container'>
            <h3>Nuestro pensamiento</h3>

            <p>Kendo, iai, budo es un instrumento de autoconocimiento y reflexión que trasciende la técnica en si misma el ego, el golpear o vencer (principio primitivo y deportivo antítesis del budo) para convertirse en estudio entrenamiento para doblegar las propias debilidades e insuficiencias construyéndose en principio de pensamiento y madurez evolutiva espiritual y así también elevarse del asedio pertinaz del entorno sutil, que puede transformar la vida en infierno y en enfermedad. Las formas del kendo, duro entrenamiento, etiqueta respeto, formación, cultura, aplomo, presencia, manifestación del yo soy y belleza. Kendo, iai, budo es instrumento de auto análisis.</p>

            <div className='firma'>
                <img src={Sello} alt='sello' id='sello'/>
                <img src={Firma} alt='firma' id='firma'/>
                <img src={Fudo} alt='fudo' id='fudo'/>
            </div>
        </div>

        <div className='image-container'>
            <img src={Iai} alt='Muso'/>
        </div>


    </div>
  )
}

export default Pensamiento