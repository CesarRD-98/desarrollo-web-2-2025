'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { useContextUsuario } from "./Provider/ProviderUsuario";
import { useRouter } from "next/navigation";

export default function Home() {

  const [usuario,setUsuario]=useState('');
  const [contrasena,setContrasena] = useState('');

  const {nombreUsuario,setNombreUsuario} =useContextUsuario()


  const route= useRouter()

  function login(){
    if(usuario.trim()===''){
      alert('Debe ingresar usuario')

      return
    }


    setNombreUsuario(usuario)
    route.push('/listaproductos')

    
  }

  useEffect(()=>{
    console.log(nombreUsuario)
  },[nombreUsuario])


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    
          <form action="" className="form">
            <label htmlFor="Usuario">Usuario</label>
            <input type="text" 
                className="form-control" 
                placeholder="Ingresar Usuairo" 
                 id="usuario"
                 value={usuario}
                 onChange={(e)=> setUsuario(e.target.value)}
                 />

            <label htmlFor="clave">Clave</label>
            <input type="text" 
                className="form-control"
                 placeholder="Ingresar clave" 
                  id="clave"
                  value={contrasena}
                  onChange={(e)=>setContrasena(e.target.value)}
                  /> <br />

            <Link href="/listaproductos" className="btn btn-success">Ir a la lista de producto</Link>

            <button className="btn btn-warning" type="button" onClick={login}>Iniciar Sesion</button>
          </form>

      
      </main>
   
    </div>
  );
}
