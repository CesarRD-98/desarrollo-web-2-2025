const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('funciones_agregacion', 'root', 'cesar', {
    host: 'localhost',
    dialect: 'mysql'
})


async function conexionDB() {
    try {
        await sequelize.authenticate()
        console.log('Conexion exitosa a base de datos');
    } catch (error) {
        console.log('\nConexion fallida a base de datos', error);        
    }
}

conexionDB()


module.exports = sequelize