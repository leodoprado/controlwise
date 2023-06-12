const express = require("express")
const router = express.Router()
const accessValidation = require("@middleware/accessValidation");
const Conta = require("@model/contaModel");

router.get('/login/dados', (req, res) => {
    Conta.findAll().then(function(contas){
        res.render("log/dados", {contas: contas})
    })
});

router.get('/login/dados/adicionar', (req, res) => {
    res.render('log/dadosAdicionar')
})

router.post('/login/dados/adicionar', (req, res) => {
    var idUsuario = req.body.idUsuario;
    var conta = req.body.conta;
    var tipo = req.body.tipo;
    var saldo = req.body.saldo;

    var id = req.params.USR_ID;

    Conta.create({
        CONTA_NUMERO: conta,
        CONTA_TIPO: tipo,
        CONTA_SALDO: saldo,
        USR_ID: id
    }).then(() => {
        res.redirect("/login/dados")
    })
})


module.exports = router;