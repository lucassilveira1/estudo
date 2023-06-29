/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var algo = [2, 5, 6, 8, 10]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function qualquer(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(qualquer(algo)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function qualquer2(arr, index) {
  return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var myvar = [2, 'Lucas', {idade: 22}, null, function() {}]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(qualquer2(myvar, 0))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(bookName) {
  const books = {
    'Harry Potter': {
      qtdPaginas: 264,
      autor: 'J.K Rowling',
      editora: 'Rocco'
    },

    'Interestelar': {
      qtdPaginas: 268,
      autor: 'Jonathan Nolan',
      editora: 'Gryphus Geek'
    },
    
    'O Senhor dos Anéis': {
      qtdPaginas: 576,
      autor: 'J.R.R Tolkien',
      editora: 'HarperCollins'
    }
  };
  return !bookName ? books : books[bookName]
};

const a = 0;

a === 0 ? a : 0

a === 0 || 10 ? a : 0

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

var bookName = 'O Senhor dos anéis'

console.log('O livro ' + bookName + ' possui ' + book(bookName).qtdPaginas + ' páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log('O autor do livro ' + bookName + ' é ' + book(bookNamee).autor)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + bookName + ' foi publicado pela editora ' + book(bookNamee).editora)