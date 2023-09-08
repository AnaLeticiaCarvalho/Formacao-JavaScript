const pessoa = {
    idade: 18
}

const kauas = {
    nome: 'Kauas',
    idade: 11,
    __proto__: pessoa
}

console.log(kauas.idade)