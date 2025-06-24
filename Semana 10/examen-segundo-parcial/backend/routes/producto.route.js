const express = require('express')
const productoController = require('../controllers/producto.controller')
const router = express.Router()

router.get('/promedio', productoController.getPromedioPorCategoria)
router.get('/marca', productoController.getProductosPorMarca)

module.exports = router