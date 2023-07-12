(function(){

  /*
  Envolva todo o conteúdo desse arquivo em uma IIFE.

  /*
  Crie um objeto chamado `person`, com as propriedades:
  name: string
  lastname: string
  age: number
  */

  /* Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */

  var person = {
    name: 'Lucas',
    lastname: 'Silveira',
    age: 22
  };


  console.log( 'Propriedades de "person":' );

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  
  console.log(Object.keys(person));

  /*
  Crie um array vazio chamado `books`.
  */
  const books = [];

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  // ?
  console.log( '\nLista de livros:' );

  books.push(
    {
      name: 'O Senhor dos Aneis', 
      pages: 200
    }, 
    {
      name: 'Harry Potter',
      pages: 250
    }, 
    {
      name: 'O Hobbit',
      pages: 300,
    })

  /*
  Mostre no console todos os livros.
  */
  
  console.log(books);

  console.log( '\nLivro que está sendo removido:' );
  /*
  Remova o último livro, e mostre-o no console.
  */
  let last = books.pop();

  console.log(last);

  console.log( '\nAgora sobraram somente os livros:' );
  /*
  Mostre no console os livros restantes.
  */
  
  console.log(books);

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  // ?
  console.log( '\nLivros em formato string:' );

  const arrStr = JSON.stringify(books);
  /*
  Mostre os livros nesse formato no console:
  */
  
  console.log(arrStr);

  /*
  Converta os livros novamente para objeto.
  */
  // ?
  console.log( '\nAgora os livros são objetos novamente:' );

  const objA = JSON.parse(arrStr);

  console.log(objA);
  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  
      for(var i = 0; i < Object.keys( books ).length; i++) {
        for( var prop in books[i] ) {
          console.log(prop + ': ' + books[i][prop]);
        };
      }

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  // ?
  console.log( '\nMeu nome é:' );

  const myName = ['L', 'U', 'C', 'A', 'S'];
  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
 
  const nameJoin = myName.join('');

  console.log(nameJoin);

  console.log( '\nMeu nome invertido é:' );

  myName.reverse();
  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  
  console.log(myName);

  console.log( '\nAgora em ordem alfabética:' );
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  
  books.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  console.log(books);
})();