const fs = require('fs')

const promessaLeitura = fs.promises.readFile('tarefas.csv')

promessaLeitura.then((arquivo) => {
    console.log(arquivo.toString('utf8'))
}).catch((error) => {
    console.log('Deu ruim', error)
})



/*const list = [1, 2, 3]

console.log(list.join('; '))*/

const objList = [{ nome: 'Kauã' }, { nome: 'Jordânia' }, { nome: 'Lícia' }]

const nomesLista = objList.map((e) => e.nome)

console.log(nomesLista.join('; '))
