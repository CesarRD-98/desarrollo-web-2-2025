
const { DataTypes } = require('sequelize')
const sequelize = require('../db/Conexion')

const Producto = sequelize.define('Producto', {

    idProducto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreProducto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precioProducto: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    isvProducto: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    imgProducto: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        tableName: 'Producto',
        timestamps: false
    }
);

module.exports = Producto;
