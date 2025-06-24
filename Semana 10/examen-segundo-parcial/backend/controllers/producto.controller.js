const Producto = require('../models/producto.model')
const { fn, col } = require('sequelize')

// CRUD functions by Cesar Reyes
const getPromedioPorCategoria = async (req, res) => {
    try {
        const productos = await Producto.findAll({
            attributes: [
                [fn('AVG', col('value')), 'valor_promedio'],
                [col('categoryCode'), 'codigo_categoria']
            ],
            group: ['categoryCode']
        })

        res.status(200).json(productos)
    } catch (error) {
        console.log('Error al obtener le promedio de productos', error);
    }
}

const getProductosPorMarca = async (req, res) => {
    try {
        const productos = await Producto.findAll({
            attributes: [
                [fn('COUNT', '*'), 'cantidad_productos'],
                [col('brandCode'), 'Marca']
            ],
            group: ['brandCode']
        })
        res.status(200).json(productos)
    } catch (error) {
        console.log('Error al obtener los productos por marca');
    }
}

module.exports = {
    getPromedioPorCategoria,
    getProductosPorMarca
}