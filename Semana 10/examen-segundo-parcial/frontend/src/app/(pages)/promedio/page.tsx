'use client'
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'
import { promedioPorCategoria } from "@/app/services/producto.service";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend)
// codigo hecho por CesarRD el 23/06/2025
export default function Home() {
    const [datos, setDatos] = useState([])

    useEffect(() => {
        const load = async () => {
            const DATA = await promedioPorCategoria()
            setDatos(DATA)
        }
        load()
    }, [])
    // codigo hecho por CesarRD el 23/06/2025
    const data = {
        labels: datos.map((l: any) => l.codigo_categoria),
        datasets: [
            {
                label: 'Promedio de productos',
                data: datos.map((c: any) => c.valor_promedio),
                backgroundColor: 'rgba(79, 75, 192, 0.2)',
                borderColor: 'rgb(75, 91, 192)',
                tension: 0.3,
                fill: true,
                pointBackgroundColor: 'rgb(171, 75, 192)'
            }
        ]
    }

    // codigo hecho por CesarRD el 23/06/2025
    return (
        <div className="container p-5 d-flex flex-column align-items-center">
            <h1 className="text-center">Examen de Desarrollo de Aplicaciones Web 2</h1>
            <h4>Promedio de productos por categorias</h4>
            <div className="" style={{ width: 800, height: 800 }}>
                <Line data={data} />
            </div>
        </div>
    );
}
