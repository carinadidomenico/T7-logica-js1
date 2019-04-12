/*
Mostre no console os números pares entre 1 e 10, e os número ímpares entre 11 e 20, 
usando a estrutura de repetição "while".
*/

// 16 % 3 -----------> vai mostrar o resto da divisão de 16 por 3, ou seja, 1.

var numero = 0;


while(numero <=10){
    if(numero % 2 == 0 ){
        console.log (numero)
    }
    numero++
}

while (numero > 10 && numero < 20){
    if(numero % 2 !== 0){
        console.log(numero);
    }
    numero++
}
