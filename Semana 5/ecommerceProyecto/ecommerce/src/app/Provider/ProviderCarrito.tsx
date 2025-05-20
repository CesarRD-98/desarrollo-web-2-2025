'use client'
import React, { useContext, useEffect, useState } from 'react'
import { PlantillaReact } from '../Modelos/PlantillaReact'
import { contextCarrito } from '../Contexto/ContextCarrito'
import { Producto } from '../Modelos/Producto'

//children (renderizamos los componente /consumidores)
//dar funcionalidad a la definicion del contexto
//exportar contexto

export default function ProviderCarrito({ children }: PlantillaReact) {

    const [producto, setProducto] = useState<Producto[]>([]);

    let urlApi = "http://localhost:5000/producto"

    async function cargarProducto() {
        try {

            const respuesrta = await fetch(urlApi)
            const data = await respuesrta.json();
            setProducto(data);
        }
        catch (err) {
            console.error('Ocurrio un Error al cargar los productos')
        }
    }

    async function guardarProducto(prodcuto: Producto) {

        try {
            const respuesta = await fetch(urlApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(prodcuto)
            })

            const data = await respuesta.json();

            alert("Agregado Correctamente")

        } catch (error) {
            alert("Ocurrio un error al guardar Producto")
        }
    }

    const [productoCarrito, setProductoCarrito] = useState<Producto[]>([]);

    function agregarCarrito(producto: Producto) {
        alert('prodcuto agregado al carrito')
        setProductoCarrito([...productoCarrito, producto])
    }

    useEffect(() => {
        console.log(productoCarrito)
    }, [productoCarrito])

    return (
        <contextCarrito.Provider value={{ producto, productoCarrito, setProductoCarrito, agregarCarrito, cargarProducto, guardarProducto }}>
            {children}
        </contextCarrito.Provider>

    )
}


export function useContextCarrito() {
    //hook
    return useContext(contextCarrito)
}