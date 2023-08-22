const sequelize = require('../db')
const { DataTypes } = require('sequelize')
const Users = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = {Users}