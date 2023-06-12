const express = require("express")
const router = express.Router()
const accessValidation = require("@middleware/accessValidation");
const Usuario = require("@model/usuarioModel");
const Transacao = require("@model/transacaoModel");

router.get('/login/analitico', (req, res) => {
    Transacao.findAll().then(function(transacoes){
        res.render("log/analitico", {transacoes: transacoes})
    })
})

router.get('/login/analitico/adicionar', (req, res) => {
    res.render('log/analiticoAdicionar')
})

router.post('/login/analitico/adicionar', (req, res) => {
    var valor = req.body.valor;
    var desc = req.body.desc;
    var id = req.params.USR_ID;

    Transacao.create({
        TRSC_VALOR: valor,
        TRSC_DESC: desc,
        TRSC_DATACAD: new Date(),
        CONTA_COD: id
    }).then(() => {
        res.redirect("/login/analitico")
    })
})

module.exports = router;