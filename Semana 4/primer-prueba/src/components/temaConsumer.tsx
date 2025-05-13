'use client'
import Image from "next/image";
import { useTemas } from "@/provider/temaProvider";
import { useEffect } from "react";

export default function TemaConsumer() {
    const { temas, opcionInteresante } = useTemas()

    useEffect(() => {
        opcionInteresante()
    }, [])
    
    console.log(temas);

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            {temas.map(tema => (
                <li key={tema.id}>Tema: {tema.titulo}</li>
            ))}
        </div>
    );
}
