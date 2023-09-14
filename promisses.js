const numAleatorio = new Promise((resolve, reject) => {
    const num = parseInt(Math.random() * 100)
    resolve (num)
})

numAleatorio.then((value) => {
    console.log(value)
})

    .catch((error) => console.error(error))
    .finally( () => {
    console.log('Finalizou')
})