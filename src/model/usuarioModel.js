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
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    USR_CPF: {
        type: Sequelize.STRING,
        allowNull: false
    },
    USR_RG: {
        type: Sequelize.STRING,
        allowNull: true
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
        allowNull: true
    },
    USR_CIDADE: {
        type: Sequelize.STRING,
        allowNull: true
    },
    USR_CEP: {
        type: Sequelize.STRING,
        allowNull: true
    },
    USR_ENDERECO: {
        type: Sequelize.STRING,
        allowNull: true
    },
    USR_BAIRRO: {
        type: Sequelize.STRING,
        allowNull: true
    },
    USR_REFERENCIA: {
        type: Sequelize.STRING,
        allowNull: true
    },
    USR_COMPLEMENTO: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    freezeTableName: true,
    timestamps: false
}
)

// Sincronizando model com banco de dados
 Usuario.sync({force: false});

module.exports = Usuario;