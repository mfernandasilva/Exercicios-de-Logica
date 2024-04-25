/* Escreva um programa que some dois números fornecidos pelo usuário e exiba o resultado. 

let n1 = Number(prompt("Informe um numero: "))
let n2 = Number(prompt("Informe outro numero: "))

let soma = n1 + n2;

alert("A soma dos dois numeros fornecidos é igual a: " + soma);
*/


/* Escreva um programa que peça ao usuário seu nome e exiba uma mensagem de saudação. 

let nome = prompt("Qual o seu nome: ")

alert("Olá, " + nome + " seja Bem-Vindo(a). Estamos contentes em ter você aqui.")
*/


/* Escreva um programa que peça ao usuário dois números e exiba o maior número. 

let n1 = Number(prompt("informe um numero: "))
let n2 = Number(prompt("informe outro numero: "))

if(n1 > n2){
    alert("O ,aior numero informado foi: " + n1)
}
else {
    alert("O ,aior numero informado foi: " + n2)
}
*/


/* Crie um programa que converta graus Celsius para Fahrenheit. 

const celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));

const fahrenheit = celsius * 9 / 5 + 32;

console.log(`${celsius} graus Celsius é igual a ${fahrenheit.toFixed(2)} graus Fahrenheit.`);
*/


/* Escreva um programa que verifique se um número fornecido pelo usuário é par ou ímpar.

let n1 = Number(prompt("Informe um numero: "))

if(n1 % 2 == 0){
    alert("O numero fornecido é par")
}
else{
    alert("O numero fornecido é impar")
}
*/


/* Escreva um programa que calcule a área de um círculo dado seu raio. 

let raio = Number(prompt("Insira o raio do círculo:"));

let areaDoCirculo = Math.PI * Math.pow(raio, 2);

alert("A área do círculo é igual a: " + areaDoCirculo.toFixed(2));

*/


/* Escreva um programa que imprima os números de 1 a 10. 

for(let i = 1; i <= 10; i++){
    console.log(i)
}
*/


/* Crie um programa que some todos os números de 1 a 100. 

for(let i = 1; i <= 10; i++){
    console.log(i)
}
 */


/* Escreva um programa que imprima os números de 10 a 1. 

for(let i = 10; i >= 1; i--){
    console.log(i)
}
 */


/* Crie um programa que exiba a tabuada de um número fornecido pelo usuário. 

let tabuada = Number(prompt("Insira a tabuada que voce deseja "))

for(let contador = 0; contador <= 20; contador ++){
    console.log( contador*tabuada)
}
*/


/* Escreva um programa que peça ao usuário dois números e exiba todos os números entre eles. 

let n1 = Number(prompt("Insira um número: "));
let n2 = Number(prompt("Insira outro número: "));

console.log(`Os números entre ${n1} e ${n2} são:`);
if (n1 < n2) {
    for (let i = n1; i <= n2; i++) {
        console.log(i);
    }
} else {
    for (let i = n1; i >= n2; i--) {
        console.log(i);
    }
}
*/


/* Escreva um programa que solicite ao usuário uma idade e classifique-a em: "Criança" (0-12), "Adolescente" (13-17), "Adulto" (18-64) ou "Idoso" (65+). 

let idade = Number(prompt("Informe sua Idade: "))

if(idade <= 12){
    console.log("Você é uma criança")
}
else if(idade > 13 && idade <= 17){
    console.log("Você é Adolescente")
}
else if(idade >= 18 && idade <= 64){
    console.log("Você é Adulto")
}
else {
    console.log("Você é Idoso")
}
*/


