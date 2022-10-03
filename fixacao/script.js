let lendoValor = document.getElementById("paragrafo")
console.log(lendoValor.innerHTML)

function printarInput() {
let printInput = document.getElementById("texto")
console.log(printInput.value)
}

function mostraInput() {
    let inputTela = document.getElementById("texto")
    let valorInner = document.getElementById("paragrafo")
    valorInner.innerHTML += inputTela.value
}