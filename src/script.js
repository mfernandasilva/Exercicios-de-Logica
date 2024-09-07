// Exercício 5: Reversão de string 

function reverterString() {
    let palavra = prompt("Insira uma palavra");
    let resultado = '';

    for (let i = palavra.length - 1; i >= 0; i--) {
        resultado += palavra[i];
    }

    return resultado;
}

console.log(reverterString());
