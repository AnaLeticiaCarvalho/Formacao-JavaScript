/*class Pessoa  {
    constructor(name){
        this.name = name
    }
}

const lista = [new Pessoa('Kauã'), new Pessoa('Jordânia'), new Pessoa('Lícia')]

const names = lista.map((e) => {
   return `
       <li>
           ${e.name}
       </li>

    `
})

console.log(names)*/







const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]


const somaTotal = nums.reduce((previous, current) => {
    return previous + current
})

console.log(somaTotal)



//nums.forEach((e) => {console.log(e)})

//const pares = nums.filter((e) => { return e % 2 === 0 })

//console.log(pares)