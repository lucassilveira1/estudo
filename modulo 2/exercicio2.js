// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function p(x, y) {
  return x + y
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, 
// e somando `5` ao resultado retornado da função.

var soma = p(5, 5) + 5;

// Qual o valor atualizado dessa variável?

15

// Declare uma nova variável, sem valor.

var nada

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function novovalor() {
  nada = 25
  return 'o novo valor da variável é: ' + nada;
}

// Invoque a função criada acima.

novovalor()

// Qual o retorno da função? (Use comentários de bloco).

25

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function lol(x, y, z) {
  if(x === undefined || y === undefined || z === undefined){
    return 'Preencha todos os valores corretamente!'
  } else return (x * y * z) + 2
}

// Dúvida: porque quando coloco com "or" ao inves de ||, e com um = só, nao funciona? //

// Invoque a função criada acima, passando só dois números como argumento.

lol(3, 2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

lol(3, 2, 5)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// 32

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function dunga(a, b, c) {
  if( a !== undefined && b === undefined && c === undefined ) {
    return 'o valor de a é: ' + a
  } else if( a !== undefined && b !== undefined && c === undefined) {
    return 'o valor de a + b é: ' + a + b
  } else if( a !== undefined && b !== undefined && c !== undefined) {
    return 'o valor de a + b / c é: '+ ( a + b ) / c
  } else if( a === undefined && b === undefined && c === undefined) {
    return false
  } else {
    return null
  }
}
// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) 
// Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

dunga() // false
dunga(2) // retornou o valor de A: 2
dunga(2, 3) // retornou a soma entre A e B: 5
dunga(5, 5, 2) // retornou o resultado da soma entre A e B (10) dividido pelo valor de C(2): 5