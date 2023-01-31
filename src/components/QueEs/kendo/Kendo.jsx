import React from 'react'
import '../QueEs.css'
import Kendoimg from '../../../assets/men.jpg'


const Kendo = () => {
  return (
    <div className='kendo-container'>
        <div className='kendo-Text'>
          <h3>¿Que es Kendo - 剣道?</h3>
          <p>{`El kendo es un gendai budō, o arte marcial japonés moderno formativo que destaca por el uso y manejo del sable de bambú o shinai. El nombre significa 'camino del sable' y proviene de los ideogramas 剣 ken, 'sable', 'espada' y 道 dō, 'camino', 'sendero', 'vía'.
          En el kendo se enfrenta al oponente portando una armadura (bōgu) y un sable de bambú (o shinai); asimismo como en todo arte marcial tradicional hay formas preestablecidas o kata, las cuales son ejecutadas en parejas y con sables de madera o (bokuto).
          `}</p>
        </div>

        <div className='kendo-image'>
            <img src={Kendoimg} alt='kendo'/>
        </div>
    </div>
  )
}

export default Kendo