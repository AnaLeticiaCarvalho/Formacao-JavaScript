class Carro {

    constructor(marca, cor, gastoKm) {
        this.marca = marca
        this.cor = cor
        this.gastoKm = gastoKm

    }

    calcularGasto(km, precoCombustivel ) {
        
        return km * this.gastoKm * precoCombustivel
    
    }
}

const uno = new Carro('Fiat', 'Preto', 1 / 12)
console.log(uno.calcularGasto(70, 5))

const palio = new Carro('Fiat', 'Vermelho', 1 / 10)
console.log(palio.calcularGasto(70, 5))