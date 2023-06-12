const express = require('express');
const router = express.Router();
const accessValidation = require('./middleware/accessValidation');
const homePageController = require('./controller/homePage');
const loginPageController = require('./controller/loginPage');
const perfilPageController = require('./controller/perfilPage');
const dadosPageController = require('./controller/dadosPage');
const analiticoPageController = require('./controller/analiticoPage');
const planejamentoPageController = require('./controller/planejamentoPage')

//const esqueceusenhaPageController = require('@controller/loginPage');
/*const admPagePerfilController = require('./controller/adm/admPagePerfil');
const admPageGerencialController = require('@controller/adm/admPageGerencial');
const admPageCreateController = require('@controller/adm/admPageCreate');
const admPageDeleteController = require('@controller/adm/admPageDelete');
const admPageFinanceiroController = require('@controller/adm/admPageFinanceiro');
const admPageMoradiasController = require('@controller/adm/admPageMoradias');
const admPageVincularMoradiasController = require('@controller/adm/admPageVincularMoradias');
const admPageComunicadosController = require('@controller/adm/admPageComunicados');
const admPageAgendaController = require('@controller/adm/admPageAgenda');
const moradorPagePerfilController = require('@controller/morador/moradorPagePerfil');
const moradorPageGerencialController = require('@controller/morador/moradorPageGerencial');
const moradorPageMoradiasController = require('@controller/morador/moradorPageMoradias');
const moradorPageFinanceiroController = require('@controller/adm/admPageFinanceiro');
const moradorPageComunicadosController = require('@controller/adm/admPageComunicados')
const moradorPageAgendaController = require('@controller/morador/moradorPageAgenda');
const create = require('@controller/loginPage');*/

