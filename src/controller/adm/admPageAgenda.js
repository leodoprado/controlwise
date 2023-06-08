const express = require("express")
const router = express.Router()
const Agenda = require("@model/agendaModel");
const Usuario = require('@model/usuarioModel');

router.get('/login/administrador/agenda', (req, res) => {
    Agenda.findAll().then(function(agendamento){
        res.render("log/adm/agendaAdministrador", {agendamento: agendamento})
    })
})

router.get('/login/administrador/agenda/agendar', (req, res) => {
    res.render("log/adm/agendarDadosAdministrador")
})

router.post('/login/administrador/agenda/agendar', (req, res) => {
    idUsuario = req.body.idUsuario
    Usuario.findOne({where:{idUsuario: idUsuario}}).then(id => {
        var UsuarioExiste = (id != undefined)
        if(UsuarioExiste){
            res.redirect(`/login/administrador/agenda/agendar/${id.idUsuario}`);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/login/administrador/agenda/agendar/:idUsuario', (req, res) => {
    Usuario.findOne({where: {idUsuario: idUsuario}}).then(function(dados){
        if(!dados) {
            res.redirect(`/`)
        } else {
            res.render('log/adm/agendarAdministrador', { dados: dados})
        }
    })
})

router.post('/login/administrador/agenda/agendar/success', (req, res) => {
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
            res.redirect("/login/administrador/agenda")
        }).catch((err) => {
            res.redirect("/login/administrador/agenda/agendar")
        });
})

router.get('/login/administrador/agenda/pedidos', (req, res) => {
    res.render("log/adm/pedidosAgendaAdministrador")
})

router.post('/login/administrador/agenda/pedidos', (req, res) => {
    idAgendamento = req.body.idAgendamento
    Agenda.findOne({where:{idAgendamento: idAgendamento}}).then(id => {
        var UsuarioExiste = (id != undefined)
        if(UsuarioExiste){
            res.redirect(`/login/administrador/agenda/pedidos/${id.idAgendamento}`);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/login/administrador/agenda/pedidos/:idAgendamento', (req, res) => {
    Agenda.findOne({where: {idAgendamento: idAgendamento}}).then(function(pedido){
        if(!pedido) {
            res.redirect(`/login/Administrador/agenda/pedidos`)
        } else {
            res.render('log/adm/pedidosAtualizarAgendaAdministrador', { pedido: pedido })
        }
    })
})

router.post('/login/administrador/agenda/pedidos/:idAgendamento', (req, res) => {
    var status = req.body.status;
    if(req.body !== ''){
        Agenda.update({
            status: status,
        },
        {
            where: {idAgendamento : idAgendamento}
        });
        res.redirect('/login/administrador/agenda');
    } else {
        res.render('log/adm/perfilAdministrador', { result : req.body})
    }
})

router.get('/login/administrador/agenda/excluir', (req, res) => {
    res.render('log/adm/agendaExcluirAdministrador')
})

router.post('/login/administrador/agenda/excluir', (req, res) => {
    idAgendamento = req.body.idAgendamento
    Agenda.findOne({where:{idAgendamento: idAgendamento}}).then(id => {
        var UsuarioExiste = (id != undefined)
        if(UsuarioExiste){
            res.redirect(`/login/administrador/agenda/excluir/${id.idAgendamento}`);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/login/administrador/agenda/excluir/:idAgendamento', (req, res) => {
    Agenda.findOne({where: {idAgendamento: idAgendamento}}).then(function(agendamento){
        if(!agendamento) {
            res.redirect(`/login/Administrador/agenda/excluir`)
        } else {
            res.render('log/adm/agendaExcluirDadosAdministrador', { agendamento: agendamento })
        }
    })
})

router.post('/login/administrador/agenda/excluir/:idAgendamento', (req, res) => {
    Agenda.destroy ({
        where: { idAgendamento: idAgendamento}
    }).then(function(){
        res.redirect('/login/administrador/agenda')
    }).catch(function(){
        res.send('Erro: Usuario nao excluido com sucesso')
    })
})

module.exports = router;