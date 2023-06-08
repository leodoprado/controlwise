const express = require("express")
const router = express.Router()
const Usuario = require('@model/usuarioModel')
const Moradias = require("@model/moradiaModel");

router.get('/login/administrador/moradias', (req, res) => {
    Moradias.findAll().then(function(moradias){
        res.render("log/adm/moradiasAdministrador", {moradias: moradias})
    })
})

module.exports = router;