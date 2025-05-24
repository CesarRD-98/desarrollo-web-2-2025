'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useGlobalContext } from "./providers/globalProvider";

export default function Home() {
  const router = useRouter()
  const { autenticacion } = useGlobalContext()

  const [user, setUser] = useState<string>('')
  const [contrasena, setContrasena] = useState<string>('')

  function manejarInicioSesion() {

    if (!user.trim() || !contrasena.trim()) {
      return alert('Campos vacios')
    }

    const validar = autenticacion({ usuario: user, contrasena })

    if (validar) {
      router.push('/inicio')
    } 
  }

  return (
    <div className="container d-flex justify-content-center">
      <div className="card m-5 p-4" style={{ width: 300 }}>
        <h2>Inicio de sesión</h2>
        <form action="" className="p-4">
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Ingrese su correo"
              value={user}
              onChange={(e) => setUser(e.target.value)} />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Ingrese su contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)} />
          </div>
          <button type="button" className="btn btn-success" onClick={manejarInicioSesion}>Ingresar</button>
        </form>
      </div>
    </div>
  );
}
