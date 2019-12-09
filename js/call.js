var clienteFinalizado;
// Call 
var callStatus = document.querySelector("#statusService");
var callOn = document.querySelector(".atendimento");
var callTime = document.getElementById("callTime");
var timeService = document.querySelector("#timeService");

//Btn
var btnLiberar = document.querySelector("#btn-liberar");
var btnPausar = document.querySelector("#btn-pausar");
var btnLigar = document.querySelector("#btn-ligar");

var btnAtender = document.querySelector("#btn-atenderCliente");
var btnDesligar = document.querySelector("#btn-desligarCliente");


btnAtender.disabled = true;
btnDesligar.disabled = true;

// botao de iniciar serviço
btnLiberar.addEventListener('click', () => {
    CallLivre();
    btnLiberar.classList.add('linkDisabled');
});

// botao de pausar serviço
btnDesligar.addEventListener('click', () => {
    CallPaused();

});


// botão de atender
btnAtender.addEventListener('click', () => {
    callIniciada();
});
// botao de finalizar ligação
btnDesligar.addEventListener('click', () => {
    FinalizarLigacao();
    clearInterval();
});

btnLigar.addEventListener('click', () =>{
    ligarCliente();
});

// função para liberar o serviço e iniciar atendimentos
function CallLivre() {
    var callLivres = callStatus.textContent = "Livre";
    setTimeout(() => {
        if (callLivres) {
            callStatus.textContent = "Aguardando Chamada";
            setTimeout(() => {
                clienteLinha();
            }, 5000);
        }
    }, 3000);
    callLivres = true;
}



// Função para pausar o atendimento ao cliente!!! encerrar chamada
function CallPaused() {
    var callPause = callStatus.textContent = "Pausado!";
    callPause = true;
    document.querySelector(".callOn").innerHTML = "Finalizando";
    callTime.style.backgroundColor = "blue";
    ifr.setAttribute("src", "ligFinalizada.html");
}

// Função que mostra que o cliente atendeu e está na linha esperando ser atendido
function clienteLinha() {
    clienteOn = true;
    callStatus.textContent = "Cliente na linha";
    btnAtender.classList.add('btn-atendimento-on');
    btnAtender.disabled = false;
}

// Função que inicia ao clicar no botão de atender!!!
function callIniciada() {
    callStatus.textContent = "Ativo";
    btnAtender.classList.remove('btn-atendimento-on');
    btnDesligar.classList.add("btn-delisgar-Cliente-off");
    btnAtender.disabled = true;
    btnDesligar.disabled = false;
    callOn.classList.add('atendimentoOncliente');
    StartTime(true);
}

//funcao responsavel por ligar para o cliente

function ligarCliente(){
    callStatus.textContent = "Discando";
    setTimeout(() => {
        callIniciada();
    }, 3000);
}


// função que vai finalizar o contato com o cliente
function FinalizarLigacao() {
    callStatus.textContent = "Finalizado!";
    btnDesligar.classList.remove('btn-delisgar-Cliente-off');
    callOn.classList.remove('atendimentoOncliente');
    btnAtender.disabled = false;
    timeService.innerHTML = "00:00";
    StopTime();
}


function StartTime(timeStart, pararTime) {
    var timeStart;
    // Inicia o tempo com o cliente
    if (timeStart) {
        var hour = 00;
        var sec = 00;
        var contador = setInterval(function () {
            timeService.innerHTML = hour + " : " + sec;
            sec++;
            if (sec == 60) {
                hour++;
                sec = 0;
                if (hour == 0) {
                    hour = 2;
                }
            }
        }, 1000);
    }
}
function StopTime(){
   clearInterval();
}