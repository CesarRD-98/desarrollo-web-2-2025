import { createContext, useContext } from "react";
import { Producto } from "../Modelos/Producto";

export const ProductoActualContext = createContext<Producto | null>(null)

export function useProductoActual() {
    return useContext(ProductoActualContext)
}