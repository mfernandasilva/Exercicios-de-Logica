/* 1 - Conhecendo seu usuário
Agora você deve exibir todos os anos que o usuário já viveu até o ano atual e informar 
qual a idade dele no determinado ano.
   Ex: Nasceu em 2018 você deve exibir: 
       2018 - 0 anos de idade
       2019 - 1 anos de idade
       2020 - 2 anos de idade
       2021 - 3 anos de idade
       2022 - 4 anos de idade
*/

function idadeUsuario () {
    const anoAtual = 2024;
    const idade = Number(prompt("Informe sua idade: "));
    const anoNascimento = anoAtual - idade;

    for (let ano = anoNascimento; ano <= anoAtual; ano++) {
        console.log(`${ano} - ${ano - anoNascimento} anos de idade`);
    }
}

idadeUsuario();



