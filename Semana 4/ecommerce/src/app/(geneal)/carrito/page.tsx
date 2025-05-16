'use client'
import BotonEliminar from '@/app/Componentes/BotonEliminar';
import Card from '@/app/Componentes/Card';
import { ProductoActualContext } from '@/app/Contexto/ContextProducto';
import { useContextCarrito } from '@/app/Provider/ProviderCarrito'
import React from 'react'

export default function page() {

  const { productoCarrito } = useContextCarrito();

  return (
    <>
      <div className='container'>
        <div className='row'>
          {
            productoCarrito.map((item) => (

              <div className='col-auto'>
                <ProductoActualContext value={item} key={item.idProducto}>
                    <Card></Card>
                    <BotonEliminar {...item}></BotonEliminar>
                </ProductoActualContext>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
