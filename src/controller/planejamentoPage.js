const express = require("express")
const router = express.Router()
const accessValidation = require("@middleware/accessValidation");
const Usuario = require("@model/usuarioModel");
const PerfilUser = require("@model/usuarioModel");

router.get('/login/planejamento', (req, res) => {
    res.render('log/planejamento')
})


module.exports = router;