import { createContext } from "react";
import { Usuario } from "../models/usuarioModel";

type tipoContext = {
    usuario: Usuario,
    presupuesto: number,
    autenticacion: (usuario: Usuario) => boolean,
    agregarPresupuesto: (presupuesto: number) => void
}

export const GlobalContext = createContext<tipoContext>({
    usuario: {} as Usuario,
    presupuesto: 0,
    autenticacion: (usuario: Usuario) => false,
    agregarPresupuesto: (presupuesto: number) => {}
})