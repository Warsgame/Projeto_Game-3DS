// Variáveis Adicionais
let msg=document.getElementById("msg1");


// Variáveis com a história
let string1 = `Em uma simples estalagem, no meio do nada, mora um velho apostador. Todos que passam por lá devem ouvir sua poesia, ao final dela, devem girar um dado de 100 lados. Se cair maior do que 50, a pessoa ganha um desejo, se perder... Nunca mais volta.`
let string2 = `Ouvindo essa história, um(a) jovem aventureiro(a), chamadado(a) ${nome}, decide enfrentar o velho, com o desejo e adquirir o poder de ${poder}. Quando chega à taverna o velho lhe pede para sentar-se a frente dele. O(a) jovem se senta e o velho começa a contar:`
let string3 = `"No jovem, um espírito determinado brilha no ar, Anseia pelo poder, sem se cansar, Àquele que concede, vai enfrentar, Ao lançar os dados, a sorte irá falar.", depois entrega o dado. Ele(a) pega os dados e o lança... `
let string4 = ``

// Código Principal

 



















// Funções
// 1. Função de digitação
function Escrever(string) {
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

