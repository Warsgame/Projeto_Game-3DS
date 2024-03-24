// Variáveis Essênciais
let msg = document.getElementById("msg")
let msg2 = document.getElementById("msg2")
let btn = document.getElementById("button")
let nome = prompt("Qual o NOME do(a) jovem?").toUpperCase()
let poder = prompt("Qual o PODER que ele(a) deseja?").toUpperCase()

// Variáveis com a história
let string1 = `Em uma simples estalagem, no meio do nada, mora um velho apostador. Todos que passam por lá devem ouvir sua poesia, ao final dela, devem girar um dado de 100 lados. Se cair maior do que 50, a pessoa ganha um desejo, se perder... Nunca mais volta.`
let string2 = `Ouvindo essa história, um(a) jovem aventureiro(a), chamadado(a) ${nome}, decide enfrentar o velho, com o desejo e adquirir o poder de ${poder}. Quando chega à taverna o velho lhe pede para sentar-se a frente dele. O(a) jovem se senta e o velho começa a contar:`
let string3 = `"No jovem, um espírito determinado brilha no ar, Anseia pelo poder, sem se cansar, Àquele que concede, vai enfrentar, Ao lançar os dados, a sorte irá falar.", depois entrega o dado. Ele(a) pega os dados e o lança e ... `

let STRING = `${string1} ${string2} ${string3}`

// Código Principal
Escrever(STRING,msg)

// função de sortear o dado
function Sortear(){
  let numDado = Math.floor(Math.random()*100);
  let string4 = `Caiu ${numDado}! O velho levanta revelando uma forma mosntruoso de cobra com um sorriso cheios de dentes afiados com expressão malígna... nunca mais se teve notícias de ${nome}, na sua cidade natal, apenas aparece um cartaz de procurado em meios aos outros milhares que tentaram a sorte nos dados.`
  let string5 = `Caiu ${numDado}! O velho da um sorriso e fala: "A sorte parece estar contigo, toma este frasco que um grande poder te aguarda". O(a) jovem pega o frasco e bebe, após isso, sente seu corpo formigar de mil e uma maneiras. Quando essa sensação passa o velho fala: "Aogra pode ${poder}, se divirta", o(a) jovem olha para trás para agradecê-lo, mas a taverna não mais estava lá.` 

  if(numDado>=50)
  {
    btn.disabled = true;
    Escrever(string5,msg2)
  }
  else
  {
    btn.disabled = true;
    Escrever(string4,msg2)
  }
}

// Função de digitação
function Escrever(string,msg) {
var i = 0; 
    
function Caracteres() {
  if (i < string.length) {
    msg.innerHTML += string.charAt(i);
    i++;
    setTimeout(Caracteres, 60);
  }
  }
  Caracteres();

}

