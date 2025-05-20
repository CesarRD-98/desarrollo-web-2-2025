import React from 'react'
import { Producto } from '../Modelos/Producto'
import { useContextCarrito } from '../Provider/ProviderCarrito'

export default function Card(item: Producto) {

   const {agregarCarrito} =useContextCarrito() 
  return (
    <>
            <div className="card" style={{ "width": "18rem" }} key={item.idProducto}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.nombreProducto}</h5>
                <p className="card-text">Precio Producto: {item.precioProducto}</p>
                <p className="card-text">ISV Producto: {item.isvProducto}</p>
                <p className="card-text">Costo Total Producto: {item.precioProducto + item.isvProducto}</p>

              </div>
            </div> 
    </>
  )
}
