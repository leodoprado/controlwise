const Sequelize = require ('sequelize');
const connection = require('@database/db');
const Usuario = require('@model/usuarioModel');

const Moradia = connection.define('moradia', {
    numApto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    andar: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    posicao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    garagem: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Moradia.belongsTo(Usuario, {
    constraint: true,
    foreignKey: 'idMorador',
    type: Sequelize.INTEGER,
    onDelete: 'CASCADE'
})

// Sincronizando o model com o banco de dados
// Moradia.sync({force: false});

module.exports = Moradia;