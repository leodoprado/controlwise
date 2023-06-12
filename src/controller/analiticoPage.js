const express = require("express")
const router = express.Router()
const accessValidation = require("@middleware/accessValidation");
const Usuario = require("@model/usuarioModel");
const PerfilUser = require("@model/usuarioModel");

router.get('/login/analitico', (req, res) => {
    res.render('log/analitico')
})


module.exports = router;