/* Verificador de Números Pares e Ímpares: Crie um programa que solicite 
um número ao usuário e determine se é par ou ímpar. 

var n1;
n1 = parseInt(prompt("Informe um numero: "));

if (n1 % 2 == 0) {
    alert("Numero par");
}
else {
    alert("Numero impar");
}
*/


/* Comparador de Números: Crie um programa que peça dois números ao 
usuário e determine qual é o maior e qual é o menor. 

var numero1 = parseFloat(prompt("Digite o primeiro número: "));
var numero2 = parseFloat(prompt("Digite o segundo número: "));

if (numero1 > numero2) {
    alert(numero1 + " é o maior número e " + numero2 + " é o menor número.");
} else if (numero2 > numero1) {
    alert(numero2 + " é o maior número e " + numero1 + " é o menor número.");
} else {
    alert("Os números são iguais.");
}
*/


/* Verificador de Maioridade: Escreva um programa que pergunte a idade 
do usuário e diga se ele é maior de idade ou não. 

var idade  = parseInt(prompt("Informe sua idade: "));
if (idade >= 18) {
    alert("Você é maior de idade");
}
else {
    alert("Você é menor de idade");
}
*/


/* Verificador de Número Primo Simples: Crie um programa que pergunte
 ao usuário por um número e determine se é primo ou não. 

 var ehPrimo = true;

 if (numero <= 1) {
     ehPrimo = false;
 } else {
     for (var i = 2; i <= Math.sqrt(numero); i++) {
         if (numero % i === 0) {
             ehPrimo = false;
             break;
         }
     }
 }
 if (ehPrimo) {
    alert(numero + " é um número primo.");
} else {
    alert(numero + " não é um número primo.");
}
*/


/* Comparador de Idades: Crie um programa que peça duas idades ao usuário 
e determine se são iguais ou diferentes. 

var n1 = parseInt(prompt("Informe a primeira idade: "));
var n2 = parseInt(prompt("Informe a segunda idade: "));

if (n1 == n2) {
    alert("Idades iguais");
}
else {
    alert("Idades diferentes");
}
*/


/* Calculadora de Bônus de Desempenho: Escreva um programa que calcule o bônus 
de desempenho de um funcionário com base em sua avaliação de desempenho. 
Se a avaliação for "excelente", o bônus será de 20% do salário; se for "bom", o 
bônus será de 15%; se for "regular", o bônus será de 10%; e se for "ruim", 
não haverá bônus. 

var desempenho = prompt("Informe sua avaliação de desempenho (excelente, bom, regular ou ruim): ");
var salario = parseFloat(prompt("Informe o valor do salário do funcionário: "));
var bonus = 0;

if (desempenho === "excelente") {
    bonus = salario * 0.20; // 20% do salário
    alert("Bônus de 20% no salário: R$" + bonus.toFixed(2));
} else if (desempenho === "bom") {
    bonus = salario * 0.15; // 15% do salário
    alert("Bônus de 15% no salário: R$" + bonus.toFixed(2));
} else if (desempenho === "regular") {
    bonus = salario * 0.10; // 10% do salário
    alert("Bônus de 10% no salário: R$" + bonus.toFixed(2));
} else if (desempenho === "ruim") {
    alert("Não há bônus devido a avaliação ruim.");
} else {
    alert("Avaliação inválida. Por favor, insira uma avaliação válida.");
}
*/


/* Classificador de Números: Desenvolva um programa que classifique um número 
fornecido pelo usuário como positivo, negativo ou zero. 

var numero = parseFloat(prompt("Informe um número: "));

if(numero > 0) {
    alert("Número positivo");
} else if(numero < 0) {
    alert("Número negativo");
} else {
    alert("Número igual a 0");
}
*/


/* Calculadora de Desconto por Faixa Etária: Crie um programa que calcule o
 desconto em um ingresso de cinema com base na faixa etária do cliente. 
 Se a idade for menor que 12 anos ou maior que 65 anos, o desconto será de 50%; 
 caso contrário, não haverá desconto. 

 var idade = parseInt(prompt("Informe sua idade: "));
 var precoIngresso = 20; // Suponha que o preço do ingresso seja R$20.00
 
 if (idade < 12 || idade > 65) {
     var desconto = precoIngresso * 0.5; // Desconto de 50%
     var precoComDesconto = precoIngresso - desconto;
     alert("Você tem direito a um desconto de 50%! O preço do ingresso será: R$" + precoComDesconto.toFixed(2));
 } else {
     alert("Não há desconto. O preço do ingresso é: R$" + precoIngresso.toFixed(2));
 }
 */


/* Verificador de Triângulo Retângulo: Escreva um programa que solicite os 
comprimentos dos três lados de um triângulo e determine se é um triângulo 
retângulo (um triângulo onde um dos ângulos é reto). 

var ladoA = parseFloat(prompt("Informe o comprimento do lado A do triângulo: "));
var ladoB = parseFloat(prompt("Informe o comprimento do lado B do triângulo: "));
var ladoC = parseFloat(prompt("Informe o comprimento do lado C do triângulo: "));

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {

    var hipotenusaQuadrado = Math.max(ladoA, ladoB, ladoC) ** 2;

    var somaQuadradosOutrosLados = (ladoA ** 2) + (ladoB ** 2) + (ladoC ** 2) - hipotenusaQuadrado;

    if (hipotenusaQuadrado === somaQuadradosOutrosLados) {
        alert("É um triângulo retângulo.");
    } else {
        alert("Não é um triângulo retângulo.");
    }
} else {
    alert("Os comprimentos fornecidos não formam um triângulo.");
}
*/


