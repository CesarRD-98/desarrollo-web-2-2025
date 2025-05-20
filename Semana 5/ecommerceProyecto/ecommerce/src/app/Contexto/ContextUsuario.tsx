import { createContext } from "react";

export const usuarioContext = createContext({
    nombreUsuario:'',
    setNombreUsuario:(usuario:any)=>{}
})