const express = require('express')
const ProductoController = require('../controllers/productoController')
const router = express.Router()

router.get('/cantidad_por_categorias', ProductoController.getCantidadPorCategorias)
router.get('/cantidad_por_linea', ProductoController.getCantidadPorLinea)
router.get('/cantidad_por_planificador', ProductoController.getCantidadPorPlanificador)

module.exports = router
