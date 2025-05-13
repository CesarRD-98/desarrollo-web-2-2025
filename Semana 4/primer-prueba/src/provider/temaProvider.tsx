'use client'
import { TemaContext } from '@/context/temaContext'
import { Tema } from '@/models/tema'
import React, { ReactNode, useContext, useState } from 'react'


export default function TemaProvider({ children }: { children: ReactNode }) {

    const [temas, setTemas] = useState<Tema[]>([])

    const temasActuales: Tema[] = [
        { id: 1, titulo: "La historia de la inteligencia artificial", interesante: false },
        { id: 2, titulo: "Cambio climático y sus efectos globales", interesante: false },
        { id: 3, titulo: "Descubrimientos astronómicos recientes", interesante: false },
        { id: 4, titulo: "Filosofía moderna y ética tecnológica", interesante: false },
        { id: 5, titulo: "La evolución del lenguaje humano", interesante: false },
        { id: 6, titulo: "Cómo funciona el cerebro humano", interesante: false },
        { id: 7, titulo: "El impacto de las redes sociales", interesante: false },
        { id: 8, titulo: "Los grandes imperios de la historia", interesante: false },
        { id: 9, titulo: "Economía digital y criptomonedas", interesante: false },
        { id: 10, titulo: "Viajes espaciales: pasado y futuro", interesante: false },
        { id: 11, titulo: "El arte del cine independiente", interesante: false },
        { id: 12, titulo: "La psicología del comportamiento humano", interesante: false },
        { id: 13, titulo: "Grandes inventos que cambiaron el mundo", interesante: false },
        { id: 14, titulo: "Música clásica y su influencia actual", interesante: false },
        { id: 15, titulo: "Robótica en la vida cotidiana", interesante: false },
        { id: 16, titulo: "Literatura latinoamericana contemporánea", interesante: false },
        { id: 17, titulo: "Desarrollo sostenible y energías limpias", interesante: false },
        { id: 18, titulo: "La vida de los filósofos griegos", interesante: false },
        { id: 19, titulo: "Ciberseguridad y protección de datos", interesante: false },
        { id: 20, titulo: "Impacto de la inteligencia emocional", interesante: false }
    ]


    function opcionInteresante() {
        setTemas(temasActuales)
    }

    return (
        <TemaContext.Provider value={{ temas, opcionInteresante }}>
            {children}
        </TemaContext.Provider>
    )
}

export function useTemas() {
    return useContext(TemaContext)
}
