const pessoa = {
    genero: 'masculino'
}

// Crinando uma instância a partir do obj pessoa sendo a nova instância protótipo do molde

const kauan = Object.create(pessoa)
 console.log(kauan.genero)