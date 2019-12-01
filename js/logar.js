/*
 JavaScript desenvolvido por Joel Andrade
 para simulação de login
 login para o painel de usuario são:
 /======Painel=======\
 /====login: joel====\
 /=senha: 1596325852=\
 /===================\
*/

var form = document.getElementById('paienlusuario');
var login = document.getElementById('login');
var senha = document.getElementById('senha');
var error = document.querySelector(".error");
document.getElementById("loader").style.display = "none";

form.addEventListener('submit', function (event) {

    if (login.value == "") {
        error.textContent = 'Digite seu login'
        error.classList.add("errorFadeIn");
    } else if (senha.value == "") {
        error.textContent = 'Digite sua Senha'
        error.classList.add("errorFadeIn");
    } else {

        if (login.value != 'joel') {
            error.textContent = 'login incorreto';
            error.classList.add("errorFadeIn");
        } else if (senha.value != 1596325852) {
            error.textContent = 'Senha Incorreta';
            error.classList.add("errorFadeIn");
        } else {
            error.textContent = 'Logado com sucesso...';
            error.classList.add("logadoComSucesso");
            setTimeout(function(){
                error.textContent = 'Aguarde Carregando';
                document.getElementById("loader").style.display = "block";
            }, 2000)

            setTimeout(function(){
                window.location.href = "painel/index.html";
            }, 5000);
        }
    }
    event.preventDefault();
});