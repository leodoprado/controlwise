const express = require("express")
const router = express.Router()
const Usuario = require("@model/usuarioModel");
const Moradia = require('@model/moradiaModel')

router.get('/login/administrador/moradias/vincular', (req, res) => {
    res.render("log/adm/vincularMoradiasAdministrador")
})

router.post('/login/administrador/moradias/vincular', (req, res) => {
    idUsuario = req.body.idUsuario
    Usuario.findOne({where:{idUsuario: idUsuario}}).then(id => {
        var UsuarioExiste = (id != undefined)
        if(UsuarioExiste){
            res.redirect(`/login/administrador/moradias/vincular/${id.idUsuario}`);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/login/administrador/moradias/vincular/:idUsuario', (req, res) => {
    Usuario.findOne({where: {idUsuario: idUsuario}}).then(function(dados){
        if(!dados) {
            res.redirect(`/`)
        } else {
            res.render('log/adm/vincularMoradorMoradiaAdministrador', { dados: dados})
        }
    })
})

router.post('/login/administrador/moradias/vincular/success', (req, res) => {
    var idMorador = req.body.idMorador;
    var nome = req.body.nome;
    var numApto = req.body.numApto;
    var andar = req.body.andar;
    var posicao = req.body.posicao;
    var garagem = req.body.garagem;
    var telefone = req.body.telefone

    Moradia.create({
        idMorador: idMorador,
        nome: nome,
        numApto: numApto,
        andar: andar,
        posicao: posicao,
        garagem: garagem,
        telefone: telefone
    }).then(() => {
        res.redirect("/login/administrador/moradias")
    })
})

router.get('/login/administrador/moradias/alterar', (req, res) => {
    res.render("log/adm/moradiaAlterarAdministrador")
})

router.post('/login/administrador/moradias/alterar', (req, res) => {
    numApto = req.body.numApto
    Moradia.findOne({where:{numApto: numApto}}).then(id => {
        var UsuarioExiste = (id != undefined)
        if(UsuarioExiste){
            res.redirect(`/login/administrador/moradias/alterar/${id.numApto}`);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/login/administrador/moradias/alterar/:numApto', (req, res) => {
    Moradia.findOne({where: {numApto: numApto}}).then(function(dadosApto){
        if(!dadosApto) {
            res.redirect(`/login/Administrador/moradias/alterar`)
        } else {
            res.render('log/adm/moradiaAlterarDadosAdministrador', { dadosApto: dadosApto})
        }
    })
})

router.post('/login/administrador/moradias/alterar/:numApto', (req, res) => {
    var numApto = req.body.numApto;
    var andar = req.body.andar;
    var posicao = req.body.posicao;
    var garagem = req.body.garagem;
    if(req.body !== ''){
        Moradia.update({
            numApto: numApto,
            andar: andar,
            posicao: posicao,
            garagem: garagem
        },
        {
            where: {numApto : numApto}
        });
        res.redirect('/login/administrador/moradias');
    } else {
        res.render('log/adm/perfilAdministrador', { result : req.body})
    }
})

router.get('/login/administrador/moradias/apagar', (req, res) => {
    res.render("log/adm/moradiaApagarDadosAdministrador")
})

router.post('/login/administrador/moradias/apagar', (req, res) => {
    numApto = req.body.numApto
    Moradia.findOne({where:{numApto: numApto}}).then(id => {
        var UsuarioExiste = (id != undefined)
        if(UsuarioExiste){
            res.redirect(`/login/administrador/moradias/apagar/${id.numApto}`);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/login/administrador/moradias/apagar/:numApto', (req, res) => {
    Moradia.findOne({where: {numApto: numApto}}).then(function(dadosApto){
        if(!dadosApto) {
            res.redirect(`/`)
        } else {
            res.render('log/adm/moradiaApagarDadosMoradiaAdministrador', { dadosApto: dadosApto})
        }
    })
})

router.post('/login/administrador/moradias/apagar/success/:numApto', (req, res) => {
    Moradia.destroy ({
        where: { numApto: numApto}
    }).then(function(){
        res.redirect('/login/administrador/moradias')
    }).catch(function(){
        res.send('Erro: Usuario nao excluido com sucesso')
    })
})

module.exports = router;