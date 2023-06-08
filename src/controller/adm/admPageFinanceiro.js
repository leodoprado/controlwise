const express = require("express")
const router = express.Router()
const Usuario = require("@model/usuarioModel");
const Financeiro = require('@model/financeiroModel')

router.get('/login/morador/financeiro', (req, res) => {
    Financeiro.findAll().then(function(financeiro){
        res.render("log/morador/financeiroMorador", {financeiro: financeiro})
    })
})

router.get('/login/administrador/financeiro', (req, res) => {
    Financeiro.findAll().then(function(financeiro){
        res.render("log/adm/financeiroAdministrador", {financeiro: financeiro})
    })
})

router.get('/login/administrador/financeiro/registro', (req, res) => {
    res.render("log/adm/financeiroUsuarioCadastro")
})

router.post('/login/administrador/financeiro/registro', (req, res) => {
    idUsuario = req.body.idUsuario;
    Usuario.findOne({where:{idUsuario: idUsuario}}).then(id => {
        var UsuarioExiste = (id != undefined)
        if(UsuarioExiste){
            res.redirect(`/login/administrador/financeiro/registro/${id.idUsuario}`);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/login/administrador/financeiro/registro/:idUsuario', (req, res) => {
    Usuario.findOne({where: {idUsuario: idUsuario}}).then(function(dados){
        if(!dados) {
            res.redirect(`/`)
        } else {
            res.render('log/adm/financeiroCadastroAdministrador', { dados: dados})
        }
    })
})

router.post('/login/administrador/financeiro/registro/success', (req, res) => {
    var idMorador = req.body.idMorador;
    var nome = req.body.nome;
    var mes = req.body.mes;
    var ano = req.body.ano;
    var numeroContrato = req.body.numeroContrato;
    var tempoContrato = req.body.tempoContrato;
    var tipoPagamento = req.body.tipoPagamento;
    var valor = req.body.valor;

    Financeiro.create({
        idMorador: idMorador,
        nome: nome,
        mes: mes,
        ano: ano,
        numeroContrato: numeroContrato,
        tempoContrato: tempoContrato,
        tipoPagamento: tipoPagamento,
        valor: valor,
    }).then(() => {
        res.redirect("/login/administrador/financeiro")
    })
})

router.get('/login/administrador/financeiro/delete', (req, res) => {
    res.render("log/adm/financeiroDeleteAdministrador")
})

router.post('/login/administrador/financeiro/delete', (req, res) => {
    numeroContrato = req.body.numeroContrato;
    Financeiro.findOne({where:{numeroContrato: numeroContrato}}).then(id => {
        var UsuarioExiste = (id != undefined)
        if(UsuarioExiste){
            res.redirect(`/login/administrador/financeiro/delete/${id.numeroContrato}`);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/login/administrador/financeiro/delete/:numeroContrato', (req, res) => {
    Financeiro.findOne({where: {numeroContrato: numeroContrato}}).then(function(dados){
        if(!dados) {
            res.redirect(`/`)
        } else {
            res.render('log/adm/financeiroDeleteDadosAdministrador', { dados: dados})
        }
    })
})

router.post('/login/administrador/financeiro/delete/:numeroContrato', (req, res) => {
    Financeiro.destroy ({
        where: { numeroContrato: numeroContrato}
    }).then(function(){
        res.redirect('/login/administrador/financeiro')
    }).catch(function(){
        res.send('Erro: Usuario nao excluido com sucesso')
    })
})

router.get('/login/administrador/financeiro/atualizar', (req, res) => {
    res.render("log/adm/financeiroAtualizarAdministrador")
})

router.post('/login/administrador/financeiro/atualizar', (req, res) => {
    numeroContrato = req.body.numeroContrato;
    Financeiro.findOne({where:{numeroContrato: numeroContrato}}).then(id => {
        var UsuarioExiste = (id != undefined)
        if(UsuarioExiste){
            res.redirect(`/login/administrador/financeiro/atualizar/${id.numeroContrato}`);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/login/administrador/financeiro/atualizar/:numeroContrato', (req, res) => {
    Financeiro.findOne({where: {numeroContrato: numeroContrato}}).then(function(dados){
        if(!dados) {
            res.redirect(`/`)
        } else {
            res.render('log/adm/financeiroAtualizarDadosAdministrador', { dados: dados})
        }
    })
})

router.post('/login/administrador/financeiro/atualizar/:numeroContrato', (req, res) => {
    var mes = req.body.mes;
    var ano = req.body.ano;
    var tempoContrato = req.body.tempoContrato;
    var tipoPagamento = req.body.tipoPagamento;
    var status = req.body.status;
    var valor = req.body.valor;

    if(req.body !== ''){
        Financeiro.update({
            mes: mes,
            ano: ano,
            tempoContrato: tempoContrato,
            tipoPagamento: tipoPagamento,
            status: status,
            valor: valor
        },
        {
            where: {numeroContrato : numeroContrato}
        });
        res.redirect('/login/administrador/financeiro');
    } else {
        res.render('log/adm/perfilAdministrador', { result : req.body})
    }
})


module.exports = router;