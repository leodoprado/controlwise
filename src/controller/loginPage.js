const express = require("express")
const router = express.Router()
const Usuario = require("@model/usuarioModel")
const bcrypt = require('bcryptjs');
const flash = require('connect-flash');


router.get('/login', (req, res) => {

    res.render("home/login", { message: ""});
})

router.post('/authenticate', (req, res) => {
    
    var nivelAcesso = req.body.nivelAcesso;
    var idUsuario = req.body.login;
    var senha = req.body.senha;

    Usuario.findOne({where:{idUsuario: idUsuario}}).then(user => {
        var UsuarioExiste = (user != undefined)
        var Acesso = (nivelAcesso == user.nivelAcesso)
        if(UsuarioExiste && Acesso){
                var correctSenha = bcrypt.compareSync(senha, user.senha);
                if(correctSenha){
                    req.session.user = {
                        idUsuario: user.idUsuario,
                        nivelAcesso: user.nivelAcesso
                    }
                res.redirect(`/login/${nivelAcesso}/perfil/${user.idUsuario}`);
            }else{
                res.redirect('/login');
            }
        } else {
            res.redirect('/login');
        }
    })
})

router.get('/logout', (req, res) => {
    req.session.user = undefined;
    res.redirect("/");
})

// Vai ser alterado para a devida rota protegida
router.get('/create', (req, res) => {
    res.render("home/create")
})

router.post('/create/user', (req, res) => {
    var nivelAcesso = req.body.nivelAcesso;
    var idUsuario = req.body.login;
    var senha = req.body.senha;

    Usuario.findOne({where:{idUsuario: idUsuario}}).then(user => {
        if(user == undefined){
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(senha, salt)

            Usuario.create({
                nivelAcesso: nivelAcesso,
                idUsuario: idUsuario,
                senha: hash
            }).then(() => {
                res.redirect("/login")
            }).catch((err) => {
                res.redirect("/login")
            });
        } else {
            res.redirect("/create");
        }
    })
})

module.exports = router;