const Sequelize = require ('sequelize');
const connection = require('@database/db');

const Usuario = connection.define('usuario', {
    idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nivelAcesso: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    datanascimento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rg: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: "0"
    },
    estadocivil: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "-"
    },
    sexo: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "-"
    },
    pais: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "-"
    },
    cidadenatal: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "-"
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "--"
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "-"
    },
    emailcomplementar: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "-"
    },
    telefone1: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    telefone2: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "(00)00000-0000"
    }
})

// Sincronizando model com banco de dados
// Usuario.sync({force: false});

module.exports = Usuario;