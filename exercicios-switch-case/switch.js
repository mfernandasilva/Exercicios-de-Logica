/* 1.1 - Crie um algoritmo que peça 2 números ao usuário
1.2 - Utilizando o switchCase dê a opção do usuário escolher qual operação matemática será realizada com esses números
1.3 - Exiba no console a operação feita e o resultado da conta 


let n1 = parseInt(prompt("Informe um número: "));
let n2 = parseInt(prompt("Informe outro número: "));
let operacao = prompt("Escolha a operação matemática que você deseja realizar: \n1 = Soma; \n2 = Subtração; \n3 = Multiplicação; \n4 = Divisão");

switch (operacao) {
    case "1":
        alert(n1 + " + " + n2 + " = " + (n1 + n2));
        break;
    case "2":
        alert(n1 + " - " + n2 + " = " + (n1 - n2));
        break;
    case "3":
        alert(n1 + " * " + n2 + " = " + (n1 * n2));
        break;
    case "4":
        if (n2 !== 0) {
            alert(n1 + " / " + n2 + " = " + (n1 / n2));
        } else {
            alert("Não é possível dividir por zero.");
        }
        break;
    default:
        alert("Opção inválida.");
        break;  
}
*/


/* 1.1 - Crie um algoritmo que peça para o usuário escolher entre 3 opções em um posto de gasolina: abastecer com gasolina, com álcool ou calibrar os pneus.
1.2 - Se o usuário escolher abastecer com gasolina, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de gasolina = R$5) 
1.3 - Se o usuário escolher abastecer com álcool, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de álcool = R$3)
1.4 - Se o usuário escolher calibrar os pneus, exiba no console a mensagem: "pneus calibrados com sucesso". 

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
*/


