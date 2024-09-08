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


