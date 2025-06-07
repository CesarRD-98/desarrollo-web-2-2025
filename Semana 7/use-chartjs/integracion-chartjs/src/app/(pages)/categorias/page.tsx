'use client'
import { cantidadCategorias } from '@/app/servicios/apiProductos'
import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)


export default function page() {

    const [dataCategoria, setDataCategoria] = useState([])

    useEffect(() => {
        async function cargarDataCategoria() {
            try {
                const response = await cantidadCategorias()
                setDataCategoria(response)
            } catch (error) {
                console.log('Error al obtener la data');
            }
        }
        cargarDataCategoria()
    }, [])

    const labels = dataCategoria.map((item: any) => item.Categoria)
    const data = dataCategoria.map((item: any) => item.Cantidad)
    const randomColor = dataCategoria.map(() => `hsl(${Math.floor(Math.random() * 360)}, 60%, 40%)`)


    const datos = {
        labels: labels,
        datasets: [
            {
                label: 'Cantidad',
                data: data,
                backgroundColor: randomColor,
                borderWidth: 1
            }
        ]
    }


    return (
        <div style={{ width: 500, height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto' }}>
            <h3 style={{ padding: 10, backgroundColor: '#4BC0C0', margin: 6, }}>Cantidad por categoria</h3>
            <Pie data={datos} />
        </div>
    )
}
