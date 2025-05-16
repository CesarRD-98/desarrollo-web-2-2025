import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    
          <form action="" className="form">
            <label htmlFor="Usuario">Usuario</label>
            <input type="text" className="form-control" placeholder="Ingresar Usuairo"  id="usuario"/>

            <label htmlFor="clave">Clave</label>
            <input type="text" className="form-control" placeholder="Ingresar clave"  id="clave"/> <br />

            <Link href="/listaproductos" className="btn btn-success">Ir a la lista de producto</Link>
          </form>

      
      </main>
   
    </div>
  );
}
