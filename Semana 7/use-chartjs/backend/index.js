const express = require('express')
const cors = require('cors')
const productoRouter = require('./routers/productoRouter')
const app = express()

app.use(express.json())
app.use(cors())

app.use('/graficos', productoRouter)

const PORT = 5001

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
})
