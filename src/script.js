let somaNotas = 0;
let contadorNotas = 0;
let nota;

do {
    nota = Number(prompt("Insira uma nota (número negativo para parar): "));
    if (nota >= 0) {
        somaNotas += nota;
        contadorNotas++;
    }
} while (nota >= 0);

if (contadorNotas > 0) {
    let media = somaNotas / contadorNotas;
    console.log(`A média das notas é: ${media}`);
} else {
    console.log("Nenhuma nota válida foi inserida.");
}
