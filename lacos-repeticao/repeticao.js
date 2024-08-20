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


/* 4 - Faça um algoritmo utilizando a estrutura de repetição FOR que receba 
1 número e exiba na tela qual o resultado da sua tabuada e dos próximos 
2 números.
   Ex: Números de entrada:3
       Saída:  Número 3:      Número 4:         Número 5:       
               3 x 1 = 3      4 x 1 = 4         5 x 1 = 5
               3 x 2 = 6      4 x 2 = 8         5 x 2 = 10
               3 x 3 = 9      4 x 3 = 12        5 x 3 = 15          
               3 x 4 = 12     4 x 4 = 16        5 x 4 = 20         
                  ...            ...               ... 


                  let tabuada = Number(prompt("Qual a tabuada que você deseja: "))

                  for(let i = tabuada; i <= tabuada + 2; i++ ){
                     console.log("tabuada do número: " + i)
                     for(let j = 0; j<= 10; j++){
                        console.log(i + " X " + j + " = " + (i * j))
                     }
                  }
                  
*/                  


/* Imprima a tabuada do 5. 

for(let i = 0; i <= 10; i++){
    console.log("Veja a tabuada do número 5: " + i * 5)
 }
 */


 /* Calcule a soma dos números de 1 a 100. 

let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma = soma + i; 
}
console.log(soma); 
*/


/* Imprima os números pares de 1 a 20. 

for(let i = 1; i <= 20; i++){
    if(i % 2 == 0)
    console.log(i)
 }
 */


 /*
  // Imprime a sequência de Fibonacci até o décimo termo.
let termoAnterior = 0
let termoAtual = 1

console.log(termoAnterior)
console.log(termoAtual)

for (let i = 3; i <= 10; i++) { 
    let proximoTermo = termoAnterior + termoAtual
    console.log(proximoTermo)
    termoAnterior = termoAtual
    termoAtual = proximoTermo
}
*/


/* Imprima todos os números ímpares de 1 a 50. 

for(let i = 0; i <= 50; i++){
    if(i % 2 !== 0){
        console.log(i)
    }
}

*/


/* Solicite ao usuário um número inteiro positivo e imprima o quadrado 
de todos os números de 1 até o número fornecido. 

let numero = parseInt(prompt("Insira um numero inteiro e positivo: "))

for (let i = 1; i <= numero; i++) {
    console.log(i + " ao quadrado é " + (i * i));
}
*/


