/*const list = [1, 2, 3]

console.log(list.join('; '))*/

const objList = [{ nome: 'Kauã' }, { nome: 'Jordânia' }, { nome: 'Lícia' }]

const nomesLista = objList.map((e) => e.nome)

console.log(nomesLista.join('; '))
