const express = require("express")
const router = express.Router()
const accessValidation = require("@middleware/accessValidation");
const Usuario = require("@model/usuarioModel");

router.get('/login/morador/perfil/:idUsuario', accessValidation ,(req, res) => {
    const session = req.session.user

    idUsuario = req.params.idUsuario;
    res.cookie('idUsuario', idUsuario, {expire: new Date()+10*60*1000})

    Usuario.findOne({where: {idUsuario: idUsuario,  nivelAcesso: session.nivelAcesso}}).then(function(result){
        if(!result) {
            res.redirect(`/login/morador/gerencial`)
        } else {
            res.render('log/morador/perfilMorador', { result: result})
        }
    })
});

router.post('/login/morador/perfil/:idUsuario', (req, res) => {
    id = req.params.idUsuario;

    nome = req.body.nome
    datanascimento = req.body.datanascimento
    cpf = req.body.cpf;
    rg = req.body.rg;
    estadocivil = req.body.estadocivil;
    sexo = req.body.sexo;
    pais = req.body.pais;
    cidadenatal = req.body.cidadenatal;
    estado = req.body.estado;
    email = req.body.email;
    emailcomplementar = req.body.emailcomplementar;
    telefone1 = req.body.telefone1;
    telefone2 = req.body.telefone2;

    console.log(nome)

    if(req.body !== ''){
        Usuario.update({
            nome: nome,
            datanascimento: datanascimento,
            cpf: cpf,
            rg : rg,
            estadocivil : estadocivil,
            sexo : sexo,
            pais : pais,
            cidadenatal : cidadenatal,
            estado: estado,
            email : email,
            emailcomplementar : emailcomplementar,
            telefone1 : telefone1,
            telefone2 : telefone2
        },
        {
            where: {idUsuario : idUsuario}
        });
        console.log(nome)
        res.clearCookie('idUsuario');
        res.redirect('/login/morador/perfil/gerencial');
    } else {
        res.render('log/morador/perfilMorador', { result : req.body})
    }
})

module.exports = router;