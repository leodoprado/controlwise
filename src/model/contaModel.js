const Sequelize = require ('sequelize');
const connection = require('@database/db');
const Usuario = require('@model/usuarioModel');

const Conta = connection.define('conta', {
    CONTA_COD: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    CONTA_NUMERO: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    CONTA_TIPO: {
        type: Sequelize.CHAR,
        allowNull: false
    },
    CONTA_SALDO: {
        type: Sequelize.STRING,
        allowNull: false
    },
    CONTA_DATACAD: {
        type: Sequelize.DATEONLY,
        allowNull: true
    }
})

Conta.belongsTo(Usuario, {
    constraint: true,
    foreignKey: 'USR_ID',
    type: Sequelize.INTEGER,
    onDelete: 'CASCADE'
})

// Sincronizando o model com o banco de dados
 Conta.sync({force: false});

module.exports = Conta;