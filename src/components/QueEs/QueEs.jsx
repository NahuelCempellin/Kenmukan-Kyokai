import React from 'react'
import Iaido from './Iaido/Iaido'
import Kendo from './kendo/Kendo'
import './QueEs.css'



const QueEs = () => {
  return (
    <div className='que-es-container'>
            <Kendo/>
            <Iaido/>
    </div>
  )
}

export default QueEs