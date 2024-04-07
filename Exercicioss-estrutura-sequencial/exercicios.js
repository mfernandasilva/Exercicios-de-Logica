/* Calculadora de Média de Notas: Escreva um programa que calcule a 
média de três notas fornecidas pelo usuário e exiba o resultado. 

var n1;
var n2;
var n3;
var media;

n1 = parseInt(prompt("Digite sua nota: "));
n2 = parseInt(prompt("Digite sua nota: "));
n3 = parseInt(prompt("Digite sua nota: "));
media = (n1 + n2 + n3) / 3; 
alert("A media obtida foi de: " + media);

*/



/* Conversor de Moeda: Escreva um programa que converta um valor em reais 
para dólares, considerando uma taxa de câmbio fixa. Peça ao usuário para 
fornecer o valor em reais. 

var taxaDeCambio = 0.20; // Taxa de câmbio fixa
var valorEmReais = parseFloat(prompt("Digite o valor em reais: "));
var valorEmDolares = valorEmReais * taxaDeCambio;

alert("O valor em dólares é: $" + valorEmDolares.toFixed(2));

*/



/* Calculadora de Idade em Dias: Desenvolva um programa que solicite a 
idade de uma pessoa em anos e converta para dias. 

var ano = 365;
var resultado;
var Idade;
Idade = parseInt(prompt("Informe quantos anos você tem?"));
resultado = (Idade * ano);

alert("Sua idade em dias é de: " + resultado);

*/




/* Calculadora de IMC Simples: Escreva um programa que peça o peso 
e a altura do usuário e calcule o Índice de Massa Corporal (IMC). 

var peso = parseFloat(prompt("Informe seu peso (em kg): "));
var altura = parseFloat(prompt("Informe sua altura (em metros): "));
var resultado;

resultado = peso / (altura * altura); // Correção: Calcular o IMC corretamente
alert("Seu Índice de Massa Corporal (IMC) é de: " + resultado.toFixed(2));

*/



/* Cálculo de Área do Retângulo: Escreva um programa que calcule a área
 de um retângulo, solicitando a base e a altura ao usuário. 
 
 var area;
 var base = parseFloat(prompt("Informe a base do retângulo: "));
 var altura = parseFloat(prompt("Informe a altura do retângulo: "));
 area = base * altura;
 
 alert("A área do retângulo é " + area + " unidades quadradas.");

 */



 /* Conversor de Temperatura: Desenvolva um programa que converta uma 
temperatura de Celsius para Fahrenheit. Peça ao usuário para fornecer
a temperatura em Celsius. 

var tempC = parseFloat(prompt("Informe a temperatura em graus Celsius: "));
var tempF;
tempF = (tempC * 1.8) + 32;
alert("A Temperatura em Fahrenheit é de: " + tempF);

*/



/* Cálculo de Salário Mensal: Escreva um programa que calcule o salário 
mensal de um funcionário, considerando o número de horas trabalhadas 
e o valor da hora. 

var valorHora = 5.00;
var horaTrabalhada = parseFloat(prompt("Quantas horas você trabalhou este mês:"));
var salario;

salario = valorHora * horaTrabalhada;
alert("Seu salário é: " + salario);

*/




/* Conversor de Medidas: Crie um programa que converta uma medida em 
metros para centímetros. Solicite a medida em metros ao usuário. 

var metros = parseFloat(prompt("Informe o valor da media em metros: "));
var centimetros;

centimetros = metros * 100;
alert("A media em centimetros é: " + centimetros);

*/




/* Cálculo de Volume de uma Esfera: Desenvolva um programa que calcule 
o volume de uma esfera, solicitando o raio ao usuário. 

var raio = parseFloat(prompt("Informe o valor do raio: "));
var volume;
var pi = Math.PI; 

volume = (4 * pi * Math.pow(raio, 3)) / 3; 
alert("O valor do volume da esfera é de: " + volume.toFixed(2)); 

*/



/* Calculadora de Combustível: Escreva um programa que calcule o valor a 
ser pago por litros de combustível abastecidos, considerando o preço por 
litro e a quantidade abastecida.

var precoPorLitro = 4.88; 
var quantidadeAbastecida = parseFloat(prompt("Informe quantos litros você abasteceu: "));
var total;

total = quantidadeAbastecida * precoPorLitro; 
alert("O valor total a pagar é de: " + total.toFixed(2));

*/




/* Cálculo de Média Ponderada: Desenvolva um programa que calcule a média 
ponderada de três notas, considerando seus pesos. Peça as notas 
e os pesos ao usuário. 

var nota1 = parseFloat(prompt("Informe a primeira nota: "));
var peso1 = parseFloat(prompt("Informe o peso da primeira nota: "));

var nota2 = parseFloat(prompt("Informe a segunda nota: "));
var peso2 = parseFloat(prompt("Informe o peso da segunda nota: "));

var nota3 = parseFloat(prompt("Informe a terceira nota: "));
var peso3 = parseFloat(prompt("Informe o peso da terceira nota: "));

var media;

media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);
alert("A sua média ponderada foi de: " + media.toFixed(2));

*/



/* Conversor de Moeda: Crie um programa que converta um valor em dólares
 para reais, considerando uma taxa de câmbio fixa. Peça ao usuário para 
 fornecer o valor em dólares. 

 var dolares = parseFloat(prompt("Informe o valor em dólares: "));
var reais;
var cambioFixo = 5.25;

reais = dolares * cambioFixo;
alert("O valor em reais é de: R$ " + reais.toFixed(2)); // Adicionado "R$" para indicar a moeda e arredondado o resultado para duas casas decimais

*/




/* Calculadora de IMC: Escreva um programa que calcule o Índice de Massa 
Corporal (IMC), solicitando o peso e a altura ao usuário. 

var altura = parseFloat(prompt("Informe sua altura:"));
var peso = parseFloat(prompt("Informe seu peso:"));
var IMC;

IMC = peso / (altura * altura);
alert("O valor do seu indice corporal é de: " + IMC);

*/




/* Calculadora de Desconto: Escreva um programa que calcule o valor 
final de um produto, considerando um desconto fixo. Peça o valor 
do produto ao usuário. 

var valorProduto = parseFloat(prompt("Informe o valor do produto: "));
var descontoFixo = 10; 

var valorComDesconto = valorProduto - (valorProduto * (descontoFixo / 100));

alert("O valor final do produto com desconto é de: R$" + valorComDesconto.toFixed(2));

*/



