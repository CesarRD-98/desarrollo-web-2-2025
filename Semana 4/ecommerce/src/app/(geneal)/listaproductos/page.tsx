'use client'
import BotonAgregar from '@/app/Componentes/BotonAgregar';
import Card from '@/app/Componentes/Card';
import { ProductoActualContext } from '@/app/Contexto/ContextProducto';
import { useContextCarrito } from '@/app/Provider/ProviderCarrito'
import React from 'react'

export default function page() {

  const { producto } = useContextCarrito();


  return (
    <>
      <div className='container'>
        <div className='row'>
          {
            producto.map((item) => (

              <div className='col m-0 p-0'>
                <ProductoActualContext value={item} key={item.idProducto}>
                  <Card></Card>
                  <BotonAgregar {...item}></BotonAgregar>
                </ProductoActualContext>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
