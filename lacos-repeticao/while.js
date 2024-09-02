/* Escreva um programa que imprima os números de 1 a 10. 

let contador = 1;

while (contador <= 10) { 
    console.log(contador);
    contador++;
}
*/


/* Escreva um programa que solicite ao usuário um número e imprima todos os números de 1 até esse número. 
 
let numero = Number(prompt("Digite um número: "));
let contador = 1;

while (contador <= numero) {
    console.log(contador);
    contador++;
}
*/


/* Escreva um programa que imprima os números pares de 1 a 20. 

let contador = 1;

while (contador <= 20) {
    if (contador % 2 === 0) {
        console.log(contador);
    }
    contador++;
}
*/


/* Escreva um programa que solicite ao usuário uma senha e continue pedindo até que a senha correta seja fornecida (a senha correta é "senha123"). 

let senha = prompt("Digite a senha: ");

while (senha !== "senha123") {
    senha = prompt("Senha incorreta. Por favor, tente novamente: ");
}

console.log("Senha correta. Acesso concedido!");
*/


/* Crie um programa que utilize um loop while para somar todos os números de 1 a 100 e exiba o resultado final.

let soma = 0;
let numeroAtual = 1;  // Variável para rastrear o número atual

while (numeroAtual <= 100) {  // Loop de 1 a 100
    soma = soma + numeroAtual;  // Adiciona o número atual à soma
    numeroAtual++;  // Incrementa o número atual
}

console.log(soma);  // Exibe o resultado final
*/



// do while //

/*
let numero;

do {
    numero = Number(prompt("Digite um número positivo: "));
} while (numero <= 0);

console.log("Número positivo fornecido:", numero);
*/


/* let senhaCorreta = "senha123";
let senhaDigitada;

do {
    senhaDigitada = prompt("Digite a senha: ");
} while (senhaDigitada !== senhaCorreta);

console.log("Acesso concedido!");
*/


/* Escreva um programa que solicite ao usuário um número e imprima todos os números de 1 até esse número. */


/*let contador = 1;
let numero;
do {
    numero = parseInt(prompt("Digite um número: "));
} while (isNaN(numero) || numero <= 0);

while (contador <= numero) {
    alert(contador);
    contador++;
}
*/
 

/* Solicite o nome e o cpf do seu cliente. Pergunte um valor.
Ofereça a opção de saque ou depósito.
Caso a opção de saque seja a escolhida, remova o valor inserido do saldo total.
Caso a opção de depósito seja escolhida, adicione o valor inserido do saldo total.
Pergunte se o seu usuário deseja continuar. (Insira 1 para continuar e 2 para parar).
Exiba o saldo total.
Exiba o maior valor inserido(independente de ser depósito ou saque).
Exiba a média dos valores inseridos(independente de ser depósito ou saque).

REGRAS: 
    1- Considere iniciar a variável saldo com algum valor
    1- Não deve ser permitido sacar um valor não disponível no saldo.
    2- Não deve ser permitido sacar nem depositar um valor negativo. 

    let saldo = 1000;
    let maiorValorInserido = 0;
    let somaValoresInseridos = 0;
    let totalTransacoes = 0;
    let continuar = true;
    
    do {
        const nome = prompt("Digite seu nome:");
        const cpf = prompt("Digite seu CPF:");
        const valor = Number(prompt("Qual o valor da transação?"));
        const operacao = prompt("Qual operação você deseja fazer? (S para saque, D para depósito)").toUpperCase();
    
        if (valor < 0) {
            alert("Valor inválido. A transação não foi realizada.");
        } else if (operacao === "S" && valor > saldo) {
            alert("Saldo insuficiente. A transação não foi realizada.");
        } else if (operacao === "S") {
            saldo -= valor;
            totalTransacoes++;
            somaValoresInseridos += valor;
            alert(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`);
            
            if (valor > maiorValorInserido) {
                maiorValorInserido = valor;
            }
            
            alert("Transação realizada com sucesso. Seu saldo atual é R$" + saldo);
        } else if (operacao === "D") {
            saldo += valor;
            totalTransacoes++;
            somaValoresInseridos += valor;
           alert(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`);
            
            if (valor > maiorValorInserido) {
                maiorValorInserido = valor;
            }
         alert("Transação realizada com sucesso. Seu saldo atual é R$" + saldo);
        } else {
           alert("Operação inválida.");
        }
    
        const opcao = Number(prompt("Deseja continuar? (1 para continuar, 2 para parar)"));
        
        if (opcao === 1) {
            continuar = true;
        } else if (opcao === 2) {
            continuar = false;
        } else {
         alert("Opção inválida. Programa encerrado.");
            continuar = false;
        }
    } while (continuar);
    
    alert(`Saldo final: R$${saldo}`);
    alert(`Maior valor inserido: R$${maiorValorInserido}`);
    alert(`Média dos valores inseridos: R$${(somaValoresInseridos / totalTransacoes).toFixed(2)}`);
*/


