/*
Usando a estrutura SWICTH, crie uma função que transforme quatro cores passadas por parâmetro em formato 'string', para os equivalentes hexadecimais.
Se a cor passada não estiver entre as que você selecionou, mostre a seguinte frase "Não temos o equivalente hexadecimal para [cor]".
*/

function cores (cor){
    switch (cor) {
        case "vermelho":
        console.log ("#FF0000");
        break;
    case "verde":
        console.log ("#008000");
        break; 
    case "azul":
        console.log ("#0000FF");
        break;
    case "amarelo":
        console.log ("#FFFF00");
        break;
        case "roxo":
        console.log ("#800080");
        break;
    case "magenta":
        console.log ("#FF00FF");
        break; 
    case "aquamarine":
        console.log ("#7FFFD4");
        break;
    case "laranja":
        console.log ("#FFA500");
        break;
        case "chocolate":
        console.log ("#D2691E");
        break;
    case "cinza":
        console.log ("#808080");
        break; 
    case "branco":
        console.log ("#FFFFFF");
        break;
    case "preto":
        console.log ("#000000");
        break;
        case "rosa":
        console.log ("#FF1493");
        break;
    default:
        console.log ("Não temos o equivalente hexadecimal para essa cor");
    }  
}