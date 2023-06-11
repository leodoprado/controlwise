const Sequelize = require ('sequelize');
const connection = require('@database/db');
const Conta = require('@model/contaModel');
const Categoria = require('@model/categoriaModel');

const Transacao = connection.define('transacao', {
    TRSC_COD: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    TRSC_VALOR: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    TRSC_DESC: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    TRSC_DATACAD: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

Transacao.belongsTo(Conta, {
    constraint: true,
    foreignKey: 'CONTA_COD',
    type: Sequelize.INTEGER,
    onDelete: 'CASCADE'
})

Transacao.belongsTo(Categoria, {
    constraint: true,
    foreignKey: 'CATEG_COD',
    type: Sequelize.INTEGER,
})

// Sincronizando o model com o banco de dados
 Transacao.sync({force: false});

module.exports = Transacao;