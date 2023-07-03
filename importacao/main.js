const {gets, print} = require('./importacao')

const N = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 1;

for (let i = 0; i < N; i++){
    const numero = parseInt(gets())

    if (numero % 2 == 0) {
        if (numero > maiorNumeroPar) {
            maiorNumeroPar = numero
        }
        
    }

    else {
        if (numero <= menorNumeroImpar) {
            menorNumeroImpar = numero
        }
    }
}

print('Maior número par:' + maiorNumeroPar)
print('Menor número ímpar: ' + menorNumeroImpar)
















/*const media = gets()

if (media >=0 && media < 5) {
    print('Reprovado')
}

else if (media >= 5 && media < 7) {
    print('Recuperação')
}

else if(media >= 7){
    print('Aprovado')
}

else {
    print('Número inválido')
}*/









/*let maiorValor = 0

for (let i = 0; i < 5; i++){
    const numeroSorteado = gets
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado
    }
}

print(maiorValor)*/