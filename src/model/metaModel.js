const Sequelize = require ('sequelize');
const connection = require('@database/db');

const Meta = connection.define('meta', {
    META_COD: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    META_DESC: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    META_VALOR: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    META_DATALIMITE: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

Meta.belongsTo(Usuario, {
    constraint: true,
    foreignKey: 'USR_ID',
    type: Sequelize.INTEGER,
    onDelete: 'CASCADE'
})

// Sincronizando o model com o banco de dados
 Meta.sync({force: false});

module.exports = Meta;