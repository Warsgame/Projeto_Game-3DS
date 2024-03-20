// Variáveis Adicionais
let msg=document.getElementById("msg");


// Funções
// 1. Função de digitação
function Escrever(string) {
    var i = 0; 
    
    function Caracteres() {
      if (i < string.length) {
        msg.innerHTML += string.charAt(i);
        i++;
        setTimeout(Caracteres, 100);
      }
    }
  
    Caracteres();
  }
