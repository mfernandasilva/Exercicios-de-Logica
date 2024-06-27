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


