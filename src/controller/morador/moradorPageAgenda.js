const express = require("express")
const router = express.Router()
const Agenda = require("@model/agendaModel");
const Usuario = require('@model/usuarioModel')

router.get('/login/morador/agenda', (req, res) => {
    Agenda.findAll().then(function(agendamento){
        res.render("log/morador/agendaMorador", {agendamento: agendamento})
    })
})

router.get('/login/morador/agenda/agendar', (req, res) => {
    res.render("log/morador/agendarMorador")
})

router.post('/login/morador/agenda/agendar', (req, res) => {
    idUsuario = req.body.idUsuario
    Usuario.findOne({where:{idUsuario: idUsuario}}).then(id => {
        var UsuarioExiste = (id != undefined)
        if(UsuarioExiste){
            res.redirect(`/login/morador/agenda/agendar/${id.idUsuario}`);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/login/morador/agenda/agendar/:idUsuario', (req, res) => {
    Usuario.findOne({where: {idUsuario: idUsuario}}).then(function(dados){
        if(!dados) {
            res.redirect(`/`)
        } else {
            res.render('log/morador/agendarDadosMorador', { dados: dados})
        }
    })
})

router.post('/login/morador/agenda/agendar/success', (req, res) => {
    var idMorador = req.body.idMorador;
    var nome = req.body.nome;
    var titulo = req.body.titulo;
    var assunto = req.body.assunto;
    var dataInicio = req.body.dataInicio;
    var horarioInicio = req.body.horarioInicio;
    var dataFim = req.body.dataFim;
    var horarioFim = req.body.horarioFim;

        Agenda.create({
            idMorador: idMorador,
            nome: nome,
            titulo: titulo,
            assunto: assunto,
            dataInicio: dataInicio,
            horarioInicio: horarioInicio,
            dataFim: dataFim,
            horarioFim: horarioFim
        }).then(() => {
            res.redirect("/login/morador/agenda")
        }).catch((err) => {
            res.redirect("/login/morador/agenda/agendar")
        });
})

module.exports = router;