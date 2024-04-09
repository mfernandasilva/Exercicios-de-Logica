/* 1.1 - Crie um sistema que pergunte ao seu usuário se ele está com fome, se tem dinheiro e se o restaurante está aberto.

1.2 - Se estiver sem fome ou sem dinheiro exiba no console: "Hoje a janta será em casa"

1.3 - Se estiver com fome e tiver dinheiro mas o restaurante estiver fechado exiba no console: "Peça um delivery!"

1.4 - Se estiver com fome, tiver dinheiro e o restaurante estiver aberto exiba no console: "Hoje o jantar será no seu restaurante preferido!" */


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
