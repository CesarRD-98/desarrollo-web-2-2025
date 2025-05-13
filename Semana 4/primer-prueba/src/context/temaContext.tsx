'use client'
import { Tema } from "@/models/tema";
import { createContext } from "react";


export const TemaContext = createContext({
    temas: [] as Tema[],
    opcionInteresante: (id: number) => {}
})