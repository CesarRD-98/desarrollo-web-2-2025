'use client'
import Image from "next/image";
import { useTemas } from "@/provider/temaProvider";

export default function Home() {
  const { temas, opcionInteresante } = useTemas()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        Temas disponibles
        {temas.map(tema => (
          <li>Tema: {tema.titulo}</li>
        ))}
      </main>
    </div>
  );
}
