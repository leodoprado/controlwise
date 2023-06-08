const Sequelize = require ('sequelize');
const connection = require('@database/db');
const Usuario = require('@model/usuarioModel');

const Agenda = connection.define('agendamento', {
    idAgendamento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    assunto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataInicio: {
        type: Sequelize.STRING,
        allowNull: false
    },
    horarioInicio: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataFim: {
        type: Sequelize.STRING,
        allowNull: false
    },
    horarioFim: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Processando"
    }
})

Agenda.belongsTo(Usuario, {
    constraint: true,
    foreignKey: 'idMorador',
    type: Sequelize.INTEGER,
    onDelete: 'CASCADE'
})

// Sincronizando o model com o banco de dados
// Agenda.sync({force: false});

module.exports = Agenda;