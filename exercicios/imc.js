// Crie uma função que calcule o índice de massa corporal de uma pessoa (IMC)

function calcularIMC(){
    var altura = prompt("Qual a sua altura?");
    var peso = prompt("Qual o seu peso?");
    var calculo = (peso/(altura * altura). toFixed(2));

    console.log("Seu IMC é igual a:  " + calculo);

    if (calculo < 18.5){
        alert("Você está abaixo do peso. Seu índice é: " + calculo);
    }
    else if(calculo >= 18.5 && calculo < 25){
        alert("Você está normal. Seu índice é: " + calculo);
    }
    else if(calculo >=25 && calculo < 30){
        alert ("Você está com sobrepeso. Seu índice é: " + calculo);
    }
    else{
        alert ("Você está com obesidade. Seu índice é: " + calculo);
    }
}