'use client'
import BotonEliminar from '@/app/Componentes/BotonEliminar';
import Card from '@/app/Componentes/Card';
import Carrusel from '@/app/Componentes/Carrusel';
import { useContextCarrito } from '@/app/Provider/ProviderCarrito'
import React from 'react'

export default function page() {

  const {productoCarrito} = useContextCarrito();

   return (
    <>
      <div className='container'>

        <Carrusel></Carrusel>


        <div className='row'>
   {/*{

          productoCarrito.map((item) => (
            <div className="card col-md-3" style={{ "width": "18rem" }} key={item.idProducto}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.nombreProducto}</h5>
                <p className="card-text">Precio Producto: {item.precioProducto}</p>
                <p className="card-text">ISV Producto: {item.isvProducto}</p>
                <p className="card-text">Costo Total Producto: {item.precioProducto + item.isvProducto}</p>

              </div>
            </div> 
          ))
        }*/}

        {
          productoCarrito.map((item)=>(

            <div className='col-md-4' key={item.idProducto}>
              <Card {...item}></Card>
              <BotonEliminar {...item}></BotonEliminar>
            </div>
          ))
        }
        </div>


     

      </div>


    </>
  )
}
