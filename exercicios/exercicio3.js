// Declare uma variável que receba um objeto vazio.

var objeto = {}

/*
Declare uma variável `pessoa`, que receba as suas informações pessoais, seguindo os tipos definidos abaixo:
- `nome` - String
- `sobrenome` - String
- `idade` - Number
- `altura` - Number
- `reprograma` - String
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

var pessoa = {
    nome: "Carina",
    sobrenome: "Di Domenico",
    idade: 23,
    altura: 1.62,
    reprograma: "Mulheres Maravilhosas",
    andando: false,
    caminhouQuantosMetros: 0,
}

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

pessoa.fazerAniversario = function(){
    pessoa.idade++;
    return pessoa.idade;
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/

pessoa.andar = function (metros){
    var metros;
    pessoa.caminhouQuantosMetros += metros;
    pessoa.andando = true;
    return pessoa.caminhouQuantosMetros;
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

pessoa.parar = function(){
    pessoa.andando = false;
}

/*
Crie um método chamado `meuNomeCompleto`, que retorne a frase:
- "Meu nome é [NOME] [SOBRENOME]"
*/

function meuNomeCompleto (){
    return ("Meu nome é " + pessoa.nome + " " + pessoa.sobrenome);
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "eu tenho [IDADE] anos"
*/

function mostrarIdade (){
    return ("Eu tenho " + pessoa.idade + " anos");
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "minha altura é [ALTURA]"
*/

function mostrarAltura(){
    return ("Minha altura é " + pessoa.altura)
}

/*
Agora vamos mostrar as informações do objeto criado!
Qual o nome completo da pessoa? 
*/

/*
Qual a idade da pessoa? 
*/

/*
Qual a altura da pessoa?
*/

/*
Faça a `pessoa` fazer 3 aniversários.
*/

/*
Quantos anos a `pessoa` tem agora? 
*/

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/

/*
A pessoa ainda está andando? 
*/

/*
Se a pessoa ainda está andando, faça-a parar.
*/

/*
Quantos metros a pessoa andou? 
*/

/*
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá! Meu nome é [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"
*/ 

function apresentacao (){
    return ("Olá! " + meuNomeCompleto() + ". " + mostrarIdade() + ". " + mostrarAltura() + ". " )
}

// Exemplo Ana:

var frutas = ["banana", "uva", "maça", "salada-mista"];

for (contador = 0; contador < frutas.length; contador++){
    console.log(frutas[contador])
}


function salada(){
    for (contador = 0; contador < frutas.length; contador++){
        console.log(frutas[contador])
    }
}