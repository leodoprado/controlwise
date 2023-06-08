const express = require("express")
const router = express.Router()
const Financeiro = require('@model/financeiroModel')

router.get('/login/morador/financeiro', (req, res) => {
    Financeiro.findAll().then(function(financeiro){
        res.render("log/morador/financeiroMorador", {financeiro: financeiro})
    })
})