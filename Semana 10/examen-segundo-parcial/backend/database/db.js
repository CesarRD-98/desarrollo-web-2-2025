const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('productos_db', 'root', 'cesar', {
    host: 'localhost',
    dialect: 'mysql'
})

async function connection() {
    try {
        await sequelize.authenticate()
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.log('Error al conectar a la base de datos', error);
    }
}

connection()
module.exports = sequelize