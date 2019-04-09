/*
Crie uma função que receba três notas como parâmetro e retorne a média, 
indicando se a pessoa passou ou se foi reprovada. 
*/

    var nota1 = prompt("Nota 1");
    var nota2 = prompt("Nota 2");
    var nota3 = prompt("Nota 3");
    function resultado(nota1, nota2, nota3){ 
        media = (nota1 + nota2 + nota3)/3
    }

if (resultado >= 5) {
    console.log("Você foi aprovado.")
}

else {
    console.log("Não aprovado.")
}