'use client'
import { cantidadPlanificador } from '@/app/servicios/apiProductos'
import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)


export default function page() {

    const [dataPlanificador, setDataPlanificador] = useState([])

    useEffect(() => {
        async function cargarDataCategoria() {
            try {
                const response = await cantidadPlanificador()
                setDataPlanificador(response)
            } catch (error) {
                console.log('Error al obtener la data');
            }
        }
        cargarDataCategoria()
    }, [])

    const labels = dataPlanificador.map((item: any) => item.Planificador)
    const data = dataPlanificador.map((item: any) => item.Cantidad)
    const randomColor = dataPlanificador.map(() => `hsl(${Math.floor(Math.random() * 360)}, 60%, 40%)`)

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
        <div style={{width: 500, height: 'auto', display: 'flex',flexDirection: 'column', alignItems: 'center', margin: 'auto'}}>
            <h3 style={{padding: 10, backgroundColor: '#4BC0C0', margin: 6,}}>Cantidad por codigo de planificador</h3>
            <Doughnut data={datos}/>
        </div>
    )
}
