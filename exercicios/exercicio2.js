// Crie uma função com dois argumentos, que retorna a subtração deles.

function subtracao (numero1, numero2) {
    return numero1 - numero2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando "10" ao resultado retornado da função.

var equacao = subtracao(50,5) + 10

// Qual o valor atualizado dessa variável?

55

// Declare uma nova variável, sem valor.

var valor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a seguinte mensagem:
"O novo valor da minha variável agora é VALOR."
(onde VALOR é o novo valor da variável).
*/
function chamaValor (){
    valor = 15;
    console.log ("O novo valor da minha variável agora é " + valor);
}

// Invoque a função criada acima.

chamaValor;

// Qual o retorno da função? (Use comentários de bloco).

"O novo valor da minha variável agora é 15."

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando "2" ao resultado da multiplicação.
*/

function preencher (x,y,z){
    if (x == undefined || y == undefined || z == undefined){
        console.error ("Preencha todos os valores corretamente!");
    }
    else{
        console.log ("Você preencheu todos os campos");
        return ((x *y * z) + 2);
    }
}

// Invoque a função criada acima, passando só dois números como argumento.

preencher (3,2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

"Preencha todos os valores corretamente!"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

preencher(1,2,3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano "false".
6. E ainda, se nenhuma das condições acima forem atendidas, retorne "null".
*/

function tres (x,y,z){

    if (x && !y && !z){
        // Se somente um argumento for passado, retorne o valor do argumento.
        return x;
    }
    else if (x,y && !z){
        //Se dois argumentos forem passados, retorne a soma dos dois argumentos.
        return x + y;
        
    }
    else if (x,y,z){
        //Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
        return ((x + y) / z);
    }
    else if (x == undefined && y == undefined && z == undefined){
        //Se nenhum argumento for passado, retorne o valor booleano "false".
        return false;
    }
    else{
        return null
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.