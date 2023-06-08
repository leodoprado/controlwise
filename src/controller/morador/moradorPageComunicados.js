const express = require("express");
const router = express.Router();
const Comunicados = require('@model/comunicadosModel');

router.get('/login/morador/comunicados', (req, res) => {
    Comunicados.findAll().then(function(comunicado){
        res.render("log/morador/comunicadosMorador", {comunicado: comunicado})
    })
})