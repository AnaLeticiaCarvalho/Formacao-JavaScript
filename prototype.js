// Função construtora funciona como uma classe

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
        
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
}

const Kauas = new Pessoa('Kauas', 11)

/*class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade

    }
} */

Kauas.falar()

