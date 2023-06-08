const express = require("express");
const router = express.Router();
const Comunicados = require('@model/comunicadosModel');

router.get('/login/morador/comunicados', (req, res) => {
    Comunicados.findAll().then(function(comunicado){
        res.render("log/morador/comunicadosMorador", {comunicado: comunicado})
    })
})

router.get('/login/administrador/comunicados', (req, res) => {
    Comunicados.findAll().then(function(comunicado){
        res.render("log/adm/comunicadosAdministrador", {comunicado: comunicado})
    })
})

router.get('/login/administrador/comunicados/cadastro', (req, res) => {
    res.render("log/adm/comunicadosCreateAdministrador")
})

router.post('/login/administrador/comunicados/cadastro', (req, res) => {
    var titulo = req.body.titulo;
    var dataenvio = req.body.dataenvio;
    var assunto = req.body.assunto;
    var texto = req.body.texto;

    Comunicados.create({
        titulo: titulo,
        dataenvio: dataenvio,
        assunto: assunto, 
        texto: texto
    }).then(() => {
        res.redirect("/login/administrador/comunicados")
    })
})

router.get('/login/administrador/comunicados/delete', (req, res) => {
    res.render('log/adm/comunicadosDeleteAdministrador');
})

router.post('/login/administrador/comunicados/delete', (req, res) => {
    idComunicado = req.body.idComunicado
    Comunicados.findOne({where:{idComunicado: idComunicado}}).then(id => {
        var UsuarioExiste = (id != undefined)
        if(UsuarioExiste){
            res.redirect(`/login/administrador/comunicados/delete/${id.idComunicado}`);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/login/administrador/comunicados/delete/:idComunicado', (req, res) => {
    Comunicados.findOne({where: {idComunicado: idComunicado}}).then(function(comunicado){
        if(!comunicado) {
            res.redirect(`/login/Administrador/comunicados/delete`)
        } else {
            res.render('log/adm/comunicadoDeleteDadosAdministrador', { comunicado: comunicado})
        }
    })
})

router.post('/login/administrador/comunicados/delete/:idComunicado', (req, res) => {
    Comunicados.destroy ({
        where: { idComunicado: idComunicado}
    }).then(function(){
        res.redirect('/login/administrador/comunicados')
    }).catch(function(){
        res.send('Erro: Usuario nao excluido com sucesso')
    })
})

module.exports = router;