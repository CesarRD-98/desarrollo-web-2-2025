'use client'
import React, { useContext, useState } from 'react'
import { PlantillaReact } from '../Modelos/PlantillaReact'
import {usuarioContext} from '../Contexto/ContextUsuario'

export default function ProviderUsuario({children}:PlantillaReact) {

  const [nombreUsuario,setNombreUsuario] = useState<any>('')


  return (
    <usuarioContext.Provider value={{nombreUsuario,setNombreUsuario}}>
        {children}
    </usuarioContext.Provider>
  )
}

export function useContextUsuario(){
    return useContext(usuarioContext)
}