const Sequelize = require('sequelize');

const sequelize = new Sequelize("ControlWiseDB", "root", "1234", {
    host:'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch(function(){
    console.log("ERRO: Conexão com o banco de dados NÃO foi realizada com sucesso!")
});

module.exports = sequelize;