/* Escreva um programa que calcula e imprime a média de uma lista de números fornecida pelo usuário. */

let listaNumeros = prompt("Digite uma lista de números separados por vírgula: ");

let numeros = listaNumeros.split(",").map(Number);
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

let media = soma / numeros.length;

console.log("A média dos números é:", media);

