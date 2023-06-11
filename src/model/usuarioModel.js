const Sequelize = require ('sequelize');
const connection = require('@database/db');

const Usuario = connection.define('usuario', {
    USR_ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    USR_NOME: {
        type: Sequelize.STRING,
        allowNull: false
    },
    USR_DATANASC: {
        type: Sequelize.DATE,
        allowNull: false
    },
    USR_EMAIL: {
        type: Sequelize.STRING,
        allowNull: false
    },
    USR_SENHA: {
        type: Sequelize.STRING,
        allowNull: false
    },
    USR_TELEFONE: {
        type: Sequelize.STRING,
        allowNull: false
    },
    USR_CIDADE: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    USR_UF: {
        type: Sequelize.STRING,
        allowNull: false
    },
    USR_CEP: {
        type: Sequelize.STRING,
        allowNull: false
    },
    USR_ENDERECO: {
        type: Sequelize.STRING,
        allowNull: false
    },
    USR_DATACAD: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: Sequelize.DATEONLY
    }
})

// Sincronizando model com banco de dados
 Usuario.sync({force: false});

module.exports = Usuario;