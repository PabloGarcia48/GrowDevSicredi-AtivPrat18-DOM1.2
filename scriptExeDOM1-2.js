let clicks = 0

let contador = document.getElementById('contador')

function increment() {
    clicks ++
    contador.innerText = `Contador ${clicks}`
}

function reset() {
    clicks = 0
    contador.innerText = `Contador zerado`
}
