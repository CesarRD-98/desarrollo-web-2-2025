import axios from 'axios'

const URL_API: string = 'http://localhost:5001'

export async function cantidadCategorias() {

    const { data } = await axios.get(`${URL_API}/graficos/cantidad_por_categorias`)
    console.log(data.message);

    return data.data
}

export async function cantidadLineas() {

    const { data } = await axios.get(`${URL_API}/graficos/cantidad_por_linea`)
    console.log(data.message);

    return data.data
}


export async function cantidadPlanificador() {

    const { data } = await axios.get(`${URL_API}/graficos/cantidad_por_planificador`)
    console.log(data.message);

    return data.data
}