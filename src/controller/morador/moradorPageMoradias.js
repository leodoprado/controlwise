const express = require("express")
const router = express.Router()
const Moradias = require("@model/moradiaModel");

router.get('/login/morador/moradias', (req, res) => {
    Moradias.findAll().then(function(moradias){
        res.render("log/morador/moradiasMorador", {moradias: moradias})
    })
})

module.exports = router;