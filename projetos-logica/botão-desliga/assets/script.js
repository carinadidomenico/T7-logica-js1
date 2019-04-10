
function liga (){

    var cor = document.getElementById("fundo");

    if(cor.style.backgroundColor == "black"){
        cor.style.backgroundColor = "white";
        document.getElementById ("imagem").src="assets/botao-verde.png"
        
    }
    else {
        cor.style.backgroundColor = "black";
        document.getElementById ("imagem").src="assets/botao-vermelho.png"
    }
}