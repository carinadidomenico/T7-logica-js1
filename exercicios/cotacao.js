// Crie uma função para converter bitcoin em reais, dada uma quantia e uma cotação.

function cotacao() {
    var bitcoin = prompt("Quantos bitcoins você quer converter? ");
    var converter = prompt("Qual é o valor do bitcoin hoje? ");
    var resultado = bitcoin * converter;
    alert("Sua cotação é " + resultado + " reais.")
}


