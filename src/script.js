/* 1.1 - Crie um algoritmo que peça para o usuário escolher entre 3 opções em um posto de gasolina: abastecer com gasolina, com álcool ou calibrar os pneus.
1.2 - Se o usuário escolher abastecer com gasolina, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de gasolina = R$5) 
1.3 - Se o usuário escolher abastecer com álcool, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de álcool = R$3)
1.4 - Se o usuário escolher calibrar os pneus, exiba no console a mensagem: "pneus calibrados com sucesso". */

let valor
let quantidade
let escolha = parseInt(prompt("Bem-Vindo(a) ao Maria-thru, Você deseja: \n1. Abastecer com gasolina; \n2. Abastecer com álcool; \n3. Calibrar os pneus"))

switch (escolha) {
    case 1:
        valor = parseInt(prompt("Digite o valor desejado para abastecer"))
        quantidade = valor / 5 
        alert("Foram abastecidos" + quantidade + "L de gasolina")
        break;
    case 2:
        valor = parseInt(prompt("Digite o valor desejado para abastecer"))
        quantidade = valor / 3 
        alert("Foram abastecidos " + quantidade + "L de alcol")
        break;
    default:
        alert("Pneus calibrados com sucesso");
        break;
}
