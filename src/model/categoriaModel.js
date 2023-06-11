const Sequelize = require ('sequelize');
const connection = require('@database/db');

const Categoria = connection.define('categoria', {
    CATEG_COD: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    CATEG_DESC: {
        type: Sequelize.STRING,
        allowNull: false
    },
    CATEG_TIPO: {
        type: Sequelize.CHAR,
        allowNull: false
    }
})

// Sincronizando o model com o banco de dados
 Categoria.sync({force: false});

module.exports = Categoria;