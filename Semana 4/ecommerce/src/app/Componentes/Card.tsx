import React from 'react'
import { useProductoActual } from '../Contexto/ContextProducto'

export default function Card() {

  const item = useProductoActual()
  if (!item) return null

  return (
    <>
      <div className="card me-4">
        <div className="card-header"><h5 className="card-title">{item.nombreProducto}</h5></div>
        <div className="card-body">
          <p className="card-text">Precio Producto: {item.precioProducto}</p>
          <p className="card-text">ISV Producto: {item.precioProducto * item.isvProducto}</p>
        </div>
        <div className="card-footer">
          <p className="card-text fw-semibold">
            Costo Total Producto: {item.precioProducto + (item.precioProducto * item.isvProducto)}
          </p>
        </div>
      </div>
    </>
  )
}
