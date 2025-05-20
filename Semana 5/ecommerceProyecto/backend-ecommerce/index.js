const express = require('express')
const { json } = require('sequelize')
const Producto = require('./Modelos/Producto')

const cors = require('cors')

const app = express()


app.use(express.json())

app.use(cors())

//request, response
//get, post,put,deletem patch
//CRUD

//extraer informacion de una tabla
app.get('/producto', async (req, resp) => {

    try {

        //select *from productos
        const producto = await Producto.findAll();
        resp.status(200).json(producto)

    } catch (error) {
        resp.status(500).json({ 'mensahe': 'ocurrio un error' })
    }
})

//consultar con un body o cuando querramos insertar datos
app.post('/producto', async (req, resp) => {

    try {

        console.log(req.body)

        //insert into ...
        const producto = await Producto.create(req.body);
        resp.status(200).json(producto)

    } catch (error) {
        resp.status(500).json({ 'mensahe': 'ocurrio un error' })
    }
})

//put actualizar informacion en nuestra tabla
app.put('/producto/:idProducto', async (req, resp) => {

    try {

        console.log(req.params.idProducto);
        console.log(req.body)

        //update producto set=.... where idproducto=idproducto
        const [updated] = await Producto.update(req.body, {
            where: { idProducto: req.params.idProducto }
        })

        resp.status(200).json({ "mensaje": 'Se actualizo' })

    } catch (error) {
        resp.status(500).json({ 'mensahe': 'ocurrio un error' })
    }
})

//delete

app.delete('/producto/:idProducto', async (req, resp) => {

    try {

        console.log(req.params.idProducto);

        //delete from producto  where idproducto=idproducto
        const updated = await Producto.destroy({
            where: { idProducto: req.params.idProducto }
        })

        resp.status(200).json({ "mensaje": 'Se elimino correctamente' })

    } catch (error) {
        resp.status(500).json({ 'mensahe': 'ocurrio un error' })
    }
})

app.listen(5000, () => {
    console.log('APlicacino corriendo en puerto 5000')
})