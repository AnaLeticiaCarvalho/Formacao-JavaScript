function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}
Pessoa.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
}

const leticia = new Pessoa('Leticia', 29)

leticia.falar()