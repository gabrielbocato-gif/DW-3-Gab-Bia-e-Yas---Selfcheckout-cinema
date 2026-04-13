// puxando elementos da qtde
const btnAddFilme1 = document.querySelector('.mais1')
const btnAddFilme2 = document.querySelector('.mais2')
const btnAddFilme3 = document.querySelector('.mais3')
const btnAddFilme4 = document.querySelector('.mais4')

const btnRemoveFilme1 = document.querySelector('.menos1')
const btnRemoveFilme2 = document.querySelector('.menos2')
const btnRemoveFilme3 = document.querySelector('.menos3')
const btnRemoveFilme4 = document.querySelector('.menos4')

const divQtdefilme1 = document.querySelector('.qntd1')
const divQtdefilme2 = document.querySelector('.qntd2')
const divQtdefilme3 = document.querySelector('.qntd3')
const divQtdefilme4 = document.querySelector('.qntd4')
let qtdefilme1 = 0
let qtdefilme2 = 0
let qtdefilme3 = 0
let qtdefilme4 = 0

// operação pra saber o total da venda
let valor = document.querySelector('.valortotal')

let valorTotalfilme1 = qtdefilme1 * 20
let valorTotalfilme2 = qtdefilme2 * 18
let valorTotalfilme3 = qtdefilme3 * 22
let valorTotalfilme4 = qtdefilme4 * 16

function totalcompra() {
    let valortotal = valorTotalfilme1 + valorTotalfilme2 + valorTotalfilme3 + valorTotalfilme4
    valor.innerText = (valortotal)
}

//adicionando a qtde aqui
btnAddFilme1.addEventListener('click', () => {
    qtdefilme1 += 1
    divQtdefilme1.innerText = (qtdefilme1)
    totalcompra()
})
btnAddFilme2.addEventListener('click', () => {
    qtdefilme2 += 1
    divQtdefilme2.innerText = (qtdefilme2)
    totalcompra()
})
btnAddFilme3.addEventListener('click', () => {
    qtdefilme3 += 1
    divQtdefilme3.innerText = (qtdefilme3)
    totalcompra()
})
btnAddFilme4.addEventListener('click', () => {
    qtdefilme4 += 1
    divQtdefilme4.innerText = (qtdefilme4)
    totalcompra()
})

// removendo a qtde de filme aqui
btnRemoveFilme1.addEventListener('click', () => {
    qtdefilme1 -= 1
    divQtdefilme1.innerText = (qtdefilme1)
    totalcompra()
})
btnRemoveFilme2.addEventListener('click', () => {
    qtdefilme2 -= 1
    divQtdefilme2.innerText = (qtdefilme2)
    totalcompra()
})
btnRemoveFilme3.addEventListener('click', () => {
    qtdefilme3 -= 1
    divQtdefilme3.innerText = (qtdefilme3)
    totalcompra()
})
btnRemoveFilme4.addEventListener('click', () => {
    qtdefilme4 -= 1
    divQtdefilme4.innerText = (qtdefilme4)
    totalcompra()
})