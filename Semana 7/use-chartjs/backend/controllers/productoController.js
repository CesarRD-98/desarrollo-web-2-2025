const sequelize = require('../database/db');
const Producto = require('../models/producto')
const { fn, col } = sequelize

async function getCantidadPorCategorias(req, res) {
    try {
        const categorias = await Producto.findAll({
            attributes: [
                [fn('COUNT', '*'), 'Cantidad'],
                [col('categoryCode'), 'Categoria']
            ],
            group: ['categoryCode']
        })

        if (categorias === 0) {
            res.status(404).json({ message: 'No se encontraron resultados' })
        }

        res.status(200).json({ message: 'Accion con exito', data: categorias })
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' })
        console.log('Error inesperado: ', error);
    }
}

async function getCantidadPorLinea(req, res) {
    try {
        const lineas = await Producto.findAll({
            attributes: [
                [fn('COUNT', '*'), 'Cantidad'],
                [col('lineCode'), 'Linea']
            ],
            group: ['lineCode']
        })

        if (lineas === 0) {
            res.status(404).json({ message: 'No se encontraron resultados' })
        }

        res.status(200).json({ message: 'Accion con exito', data: lineas })
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' })
        console.log('Error inesperado: ', error);
    }
}

async function getCantidadPorPlanificador(req, res) {
    try {
        const planificador = await Producto.findAll({
            attributes: [
                [fn('COUNT', '*'), 'Cantidad'],
                [col('plannerCode'), 'Planificador']
            ],
            group: ['plannerCode']
        })

        if (planificador === 0) {
            res.status(404).json({ message: 'No se encontraron resultados' })
        }

        res.status(200).json({ message: 'Accion con exito', data: planificador })
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' })
        console.log('Error inesperado: ', error);
    }
}

module.exports = {
    getCantidadPorCategorias,
    getCantidadPorLinea,
    getCantidadPorPlanificador
}