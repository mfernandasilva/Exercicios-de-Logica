/* Solicite ao usuário um número inteiro positivo e imprima o quadrado 
de todos os números de 1 até o número fornecido. */

let numero = parseInt(prompt("Insira um numero inteiro e positivo: "))

for (let i = 1; i <= numero; i++) {
    console.log(i + " ao quadrado é " + (i * i));
}

