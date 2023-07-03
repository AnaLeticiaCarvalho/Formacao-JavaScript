const {gets, print} = require('./importacao')



const media = gets()

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
}









/*let maiorValor = 0

for (let i = 0; i < 5; i++){
    const numeroSorteado = gets
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado
    }
}

print(maiorValor)*/