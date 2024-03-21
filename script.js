// Variáveis Adicionais
let msg1=document.getElementById("msg1");
let msg2=document.getElementById("msg2");

// Variáveis com a história
let string1 = "Você é um explorador que está em busca do lendário Cálice Sagrado, que todos almejam. Você chega até uma estalgem no meio da estrada e, como já é de noite, resolve dormir por lá.";
let string2 = "Depois de acertar seu quarto com o dono, resolve ir até a lareira, onde várias pessoas estão cantando, dançando ou apenas apreciando uma boa bebida na mesa, você resolve sentar e apreciar a vista...";

// Código Principal
Escrever(string1,msg1);
Escrever(string2,msg2);
 



















// Funções
// 1. Função de digitação
function Escrever(string,msg) {
  var i = 0; 
    
function Caracteres() {
  if (i < string.length) {
    msg.innerHTML += string.charAt(i);
    i++;
    setTimeout(Caracteres, 10);
  } 
  }
  Caracteres();
}

