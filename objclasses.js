const pessoaa = {
    nome: 'Leticia Carvalho',
    idade: 29,
    apresentar: function () {
        console.log(`Meu nome é ${this.nome} tenho ${this.idade} anos e ${this.altura}cm de altura`)
    }
}

pessoa.altura = 150

pessoaa.apresentar()

//Assessando os atributos por string

console.log(pessoa['nome'])

