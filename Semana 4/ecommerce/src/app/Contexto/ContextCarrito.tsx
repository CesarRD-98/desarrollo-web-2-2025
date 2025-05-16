
//productos
//setprudctos
//agregarproductos

import { createContext } from "react";
import { Producto } from "../Modelos/Producto";

export const contextCarrito = createContext({
    producto: [] as Producto[],
    productoCarrito: [] as Producto[],
    setProductoCarrito: (productos: Producto[])=>{},
    agregarCarrito: (producto:Producto) =>{}
})