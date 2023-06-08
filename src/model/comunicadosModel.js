const Sequelize = require ('sequelize');
const connection = require('@database/db');

const Comunicados = connection.define('comunicados', {
    idComunicado: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    assunto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    texto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataenvio: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

// Sincronizando o model com o banco de dados
// Comunicados.sync({force: false});

module.exports = Comunicados;