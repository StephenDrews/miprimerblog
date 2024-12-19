import React from 'react'
import '../COMPONENTE1/container.css';
import Texto from '../COMPONENTE1/Texto';
import '../COMPONENTE1/texto.css';
import Imagen from '../COMPONENTE1/Imagen';
import '../COMPONENTE1/imagen.css';



function Container() {
  return (
    <div className='containerPrin'>
    <div className='contLeft'>
      <div className='Imagenuno'>
        <Imagen/>
        <Imagen/>
      </div>
    </div>

    <div className='contRight'>
      <div className='Texto'>
        <Texto/>
        <Texto/>
        <Texto/>
      </div>
    </div>
    
    </div>
  )
}

export default Container