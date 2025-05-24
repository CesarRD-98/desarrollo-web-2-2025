'use client'
import React, { useContext, useState } from 'react'
import { Children } from '../models/childrenModel'
import { Usuario } from '../models/usuarioModel'
import { GlobalContext } from '../contexts/globalContext'

export default function GlobalProvider({ children }: Children) {

  const [usuario, setUsuario] = useState<Usuario>({
    usuario: 'admin',
    contrasena: 'admin123'
  })

  const [presupuesto, setPresupuesto] = useState<number>(0)

  function autenticacion(user: Usuario): boolean {
    let validar: boolean = false
    if (user.usuario === usuario.usuario && user.contrasena === usuario.contrasena) {
      validar = true
    } else {
      alert('Usuario y/o contraseña incorrectas')
    }

    return validar
  }


  function agregarPresupuesto(monto: number) {
    setPresupuesto(monto)
    alert('Presupuesto agreado exitosamente')
  }

  return (
    <GlobalContext.Provider value={{ usuario, presupuesto, autenticacion, agregarPresupuesto }}>
      {children}
    </GlobalContext.Provider>
  )
}

export function useGlobalContext() {
  return useContext(GlobalContext)
}
