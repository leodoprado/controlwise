const express = require("express")
const router = express.Router()
const Usuario = require("@model/usuarioModel")
const bcrypt = require('bcryptjs');
const flash = require('connect-flash');


router.get('/login', (req, res) => {

    res.render("home/login");
})

router.post('/authenticate', (req, res) => {

    var emailUsuario = req.body.emailUsuario;
    var senhaUsuario = req.body.senhaUsuario;

    Usuario.findOne({where:{USR_EMAIL: emailUsuario}}).then(user => {
        var UsuarioExiste = (user != undefined)
        if(UsuarioExiste){
                var correctSenha = bcrypt.compareSync(senhaUsuario, user.USR_SENHA);
                if(correctSenha){
                    req.session.user = {
                        USR_EMAIL: user.emailUsuario,
                    }
                res.redirect(`/login/perfil/${user.USR_ID}`);
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
router.get('/register', (req, res) => {
    res.render("home/register")
})

router.post('/register/user', (req, res) => {
    var nomeUsuario = req.body.nomeUsuario;
    var cpfUsuario = req.body.cpfUsuario;
    var emailUsuario = req.body.emailUsuario;
    var senhaUsuario = req.body.senhaUsuario;

    Usuario.findOne({where:{USR_NOME:nomeUsuario, USR_CPF:cpfUsuario, USR_EMAIL: emailUsuario}}).then(user => {
        if(user == undefined){
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(senhaUsuario, salt)

            Usuario.create({
                USR_NOME: nomeUsuario,
                USR_CPF: cpfUsuario,
                USR_EMAIL: emailUsuario,
                USR_SENHA: hash
            }).then(() => {
                res.redirect("/login")
            }).catch((err) => {
                res.redirect("/login")
            });
        } else {
            res.redirect("/register");
        }
    })
})

module.exports = router;