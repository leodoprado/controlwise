const express = require("express")
const router = express.Router()
const accessValidation = require("@middleware/accessValidation");
const Usuario = require("@model/usuarioModel");

router.get('/login/perfil/:USR_ID', accessValidation ,(req, res) => {
    const session = req.session.user

    USR_ID = req.params.USR_ID;
    res.cookie('USR_ID', USR_ID, {expire: new Date()+10*60*1000})

    Usuario.findOne({where: {USR_ID: USR_ID}}).then(function(result){
        if(!result) {
            res.redirect(`/login`)
        } else {
            res.render('log/perfil', { result: result})
        }
    })
});

router.post('/login/perfil/:USR_ID', (req, res) => {
    id = req.params.USR_ID;

    nome = req.body.nome;

    if(req.body !== ''){
        Usuario.update({
            USR_NOME: nome,
            
        },
        {
            where: {USR_ID : USR_ID}
        });
        console.log(nome)
        res.clearCookie('USR_ID');
        res.redirect('/login/perfil/:USR_ID');
    } else {
        res.render('log/perfil', { result : req.body})
    }
})

module.exports = router;