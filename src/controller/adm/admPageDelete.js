const express = require("express")
const router = express.Router()
const accessValidation = require("@middleware/accessValidation");
const Usuario = require("@model/usuarioModel");

router.get('/login/administrador/gerencial/delete', (req, res) => {
    res.render("log/adm/deleteAdministrador")
})

router.post('/login/administrador/gerencial/delete', (req, res) => {
    idUsuario = req.body.idUsuario
    Usuario.findOne({where:{idUsuario: idUsuario}}).then(id => {
        var UsuarioExiste = (id != undefined)
        if(UsuarioExiste){
            res.redirect(`/login/administrador/gerencial/delete/${id.idUsuario}`);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/login/administrador/gerencial/delete/:idUsuario', (req, res) => {
    Usuario.findOne({where: {idUsuario: idUsuario}}).then(function(dados){
        if(!dados) {
            res.redirect(`/login/Administrador/gerencial/delete`)
        } else {
            res.render('log/adm/dadosDeleteAdministrador', { dados: dados})
        }
    })
})

router.post('/login/administrador/gerencial/delete/:idUsuario', (req, res) => {
    Usuario.destroy ({
        where: { idUsuario: idUsuario}
    }).then(function(){
        res.redirect('/login/administrador/gerencial/delete')
    }).catch(function(){
        res.send('Erro: Usuario nao excluido com sucesso')
    })
})


module.exports = router;