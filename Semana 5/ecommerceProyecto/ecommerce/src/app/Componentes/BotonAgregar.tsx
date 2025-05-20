'use client'
import React from 'react'
import { useContextCarrito } from '../Provider/ProviderCarrito'
import { Producto } from '../Modelos/Producto'

export default function BotonAgregar(item:Producto) {

  const {agregarCarrito} =useContextCarrito()
  
  
  return (
    <>
        <button type='button' className='btn btn-success' onClick={()=>agregarCarrito(item)}>Agregar Producto</button>
    </>
  )
}
