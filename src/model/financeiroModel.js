const Sequelize = require ('sequelize');
const connection = require('@database/db');
const Usuario = require('@model/usuarioModel')

const Financeiro = connection.define('financeiro', {
    numeroContrato: {
        type: Sequelize.DOUBLE,
        primaryKey: true,
        allowNull: false
    },
    tempoContrato: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipoPagamento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mes: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ano: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false 
    },
    valor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'A pagar'
    }
})

Financeiro.belongsTo(Usuario, {
    constraint: true,
    foreignKey: 'idMorador',
    type: Sequelize.INTEGER,
    onDelete: 'CASCADE'
})

// Sincronizando o model com o banco de dados
// Financeiro.sync({force: false});

module.exports = Financeiro;