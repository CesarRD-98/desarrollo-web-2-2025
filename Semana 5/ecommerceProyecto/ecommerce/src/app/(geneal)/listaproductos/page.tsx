'use client'
import BotonAgregar from '@/app/Componentes/BotonAgregar';
import Card from '@/app/Componentes/Card';
import { Producto } from '@/app/Modelos/Producto';
import { useContextCarrito } from '@/app/Provider/ProviderCarrito'
import React, { useEffect, useState } from 'react'

export default function page() {

  const { producto, cargarProducto, guardarProducto } = useContextCarrito();
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')
  const [isv, setIsv] = useState('')
  const [img, setImg] = useState('')

  useEffect(() => {
    cargarProducto();
  }, []);


  function guardarProductoDetalle(event: React.FormEvent) {
    event.preventDefault()
    let producto: Producto = {
      "nombreProducto": nombre,
      "precioProducto": Number(precio),
      "isvProducto": Number(isv),
      "imgProducto": img
    }

    guardarProducto(producto);

    cargarProducto();
    setNombre('')
    setPrecio('')
    setIsv('')
    setImg('')
  }

  return (
    <>
      <div className='container'>

        <form onSubmit={guardarProductoDetalle}>
        <h4>Agrega un nuevo producto</h4>
        <input
          type="text"
          className='form-control'
          placeholder='Nombre del producto'
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        /><br />
        <input
          type="number"
          className='form-control'
          placeholder='Precio del producto'
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        /><br />
        <input
          type="number"
          className='form-control'
          placeholder='ISV del producto'
          value={isv}
          onChange={(e) => setIsv(e.target.value)}
        /><br />
        <input
          type="text"
          className='form-control'
          placeholder='URL de imagen'
          value={img}
          onChange={(e) => setImg(e.target.value)}
        /><br />
        <button type="submit" className='btn btn-warning' onClick={guardarProductoDetalle}>Agregar Producto</button>
      </form>
        

        <div className='row'>
          {/*{

          producto.map((item) => (
            <div className="card col-md-3" style={{ "width": "18rem" }} key={item.idProducto}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.nombreProducto}</h5>
                <p className="card-text">Precio Producto: {item.precioProducto}</p>
                <p className="card-text">ISV Producto: {item.isvProducto}</p>
                <p className="card-text">Costo Total Producto: {item.precioProducto + item.isvProducto}</p>

                <button type='button' className="btn btn-primary" onClick={()=>agregarCarrito(item)}>Agregar al Carrito</button>
              </div>
            </div> 
          ))
        }*/}

          {
            producto.map((item) => (

              <div className='col-md-4' key={item.idProducto}>
                <Card {...item} ></Card>
                <BotonAgregar {...item}></BotonAgregar>
              </div>
            ))
          }

        </div>


      </div>


    </>
  )
}
