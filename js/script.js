var quantidadeValor = document.getElementById('quantidade-valor');
var menosBtn = document.getElementById('menos-btn');
var maisBtn = document.getElementById('mais-btn');

function diminuirValor() {
    if(quantidadeValor.innerText > 1) {
        quantidadeValor.innerText--
    } else {
        alert("Quantidade mínima: 1")
    }
}

function aumentarValor() {
    quantidadeValor.innerText++
}