const express = require('express');
const routes = require('./routes');
const db = require('@database/db');
const Usuario = require('@model/usuarioModel');
const Moradia = require('@model/moradiaModel');
const Agena = require('@model/agendaModel');
const Comunicados = require('@model/comunicadosModel');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');

// Sessions
app.use(session({
    secret: "AJSasnakAJSNAJDa3231nsdn",
    cookie: { maxAge: 432000000 },
    secure: false
}))

app.use(flash());

// Declarando rotas
const Routes = require('./routes'); 

// View engine
app.set("views", "./src/view");
app.set('view engine', 'ejs');

// Arquivos estáticos
app.use(express.static(path.join(__dirname, "/public")))

// Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Global message
app.use((req, res, next) => {
	res.locals.errormessage = req.flash('errormessage', 'Usuário inválido!')
	next();
});

app.use('/', Routes)

module.exports = app;