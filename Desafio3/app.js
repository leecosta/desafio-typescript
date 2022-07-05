// "use strict";
// exports.__esModule = true;
var botaoAtualizar = document.getElementById("atualizar-saldo");
var botaoLimpar = document.getElementById("limpar-saldo");
var soma = document.getElementById("soma");
var campoSaldo = document.getElementById("campo-saldo");
var saldo = 0;
function somarAoSaldo(soma) {
  if (campoSaldo) {
    saldo += soma;
    campoSaldo.innerHTML = String(saldo);
  }
}
function limparSaldo() {
  if (campoSaldo) campoSaldo.innerHTML = "";
}
if (botaoAtualizar)
  botaoAtualizar.addEventListener("click", function () {
    somarAoSaldo(Number(soma.value));
  });
if (botaoLimpar)
  botaoLimpar.addEventListener("click", function () {
    limparSaldo();
  });
