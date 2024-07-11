/* 
/* Escreva um programa que leia três notas de um aluno e calcule a média. 

var n1 = parseFloat(prompt('Informe a sua primeira nota: '));
var n2 = parseFloat(prompt('Informe a sua segunda nota: '));
var n3 = parseFloat(prompt('Informe a sua terceira nota: '));

var media = (n1 + n2 + n3) / 3;

alert('A média das suas notas é: ' + media.toFixed(2));
*/


/* /* Converta uma temperatura de graus Celsius para Fahrenheit. 

var C = parseFloat(prompt("Informe a temperatura em graus Celsius: "));
var F = (9 / 5) * C + 32;

console.log('A temperatura em Fahrenheit é: ' + F.toFixed(2));
*/


/* Leia a largura e a altura de um retângulo e calcule sua área. 

var largura = parseInt(prompt("Informe a largura do retangulo: "))
var altura = parseInt(prompt("Informe a altura do retangulo: "))
var area = largura * altura

console.log(area)
*/


/* Escreva um programa que leia um número inteiro e diga se ele é par ou ímpar. 

var n1 = parseInt(prompt("Informe um numero inteiro: "))

if(n1 % 2 == 0){
    console.log('seu numero é par')
}
else{
    console.log('seu numero é impar')
}
*/


/* Leia três números e determine qual é o maior. *

var n1 = parseFloat(prompt("Informe um número: "));
var n2 = parseFloat(prompt("Informe um número: "));
var n3 = parseFloat(prompt("Informe um número: "));

if (n1 >= n2 && n1 >= n3) {
    console.log("O maior número é " + n1);
} else if (n2 >= n1 && n2 >= n3) {
    console.log("O maior número é " + n2);
} else {
    console.log("O maior número é " + n3);
}
*/


/* Leia a idade de uma pessoa e classifique-a em uma das seguintes categorias:

Criança (0-12 anos)
Adolescente (13-17 anos)
Adulto (18-59 anos)
Idoso (60+ anos) 

var idade = parseInt(prompt("Informe sua idade: "))

if(idade <= 12){
    console.log('Você é uma criança')
}
else if(idade >= 13 && idade <= 17){
    console.log('Você é um adolescente')
}
else if(idade >= 18 && idade <= 59){
    console.log("Você é um adulto")
}
else{
    console.log("Você é um Idoso")
}
*/


/* 
let tabuada = Number(prompt("Informe a tabuada que deseja: "))

for(let i = 0; i <= 10; i++){
    console.log(tabuada + " x " + i  + " = " + tabuada)
}

*/


/* 1 - Faça um algoritmo que receba um valor, inteiro e positivo, 
e usando a estrutura FOR, mostre no console uma contagem de 0 
até o número recebido. 

let numero = Number(prompt("Informe um numero inteiro e positivo: "))

for(let i = 0; i <= numero; i++){
    console.log(i)
}

*/


/* 2 - Desenvolva um algoritmo que usando a estrutura FOR mostre no console 
uma contagem de 0 a 50, porém, essa contagem tem que ser feita de 5 em 5.
   Ex.: 0 5 10 15 20 25 … 45 50 Fim! 

   for(let i = 0; i <= 50; i+= 5){
    console.log(i)
}
*/


/* 3 - Agora faça com que o algoritmo do exercício anterior exiba a mesma 
contagem mas na ordem inversa.
   Ex.: 50 45 40 35 30 25 … 5 0 Fim! 
   
   for(let i = 50; i >= 0; i-= 5){
    console.log(i)
}

*/



