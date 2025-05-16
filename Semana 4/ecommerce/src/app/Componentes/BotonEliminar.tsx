import React from 'react'
import { Producto } from '../Modelos/Producto'

export default function BotonEliminar(item:Producto) {
  return (
    <>
            <button type='button' className='btn btn-danger' >Eliminar Producto</button>

    </>
  )
}
