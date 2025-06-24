import axios from "axios"
import { URL_API } from "./url_api"

// codigo hecho por CesarRD el 23/06/2025
export const promedioPorCategoria = async () => {
    try {
        const _res = await axios.get(`${URL_API}/promedio`)
        return _res.data
    } catch (error) {
        console.error('Error en promedioPorCategoria', error)
    }
}

// codigo hecho por CesarRD el 23/06/2025
export const productosPorMarca = async () => {
    try {
        const _res = await axios.get(`${URL_API}/marca`)
        return _res.data
    } catch (error) {
        console.error('Error en promedioPorCategoria', error)
    }
}