/* Verificador de Triângulo Retângulo: Escreva um programa que solicite os 
comprimentos dos três lados de um triângulo e determine se é um triângulo 
retângulo (um triângulo onde um dos ângulos é reto). 

var ladoA = parseFloat(prompt("Informe o comprimento do lado A do triângulo: "));
var ladoB = parseFloat(prompt("Informe o comprimento do lado B do triângulo: "));
var ladoC = parseFloat(prompt("Informe o comprimento do lado C do triângulo: "));

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {

    var hipotenusaQuadrado = Math.max(ladoA, ladoB, ladoC) ** 2;

    var somaQuadradosOutrosLados = (ladoA ** 2) + (ladoB ** 2) + (ladoC ** 2) - hipotenusaQuadrado;

    if (hipotenusaQuadrado === somaQuadradosOutrosLados) {
        alert("É um triângulo retângulo.");
    } else {
        alert("Não é um triângulo retângulo.");
    }
} else {
    alert("Os comprimentos fornecidos não formam um triângulo.");
}
*/


/* Classificador de Mês: Desenvolva um programa que solicite um número 
correspondente a um mês (1 para janeiro, 2 para fevereiro, etc.) e determine 
quantos dias esse mês tem. Considere fevereiro como tendo 28 dias. 

var mes = parseInt(prompt("Informe um número de 1 a 12"));

if (mes == 1) {
    alert("Mês Janeiro = 31 dias.");
} else if (mes == 2) {
    alert("Mês Fevereiro = 28 dias.");
} else if (mes == 3) {
    alert("Mês Março = 31 dias.");
} else if (mes == 4) {
    alert("Mês Abril = 30 dias.");
} else if (mes == 5) {
    alert("Mês Maio = 31 dias.");
} else if (mes == 6) {
    alert("Mês Junho = 30 dias.");
} else if (mes == 7) {
    alert("Mês Julho = 31 dias.");
} else if (mes == 8) {
    alert("Mês Agosto = 31 dias.");
} else if (mes == 9) {
    alert("Mês Setembro = 30 dias.");
} else if (mes == 10) {
    alert("Mês Outubro = 31 dias.");
} else if (mes == 11) {
    alert("Mês Novembro = 30 dias.");
} else if (mes == 12) {
    alert("Mês Dezembro = 31 dias.");
} else {
    alert("Número de mês inválido. Por favor, informe um número de 1 a 12.");
}
*/


/* Calculadora de Desconto por Quantidade Comprada: Crie um programa que calcule 
o desconto em uma compra com base na quantidade comprada. Se o cliente comprar 
mais de 10 unidades do produto, ele receberá um desconto de 10%.    

var produto = parseInt(prompt("Informe a quantidade de unidades de produtos que você está adquirindo: "));

if (produto > 10) { // Verifica se o cliente comprou mais de 10 unidades
    alert("Você recebeu um desconto de 10%. O valor do desconto é: R$" + valorDesconto.toFixed(2));
} else {
    alert("Você não recebeu desconto.");
}
*/


/* 1.1 - Crie um sistema que pergunte ao seu usuário se ele está com fome, se tem dinheiro e se o restaurante está aberto.

1.2 - Se estiver sem fome ou sem dinheiro exiba no console: "Hoje a janta será em casa"

1.3 - Se estiver com fome e tiver dinheiro mas o restaurante estiver fechado exiba no console: "Peça um delivery!"

1.4 - Se estiver com fome, tiver dinheiro e o restaurante estiver aberto exiba no console: "Hoje o jantar será no seu restaurante preferido!" 


let fome = prompt('Olá, Você está com fome?');
let money = prompt('Você tem dinheiro?');
let restaurante = prompt('O restaurante está aberto?');

console.log("fome:", fome);
console.log("money:", money);
console.log("restaurante:", restaurante);

if (fome === "nao" || money === "nao") {
    alert("Hoje a janta será em casa.");
} else if (fome === "sim" && money === "sim" && restaurante === "nao") {
    alert("Peça um delivery!");
} else if (fome === "sim" && money === "sim" && restaurante === "sim") {
    alert("Hoje o jantar será no seu restaurante preferido!");
}
*/

/* Hoje*/
/* Escreva um programa que verifica se um número é positivo, negativo ou zero. 


let numero = Number(prompt('Informe um numero: '))

if(numero > 0){
    alert("O numero inserido foi " + numero + " e ele é maior que 0")
}
else if(numero < 0){
    alert("O numero inserido foi " + numero + " e ele é menor que zero")
}
else {
    alert("O numero inserido foi o 0")
}
*/


/* Faça um programa que verifica se uma pessoa pode votar com base na sua idade. 

let idade = Number(prompt("Informe sua idade: "))

if(idade >= 18){
    alert("Esta autorizado a votar")
}
else{
    alert("Não esta autorizado a votar ")
}
*/



