var base = Number(prompt('base'))
let altura = Number(prompt("altura"))

let resultado = base * altura;
const cajarResultado = document.getElementById('resultado')


function calculo(){
    cajarResultado.innerHTML += `<h1>El area del objeto es : ${resultado} </h1>`
}



