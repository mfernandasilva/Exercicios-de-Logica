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


/* Faça um programa que recebe o nome de um mês e retorna a quantidade de dias que o mês possui. 

let mes = Number(prompt("Informe um numero referente ao mês que você deseja solicitar o contador de dias: "))

switch (mes) {
    case 1: 
    alert("Mês Janeiro = 31 dias.");
    break;
    case 2: 
    alert("Mês Fevereiro = 28 dias.");
    break;
    case 3: 
    alert("Mês Março = 31 dias.");
    break;
    case 4: 
    alert("Mês Abril = 30 dias.");
    break;
    case 5: 
    alert("Mês Maio = 31 dias.");
    break;
    case 6: 
    alert("Mês Junho = 30 dias.");
    break;
    case 7: 
    alert("Mês Julho = 31 dias.");
    break;
    case 8: 
    alert("Mês Agosto = 31 dias.");
    break;
    case 9: 
    alert("Mês Setembro = 30 dias.");
    break;
    case 10: 
    alert("Mês Outubro = 31 dias.");
    break;
    case 11: 
    alert("Mês Novembro = 30 dias.");
    break;
    case 12: 
    alert("Mês Dezembro = 31 dias.");
    break;
}
*/


/* Escreva um programa que recebe um número de 1 a 7 e retorna o dia da semana correspondente. 

let dia = Number(prompt("Informe um numero de 1 a 7"))

switch (dia) {
    case 1: 
    alert("Segunda Feira")
    break;
    case 2: 
    alert("Terça Feira")
    break;
    case 3: 
    alert("Quarta Feira")
    break;
    case 4: 
    alert("Quinta Feira")
    break;
    case 5: 
    alert("Sexta Feira")
    break;
    case 6: 
    alert("Sabado")
    break;
    case 7: 
    alert("Domingo")
    break;
}
*/


/*Faça um programa que recebe uma letra (vogal ou consoante) e determina se é vogal ou consoante. 

let letra = prompt("Informe uma letra ").toLowerCase();

switch(letra) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        alert("A letra informada é uma Vogal");
        break;
    default:
        alert("A letra informada é uma Consoante");
}
*/


/* Crie um programa que recebe o nome de um mês e retorna a estação do ano correspondente (verão, outono, inverno ou primavera). 

let mes = prompt("Informe um mês ");

switch(mes) {
    case 'Dezembro':
    case 'Janeiro':
    case 'Fevereiro':
    case 'Março':
        alert("Verão");
        break;
    case 'Abril':
    case 'Maio':
    case 'Junho':
        alert("Outono");
        break;
    case 'Julho':
    case 'Agosto':
    case 'Setembro':
        alert("Inverno");
        break;
    case 'Outubro':
    case 'Novembro':
        alert("Primavera");
        break;
    default:
        alert("Informe um mês válido");
    }
*/


