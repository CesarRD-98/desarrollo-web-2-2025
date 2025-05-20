'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import { useContextCarrito } from '../Provider/ProviderCarrito'
import { useContextUsuario } from '../Provider/ProviderUsuario'

export default function NavBar() {

  const {productoCarrito} =useContextCarrito()
  const {nombreUsuario} = useContextUsuario()

  return (
    <>
      
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Lisa productos</a>
 
    <div className="" id="navbarSupportedContent">
      <ul className="navbar-nav ">
     
      <li className="nav-item">
          Usuario conectado {nombreUsuario}
        </li>

        <li className="nav-item">
          <Link className="nav-link" href="listaproductos">Lista Producto</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" href="/carrito"  aria-disabled="true">
           <button type="button" className="btn btn-primary">
          Carrito <span className="badge bg-secondary">{productoCarrito.length}</span>
        </button>
          </Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}
