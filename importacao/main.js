const {gets, print} = require('./importacao')

const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100);
}
  
function pegarAliquota(salario) {
    if (salario >= 0 && salario <= 1100) {
        return 5
    }

    else if (salario >= 1100.01 && salario <= 2500) {
        return 10
    }

    else {
        return 15
   }
}

const aliquotaImposto = pegarAliquota(valorSalario)

const valorImposto = calcularPorcentagem(valorSalario, aliquotaImposto)

const valorATransferir = valorSalario - valorImposto + valorBeneficios

print(valorATransferir.toFixed(2))














/*const N = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 1;

for (let i = 0; i < N; i++) {
  const numero = parseInt(gets());

  if (numero % 2 === 0) {
    if (numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  } else {
    if (menorNumeroImpar === 1 || numero < menorNumeroImpar) {
      menorNumeroImpar = numero;
    }
  }
}

print(`Maior número par: ${maiorNumeroPar}`);
print(`Menor número impar: ${menorNumeroImpar}`);*/
















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