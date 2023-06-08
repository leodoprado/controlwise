const express = require("express")
const router = express.Router()
const Usuario = require("@model/usuarioModel");

router.get('/login/administrador/gerencial', (req, res) => {
    Usuario.findAll().then(function(moradores){
        res.render("log/adm/gerencialAdministrador", {moradores: moradores})
    })
})

router.get('/login/administrador/gerencial/update', (req, res) => {
    res.render("log/adm/gerencialAlterarDadosAdministrador")
})

router.post('/login/administrador/gerencial/update', (req, res) => {
    idUsuario = req.body.idUsuario
    Usuario.findOne({where:{idUsuario: idUsuario}}).then(id => {
        var UsuarioExiste = (id != undefined)
        if(UsuarioExiste){
            res.redirect(`/login/administrador/gerencial/update/${id.idUsuario}`);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/login/administrador/gerencial/update/:idUsuario', (req, res) => {
    Usuario.findOne({where: {idUsuario: idUsuario}}).then(function(dados){
        if(!dados) {
            res.redirect(`/login/Administrador/gerencial/update`)
        } else {
            res.render('log/adm/dadosUpdateAdministrador', { dados: dados})
        }
    })
})

router.post('/login/administrador/gerencial/update/:idUsuario', (req, res) => {
    var nome = req.body.nome;
    var datanascimento = req.body.datanascimento;
    var cpf = req.body.cpf;
    var email = req.body.email;
    var telefone1 = req.body.telefone1;

    if(req.body !== ''){
        Usuario.update({
            nome: nome,
            datanascimento: datanascimento,
            cpf: cpf,
            email : email,
            telefone1 : telefone1,
        },
        {
            where: {idUsuario : idUsuario}
        });
        res.redirect('/login/administrador/gerencial');
    } else {
        res.render('log/adm/perfilAdministrador', { result : req.body})
    }
})

module.exports = router;