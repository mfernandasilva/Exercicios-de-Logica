/*  Aula sobre funções 
function somar(n1, n2){
     console.log(n1)
     console.log(n2)
     console.log("Estou na função somar")
}

somar(25, 80);
*/


/* // 1. Array para armazenar os dados dos usuários
let usuarios = [];

// 2. Função para cadastrar um novo usuário
function cadastrarUsuario() {
    let nome = prompt("Digite seu nome: "); // Solicita o nome do usuário
    let endereco = prompt("Digite seu endereço: "); // Solicita o endereço do usuário
    let telefone = prompt("Digite seu telefone: "); // Solicita o telefone do usuário

    // 3. Criação de um objeto usuário com os dados fornecidos
    let usuario = {
        nome: nome,
        endereco: endereco,
        telefone: telefone
    };

    // 4. Adiciona o novo usuário ao array de usuários
    usuarios.push(usuario);

    console.log("Usuário cadastrado com sucesso!");
}

// 5. Função principal para o sistema de cadastro
function sistemaCadastro() {
    let continuar = true;

    do {
        cadastrarUsuario(); // Chama a função para cadastrar um usuário

        // Pergunta se o usuário deseja cadastrar outro usuário
        let resposta = prompt("Deseja cadastrar outro usuário? (sim/não): ");
        if (resposta.toLowerCase() !== 'sim') {
            continuar = false; // Define continuar como false para sair do loop
        }
    } while (continuar);

    // 6. Exibe todos os usuários cadastrados ao final
    console.log("Usuários cadastrados:");
    console.log(usuarios);
}

// 7. Executa o sistema de cadastro
sistemaCadastro();
 */


/* // Exercício 1: Soma de dois números 

function Soma (n1, n2 , soma){

    n1 = Number(prompt("Informe um número: "))
    n2 = Number(prompt("Informe outro número: "))
    soma = n1 + n2

    console.log("O valor da somA é ", soma)
}
Soma();
*/


/* // Exercício 2: Verificação de número par

function Verificação (n1){
    n1 = Number(prompt("Informe um número: "))

    if(n1 % 2 == 0){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
Verificação(); 
*/


/* // Exercício 3: Maior de dois números 

function Maior (n1, n2){

    n1 = Number(prompt("Informe um número: "))
    n2 = Number(prompt("Informe outro número: "))

    if(n1 > n2){
        console.log("O número maior é ", n1)
    }
    else{
        console.log("O numero maior é ", n2)
    }
}
Maior();
*/


/* // Exercício 4: Contagem de vogais

function contarVogais() {
    const vogais = 'aeiou';
    let contagem = 0;
    let n1 = prompt("Escreva uma palavra: ");
    
    // Verifica se n1 é uma string
    if (typeof n1 !== 'string') {
        console.error("Entrada inválida. Por favor, insira uma palavra.");
        return;
    }

    for (let i = 0; i < n1.length; i++) {
        // Corrige a forma de acessar os caracteres da string
        if (vogais.includes(n1[i].toLowerCase())) {
            contagem++;
        }
    }

    return contagem;
}

console.log(contarVogais());
*/


/* // Exercício 5: Reversão de string 

function reverterString() {
    let palavra = prompt("Insira uma palavra");
    let resultado = '';

    for (let i = palavra.length - 1; i >= 0; i--) {
        resultado += palavra[i];
    }

    return resultado;
}

console.log(reverterString());
*/


/* // Exercício 1: Função de multiplicação

function Multiplicar (n1 , n2, multi){
    n1 = Number(prompt("Insira um número: "));
    n2 = Number(prompt("Insira outro número: "));

    multi = n1 * n2 
    console.log("O resultado da multiplicação é " , multi)

}
Multiplicar();
*/


/* // Exercício 5: Conversão de Celsius para Fahrenheit

function converterCelsiusParaFahrenheit() {
    let C = Number(prompt("Insira a temperatura em Celsius: "));
    let F = C * 9/5 + 32;

    console.log(F);
}

converterCelsiusParaFahrenheit();

*/


/* //Exercício 2: Verificação de palíndromo

function ehPalindromo(palavra) {
    let palavraInvertida = '';
    
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i];
    }
    return palavra === palavraInvertida;
}

console.log(ehPalindromo); 
console.log(ehPalindromo); 
 */


/* 1 - Conhecendo seu usuário
Escreva um algoritmo onde seu usuário deve informar nome, idade, peso, altura e profissão,
a partir disso você deve exibir um texto com todas essas informações. Ex: Usuário 
inseriu nome: Giovanni, idade: 21, peso: 74kg, profissão: Programador, altura: 1.83, 
Você exibe: Olá Giovanni,você tem 21 anos, é programador, tem 1.83M de altura e pesa 74kg.
Verifique se o usuário é maior ou menor de idade, se ele for maior exiba na tela “Está 
liberado para tomar umas geladas”, se ele for menor exiba “Sem gelada para você”.
Utilize a idade informada pelo usuário, e mostre sua idade em meses, semanas e dias. 
Considere ano com 365 dias, mês com 30 dias e semana com 7 dias.  

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

*/


/* 1 - Conhecendo seu usuário
Calcule o IMC do seu usuário e informe a faixa dele.
*O IMC é a relação entre peso e altura e o cálculo é feito de acordo com a 
fórmula: IMC = peso / (altura x altura)
O peso deve estar em kg e a altura em metros, e o resultado é dado em kg/m2. 
Depois de obter o resultado, é possível verificar em que faixa o IMC se encontra, 
podendo indicar:
      - Magreza, quando o resultado é menor que 18,5 kg/m2;
      - Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;   
      - Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;
      - Obesidade, quando o resultado é maior que 30 kg/m2.
A partir da idade informada descubra o ano que o seu usuário nasceu(Considere o ano 
atual como 2024, faça essa conta usando apenas o ano). 

function imcUsuario () {
    const peso = parseFloat(prompt("Informe seu peso (em kg): "));
    const altura = parseFloat(prompt("Informe sua altura (em metros): "));

    // Calculando o IMC
    const imc = peso / (altura * altura);

    if (imc < 18.5) {
        console.log("Magreza");
    } 
    else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Normal");
    } 
    else if (imc > 24.9 && imc <= 30) {
        console.log("Sobrepeso");
    } 
    else {
        console.log("Obesidade");
    }

    // Calculando o ano de nascimento com base na idade e ano atual
    const idade = Number(prompt("Informe sua idade: "));
    const anoAtual = 2024;
    const anoNascimento = anoAtual - idade;

    console.log(`Você nasceu em ${anoNascimento}.`);
}
imcUsuario();
*/


/* 1 - Conhecendo seu usuário
Agora você deve exibir todos os anos que o usuário já viveu até o ano atual e informar 
qual a idade dele no determinado ano.
   Ex: Nasceu em 2018 você deve exibir: 
       2018 - 0 anos de idade
       2019 - 1 anos de idade
       2020 - 2 anos de idade
       2021 - 3 anos de idade
       2022 - 4 anos de idade

function idadeUsuario () {
    const anoAtual = 2024;
    const idade = Number(prompt("Informe sua idade: "));
    const anoNascimento = anoAtual - idade;

    for (let ano = anoNascimento; ano <= anoAtual; ano++) {
        console.log(`${ano} - ${ano - anoNascimento} anos de idade`);
    }
}

idadeUsuario();
*/


