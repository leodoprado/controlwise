var buttonperfil = document.getElementById("btn-perfil")

buttonperfil.addEventListener("click", function() {
    var descricao = document.getElementById("descricao-perfil");

    descricao.classList.toggle("hide");
})

var buttongerencial = document.getElementById("btn-gerencial")

buttongerencial.addEventListener("click", function() {
    var descricaogerencial = document.getElementById("descricao-gerencial");

    descricaogerencial.classList.toggle("hide");
})

var buttonmoradias = document.getElementById("btn-moradias")

buttonmoradias.addEventListener("click", function() {
    var descricaomoradias = document.getElementById("descricao-moradias");

    descricaomoradias.classList.toggle("hide");
})

/*------------------------*/

var buttonfinanceiro = document.getElementById("btn-financeiro")

buttonfinanceiro.addEventListener("click", function() {
    var descricaofinanceiro = document.getElementById("descricao-financeiro");

    descricaofinanceiro.classList.toggle("hide");
})

var buttoncomunicados = document.getElementById("btn-comunicados")

buttoncomunicados.addEventListener("click", function() {
    var descricaocomunicados = document.getElementById("descricao-comunicados");

    descricaocomunicados.classList.toggle("hide");
})

var buttonagenda = document.getElementById("btn-agenda")

buttonagenda.addEventListener("click", function() {
    var descricaoagenda = document.getElementById("descricao-agenda");

    descricaoagenda.classList.toggle("hide");
})