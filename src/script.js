// Imprime a sequência de Fibonacci até o décimo termo.

let termoAnterior = 0
let termoAtual = 1

console.log(termoAnterior)
console.log(termoAtual)

for (let i = 3; i <= 10; i++) { 
    let proximoTermo = termoAnterior + termoAtual
    console.log(proximoTermo)
    termoAnterior = termoAtual
    termoAtual = proximoTermo
}
