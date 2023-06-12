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
    datanasc = req.body.datanasc;
    cpf = req.body.cpf;
    rg = req.body.rg;
    email = req.body.email;
    telefone = req.body.telefone;
    cidade = req.body.cidade;
    cep = req.body.cep;
    endereco = req.body.endereco;
    bairro = req.body.bairro;
    referencia = req.body.referencia;
    complemento = req.body.complemento;

    if(req.body !== ''){
        Usuario.update({
            USR_NOME: nome,
            USR_DATANASC: datanasc,
            USR_CPF: cpf,
            USR_RG: rg,
            USR_EMAIL: email,
            USR_TELEFONE: telefone,
            USR_CIDADE: cidade,
            USR_CEP: cep,
            USR_ENDERECO: endereco,
            USR_BAIRRO: bairro,
            USR_REFERENCIA: referencia,
            USR_COMPLEMENTO: complemento           
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