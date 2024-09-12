/* 1 - Conhecendo seu usuário
Escreva um algoritmo onde seu usuário deve informar nome, idade, peso, altura e profissão,
a partir disso você deve exibir um texto com todas essas informações. Ex: Usuário 
inseriu nome: Giovanni, idade: 21, peso: 74kg, profissão: Programador, altura: 1.83, 
Você exibe: Olá Giovanni,você tem 21 anos, é programador, tem 1.83M de altura e pesa 74kg.
Verifique se o usuário é maior ou menor de idade, se ele for maior exiba na tela “Está 
liberado para tomar umas geladas”, se ele for menor exiba “Sem gelada para você”.
Utilize a idade informada pelo usuário, e mostre sua idade em meses, semanas e dias. 
Considere ano com 365 dias, mês com 30 dias e semana com 7 dias.  */

function conhecendoUsuario () {
    // Coletando os dados do usuário
    const nome = prompt("Informe seu nome: ");
    const idade = Number(prompt("Informe sua idade: "));
    const peso = Number(prompt("Informe seu peso (kg): "));
    const altura = Number(prompt("Informe sua altura (m): "));
    const profissao = prompt("Informe sua profissão: ");

    // Exibindo as informações do usuário
    console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}m de altura e pesa ${peso}kg.`);

    // Verificando se o usuário é maior ou menor de idade
    if(idade >= 18){
        console.log("Está liberado para tomar umas geladas");
    } else {
        console.log("Sem gelada para você");
    }

    // Calculando a idade em meses, semanas e dias
    const idadeEmMeses = idade * 12;
    const idadeEmSemanas = Math.floor(idade * 365 / 7); // Considerando um ano com 365 dias
    const idadeEmDias = idade * 365; // Considerando um ano com 365 dias

    // Exibindo a idade em meses, semanas e dias
    console.log(`Você tem ${idadeEmMeses} meses, aproximadamente ${idadeEmSemanas} semanas e ${idadeEmDias} dias de vida.`);
}

// Chamando a função
conhecendoUsuario();

