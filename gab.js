// puxando elementos 
const btnAddFilme1 = document.querySelector()
const btnAddFilme2 = document.querySelector()
const btnAddFilme3 = document.querySelector()
const btnAddFilme4 = document.querySelector()

const btnRemoveFilme1 = document.querySelector()
const btnRemoveFilme2 = document.querySelector()
const btnRemoveFilme3 = document.querySelector()
const btnRemoveFilme4 = document.querySelector()

const divQtdefilme1 = document.querySelector()
const divQtdefilme2 = document.querySelector()
const divQtdefilme3 = document.querySelector()
const divQtdefilme4 = document.querySelector()
let qtdefilme1 = 0
let qtdefilme2 = 0
let qtdefilme3 = 0
let qtdefilme4 = 0

//adicionando a qtde aqui
btnAddFilme1.addEventListener('click', () => {
    qtdefilme1 += 1
    divQtdefilme1.innerText = (qtdefilme1)
})
btnAddFilme2.addEventListener('click', () => {
    qtdefilme2 += 1
    divQtdefilme2.innerText = (qtdefilme2)
})
btnAddFilme3.addEventListener('click', () => {
    qtdefilme3 += 1
    divQtdefilme3.innerText = (qtdefilme3)
})
btnAddFilme4.addEventListener('click', () => {
    qtdefilme4 += 1
    divQtdefilme4.innerText = (qtdefilme4)
})
// removendo a qtde de filme aqui
btnRemoveFilme1.addEventListener('click', () => {
    qtdefilme1 -= 1
    divQtdefilme1.innerText = (qtdefilme1)
})
btnRemoveFilme2.addEventListener('click', () => {
    qtdefilme2 -= 1
    divQtdefilme2.innerText = (qtdefilme2)
})
btnRemoveFilme3.addEventListener('click', () => {
    qtdefilme3 -= 1
    divQtdefilme3.innerText = (qtdefilme3)
})
btnRemoveFilme4.addEventListener('click', () => {
    qtdefilme4 -= 1
    divQtdefilme4.innerText = (qtdefilme4)
})
// operação pra saber o total da venda

let valortotal = document.querySelector('.valortotal')

let valorTfilme1 = qtdefilme1 * valorfilme1
let valorTfilme2 = qtdefilme2 * valorfilme2
let valorTfilme3 = qtdefilme3 * valorfilme3
let valorTfilme4 = qtdefilme4 * valorfilme4

function totalcompra() {
    let valor = 
}