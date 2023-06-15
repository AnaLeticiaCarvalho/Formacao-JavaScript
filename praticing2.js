class Pessoa {

    constructor(nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
       
    }

    calcularImc() {
       return this.peso / (this.altura * this.altura)
    }

    classificarImc() {
        const imc = this.calcularImc()
        if(imc < 15.5) {
            return ('Abaixo do peso')
        }
        else if (imc >= 18.5 && imc < 25) {
            return ('Peso normal')
        }
        else if (imc >= 2.5 && imc < 30) {
            return ('Acima do peso')
        }
        else if (imc >= 30 && imc < 40) {
            return ('Obeso')
        }
        else {
            return ('Obesidade grave')
        }
    }
}

const leticia = new Pessoa('Leticia', 93, 1.50)
console.log(leticia.classificarImc())

const kaua = new Pessoa('Kauã', 54, 1.45)
console.log(kaua.classificarImc())

const licia = new Pessoa('Lícia', 89, 1.56)
console.log(licia.classificarImc())