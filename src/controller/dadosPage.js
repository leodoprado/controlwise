const express = require("express")
const router = express.Router()
const accessValidation = require("@middleware/accessValidation");
const Usuario = require("@model/usuarioModel");
const PerfilUser = require("@model/usuarioModel");

router.get('/login/dados', (req, res) => {
    PerfilUser.findAll().then(function(contas){
        res.render("log/dados", {contas: contas})
    })
});

router.get('/login/dados/adicionar', (req, res) => {
    res.render('log/dadosAdicionar')
})


module.exports = router;