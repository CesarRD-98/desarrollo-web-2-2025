'use client'
import { cantidadLineas } from '@/app/servicios/apiProductos'
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register( CategoryScale, LinearScale, BarElement, Tooltip, Legend)


export default function page() {

    const [dataLinea, setDataLinea] = useState([])

    useEffect(() => {
        async function cargarDataLinea() {
            try {
                const response = await cantidadLineas()
                setDataLinea(response)
            } catch (error) {
                console.log('Error al obtener la data');
            }
        }
        cargarDataLinea()
    }, [])

    const labels = dataLinea.map((item: any) => item.Linea)
    const data = dataLinea.map((item: any) => item.Cantidad)
    const randomColor = dataLinea.map(() => `hsl(${Math.floor(Math.random() * 360)}, 60%, 40%)`)

    const datos = {
        labels: labels,
        datasets: [
            {
                label: 'Codigo de lineas',
                data: data,
                backgroundColor: randomColor,
                borderColor: 'hsl(222, 60%, 40%)',
                borderWidth: 1
            }
        ]
    }

    


    return (
        <div style={{ width: 800, height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto' }}>
            <h3 style={{ padding: 10, backgroundColor: '#4BC0C0', margin: 6, }}>Cantidad por codigos de lineas</h3>
            <Bar data={datos} />
        </div>
    )
}
