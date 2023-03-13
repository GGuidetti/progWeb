const { Model, DataTypes } = require('sequelize');
const database = require('../sequelize');


class Pessoa extends Model { }
Pessoa.init({
    nome: { type: DataTypes.STRING, allowNull: true },
    sobrenome: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: true }
},
    {
        sequelize: database
    });

module.exports = Pessoa;