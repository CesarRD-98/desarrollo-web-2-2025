'use client'
import Link from "next/link";

export default function Home() {
  // codigo hecho por CesarRD el 23/06/2025
  return (
    <div className="container p-5 d-flex flex-column align-items-center">
      <h1 className="text-center">Examen de Desarrollo de Aplicaciones Web 2</h1>
      <div className="d-flex gap-4">
        <Link href={'/promedio'} className="btn btn-primary">Ver grafico de lineas</Link>
        <Link href={'/marca'} className="btn btn-success">Ver grafico de pastel</Link>
      </div>
    </div>
  );
}