router.get('/', homePageController);
router.get('/sobre', homePageController);
router.get('/ajuda', homePageController);
router.get('/login', loginPageController);
router.post('/authenticate', loginPageController);
router.get('/logout', loginPageController);
router.get('/register', loginPageController);
router.post('/register/user', loginPageController);
router.get('/login/perfil/:USR_ID', accessValidation, perfilPageController);
router.post('/login/perfil/:USR_ID', accessValidation, perfilPageController);
router.get('/login/dados', accessValidation, dadosPageController);
router.get('/login/dados/adicionar', accessValidation, dadosPageController);
router.get('/login/analitico', accessValidation, analiticoPageController);
router.get('/login/planejamento', accessValidation, planejamentoPageController);
//router.get('/central-de-ajuda', homePageController);
/*router.get('/assinatura-do-software', homePageController);
router.get('/login/morador/perfil/:idUsuario', accessValidation ,moradorPagePerfilController);
router.post('/login/morador/perfil/:idUsuario', accessValidation ,moradorPagePerfilController);
router.get('/login/morador/gerencial', accessValidation, moradorPageGerencialController);
router.get('/login/morador/moradias', accessValidation ,moradorPageMoradiasController);
router.get('/login/morador/financeiro', accessValidation ,moradorPageFinanceiroController)
router.get('/login/morador/comunicados',accessValidation ,moradorPageComunicadosController);
router.get('/login/morador/agenda',accessValidation ,moradorPageAgendaController);
router.get('/login/morador/agenda',accessValidation ,moradorPageAgendaController);
router.get('/login/morador/agenda/agendar' ,accessValidation ,moradorPageAgendaController);
router.post('/login/morador/agenda/agendar' ,accessValidation ,moradorPageAgendaController);
router.get('/login/morador/agenda/agendar/:idUsuario',accessValidation ,moradorPageAgendaController);
router.post('/login/morador/agenda/agendar/success',accessValidation ,moradorPageAgendaController);
// Rotas Administrador
router.get('/login/administrador/perfil/:idUsuario', accessValidation ,admPagePerfilController);
router.post('/login/administrador/perfil/:idUsuario',accessValidation ,admPagePerfilController)
router.get('/login/administrador/gerencial',accessValidation ,admPageGerencialController);
router.get('/login/administrador/gerencial/create', accessValidation ,admPageCreateController);
router.post('/login/administrador/gerencial/create/success', admPageCreateController);
router.get('/login/administrador/gerencial/delete', accessValidation ,admPageDeleteController);
router.post('/login/administrador/gerencial/delete', accessValidation ,admPageDeleteController);
router.get('/login/administrador/gerencial/delete/:idUsuario',  accessValidation ,admPageDeleteController);
router.post('/login/administrador/gerencial/delete/:idUsuario',  accessValidation ,admPageDeleteController);
router.get('/login/administrador/gerencial/update',  accessValidation ,admPageGerencialController);
router.post('/login/administrador/gerencial/update',  accessValidation ,admPageGerencialController);
router.get('/login/administrador/gerencial/update/:idUsuario',  accessValidation ,admPageGerencialController);
router.post('/login/administrador/gerencial/update/:idUsuario',  accessValidation ,admPageGerencialController);
router.get('/login/administrador/financeiro',  accessValidation ,admPageFinanceiroController);
router.get('/login/administrador/financeiro/registro',  accessValidation ,admPageFinanceiroController);
router.post('/login/administrador/financeiro/registro',  accessValidation ,admPageFinanceiroController);
router.get('/login/administrador/financeiro/registro/:idUsuario',  accessValidation ,admPageFinanceiroController);
router.post('/login/administrador/financeiro/registro/success',  accessValidation ,admPageFinanceiroController);
router.get('/login/administrador/financeiro/delete',  accessValidation ,admPageFinanceiroController)
router.post('/login/administrador/financeiro/delete',  accessValidation ,admPageFinanceiroController)
router.get('/login/administrador/financeiro/delete/:numeroContrato',  accessValidation ,admPageFinanceiroController)
router.post('/login/administrador/financeiro/delete/:numeroContrato',  accessValidation ,admPageFinanceiroController)
router.get('/login/administrador/financeiro/atualizar',  accessValidation ,admPageFinanceiroController);
router.post('/login/administrador/financeiro/atualizar',  accessValidation ,admPageFinanceiroController);
router.get('/login/administrador/financeiro/atualizar/:numeroContrato',  accessValidation ,admPageFinanceiroController);
router.post('/login/administrador/financeiro/atualizar/:numeroContrato',  accessValidation ,admPageFinanceiroController);


router.get('/login/administrador/moradias',  accessValidation ,admPageMoradiasController);
router.get('/login/administrador/moradias/vincular',  accessValidation ,admPageVincularMoradiasController);
router.post('/login/administrador/moradias/vincular',  accessValidation ,admPageVincularMoradiasController);
router.get('/login/administrador/moradias/vincular/:idUsuario',  accessValidation ,admPageVincularMoradiasController);
router.post('/login/administrador/moradias/vincular/:idUsuario',  accessValidation ,admPageVincularMoradiasController);
router.post('/login/administrador/moradias/vincular/success',  accessValidation ,admPageVincularMoradiasController);
router.get('/login/administrador/moradias/alterar',  accessValidation ,admPageVincularMoradiasController);
router.post('/login/administrador/moradias/alterar',  accessValidation ,admPageVincularMoradiasController);
router.get('/login/administrador/moradias/alterar/:numApto',  accessValidation ,admPageVincularMoradiasController);
router.post('/login/administrador/moradias/alterar/:numApto',  accessValidation ,admPageVincularMoradiasController);
router.get('/login/administrador/moradias/apagar',  accessValidation ,admPageVincularMoradiasController);
router.post('/login/administrador/moradias/apagar',  accessValidation ,admPageVincularMoradiasController);
router.get('/login/administrador/moradias/apagar/:numApto',  accessValidation ,admPageVincularMoradiasController);
router.post('/login/administrador/moradias/apagar/success/:numApto',  accessValidation ,admPageVincularMoradiasController);
// rotas de moradias
router.get('/login/administrador/comunicados',  accessValidation ,admPageComunicadosController);
router.get('/login/administrador/comunicados/cadastro',  accessValidation ,admPageComunicadosController);
router.post('/login/administrador/comunicados/cadastro',  accessValidation ,admPageComunicadosController);
router.get('/login/administrador/comunicados/delete',  accessValidation ,admPageComunicadosController);
router.post('/login/administrador/comunicados/delete',  accessValidation ,admPageComunicadosController);
router.get('/login/administrador/comunicados/delete/:idComunicado',  accessValidation ,admPageComunicadosController);
router.post('/login/administrador/comunicados/delete/:idComunicado',  accessValidation ,admPageComunicadosController);
router.get('/login/administrador/agenda',  accessValidation ,admPageAgendaController);
router.get('/login/administrador/agenda/agendar',  accessValidation ,admPageAgendaController);
router.post('/login/administrador/agenda/agendar', accessValidation ,admPageAgendaController);
router.get('/login/administrador/agenda/agendar/:idUsuario', accessValidation ,admPageAgendaController);
router.post('/login/administrador/agenda/agendar/success', accessValidation ,admPageAgendaController);
router.get('/login/administrador/agenda/pedidos',  accessValidation ,admPageAgendaController);
router.post('/login/administrador/agenda/pedidos',  accessValidation ,admPageAgendaController);
router.get('/login/administrador/agenda/pedidos/:idAgendamento',  accessValidation ,admPageAgendaController);
router.post('/login/administrador/agenda/pedidos/:idAgendamento',  accessValidation ,admPageAgendaController);
router.get('/login/administrador/agenda/excluir',  accessValidation ,admPageAgendaController);
router.post('/login/administrador/agenda/excluir',  accessValidation ,admPageAgendaController);
router.get('/login/administrador/agenda/excluir/:idAgendamento',  accessValidation ,admPageAgendaController);
router.post('/login/administrador/agenda/excluir/:idAgendamento',  accessValidation ,admPageAgendaController);
*/
module.exports = router;