/* Solicite o nome e o cpf do seu cliente. Pergunte um valor.
Ofereça a opção de saque ou depósito.
Caso a opção de saque seja a escolhida, remova o valor inserido do saldo total.
Caso a opção de depósito seja escolhida, adicione o valor inserido do saldo total.
Pergunte se o seu usuário deseja continuar. (Insira 1 para continuar e 2 para parar).
Exiba o saldo total.
Exiba o maior valor inserido(independente de ser depósito ou saque).
Exiba a média dos valores inseridos(independente de ser depósito ou saque).

REGRAS: 
    1- Considere iniciar a variável saldo com algum valor
    1- Não deve ser permitido sacar um valor não disponível no saldo.
    2- Não deve ser permitido sacar nem depositar um valor negativo. 

    let saldo = 1000;
    let maiorValorInserido = 0;
    let somaValoresInseridos = 0;
    let totalTransacoes = 0;
    let continuar = true;
    
    do {
        const nome = prompt("Digite seu nome:");
        const cpf = prompt("Digite seu CPF:");
        const valor = Number(prompt("Qual o valor da transação?"));
        const operacao = prompt("Qual operação você deseja fazer? (S para saque, D para depósito)").toUpperCase();
    
        if (valor < 0) {
            alert("Valor inválido. A transação não foi realizada.");
        } else if (operacao === "S" && valor > saldo) {
            alert("Saldo insuficiente. A transação não foi realizada.");
        } else if (operacao === "S") {
            saldo -= valor;
            totalTransacoes++;
            somaValoresInseridos += valor;
            alert(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`);
            
            if (valor > maiorValorInserido) {
                maiorValorInserido = valor;
            }
            
            alert("Transação realizada com sucesso. Seu saldo atual é R$" + saldo);
        } else if (operacao === "D") {
            saldo += valor;
            totalTransacoes++;
            somaValoresInseridos += valor;
           alert(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`);
            
            if (valor > maiorValorInserido) {
                maiorValorInserido = valor;
            }
         alert("Transação realizada com sucesso. Seu saldo atual é R$" + saldo);
        } else {
           alert("Operação inválida.");
        }
    
        const opcao = Number(prompt("Deseja continuar? (1 para continuar, 2 para parar)"));
        
        if (opcao === 1) {
            continuar = true;
        } else if (opcao === 2) {
            continuar = false;
        } else {
         alert("Opção inválida. Programa encerrado.");
            continuar = false;
        }
    } while (continuar);
    
    alert(`Saldo final: R$${saldo}`);
    alert(`Maior valor inserido: R$${maiorValorInserido}`);
    alert(`Média dos valores inseridos: R$${(somaValoresInseridos / totalTransacoes).toFixed(2)}`);
*/


/* Escreva um programa que utilize um loop do while para pedir ao usuário um 
número e verificar se ele é par ou ímpar. O programa deve continuar pedindo 
números até que o usuário insira "0 

let numero;

do {
    numero = Number(prompt("Insira um número: ")); // Solicita ao usuário um número

    if (numero === 0) {
        console.log("Programa encerrado.");
    } else if (numero % 2 === 0) {
        console.log("Número par");
    } else {
        console.log("Número ímpar");
    }
} while (numero !== 0);  // Continua até que o usuário insira '0'
*/


/* const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let chute;

do {
    chute = Number(prompt("Adivinhe o número entre 1 e 10: "));
} while (chute !== numeroAleatorio);

console.log("Parabéns! Você adivinhou o número.");
*/


/* 
let idade = 18
while(idade >= 18) {
     idade = Number(prompt("Insira sua idade: "))
     console.log(idade)
}
console.log("Acabou o while")
*/


