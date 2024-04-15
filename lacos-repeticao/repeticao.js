/* let tabuada = Number(prompt("Insira a tabuada que voce deseja "))

for(let contador = 0; contador <= 20; contador ++){
    console.log(tabuada + " + " + contador + " = " + contador*tabuada)
}
*/


/* 1 - Faça um algoritmo que receba um valor, inteiro e positivo, e usando a estrutura FOR, mostre no console uma contagem de 0 até o número recebido. 

let numero = Number(prompt("Informe um numero inteiro e positivo "))

for(let i = 0; i <= numero; i ++){
    console.log(i)
}
*/


/* 2 - Desenvolva um algoritmo que usando a estrutura FOR mostre no console uma contagem de 0 a 50, porém, essa contagem tem que ser feita de 5 em 5.
   Ex.: 0 5 10 15 20 25 … 45 50 Fim! 

   for(let i = 0; i <= 50; i +=5){
    console.log(i)
}
*/


/* 3 - Agora faça com que o algoritmo do exercício anterior exiba a mesma contagem mas na ordem inversa.
   Ex.: 50 45 40 35 30 25 … 5 0 Fim! 

   
   for(let i = 50; i >= 0; i -=5){
    console.log(i)
   }
   */


/* Escreva um programa que imprime os números de 1 a 10. 

for (let i = 1; i <= 10; i++) {
    console.log(i);
 }
*/ 


/* Faça um programa que imprime os números pares de 1 a 20. 

for (let i = 1; i <= 20; i++) {
    console.log(i);
 }
*/


/* Crie um programa que calcule a soma dos números de 1 a 100. 

let soma = 0;

for (let i = 1; i <= 100; i++) {
    soma += i;
}

console.log("A soma dos números de 1 a 100 é:", soma);
*/


/* Faça um programa que imprime os números de 10 a 1 em ordem decrescente. 

for (let i = 10; i >= 1; i--){
    console.log(i)
 }
 */


 /* Escreva um programa que calcula e imprime o fatorial de um número fornecido pelo usuário. 

let numero = Number(prompt("Digite um número para calcular seu fatorial: "));

let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log("O fatorial de", numero, "é:", fatorial);
*/


/* Faça um programa que imprime os termos de uma sequência de Fibonacci até o décimo termo. 

let primeiroTermo = 0;
let segundoTermo = 1;
let proximoTermo;

console.log("Os termos da sequência de Fibonacci até o décimo termo são:");

console.log(primeiroTermo); 

for (let i = 1; i < 10; i++) {
    console.log(segundoTermo);

    proximoTermo = primeiroTermo + segundoTermo;
    primeiroTermo = segundoTermo;
    segundoTermo = proximoTermo;
}
*/


/* Crie um programa que solicita ao usuário um número e imprime todos os seus divisores. 

let numero = Number(prompt("Digite um número para encontrar seus divisores: "));

console.log("Os divisores de", numero, "são:");

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        console.log(i); 
    }
}
*/


/* Escreva um programa que calcula e imprime a média de uma lista de números fornecida pelo usuário. 

let listaNumeros = prompt("Digite uma lista de números separados por vírgula: ");

let numeros = listaNumeros.split(",").map(Number);
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

let media = soma / numeros.length;

console.log("A média dos números é:", media);
*/


