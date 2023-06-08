const express = require("express")
const router = express.Router()
const PerfilUser = require("@model/usuarioModel");

router.get('/login/morador/gerencial', (req, res) => {
    PerfilUser.findAll().then(function(moradores){
        res.render("log/morador/gerencialMorador", {moradores: moradores})
    })
})

module.exports = router;