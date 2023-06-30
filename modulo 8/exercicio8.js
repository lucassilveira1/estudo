// TEMA DO MÓDULO: FUNCTIONAL PROGRAMMING

/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/

const sum = calculateSum = (a, b) => {
return a + b;
}

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/

const valor1 = 50;
const valor2 = 30;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${sum(valor1, valor2)}.`)

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/

console.log(`O nome da função que faz a soma é ${sum.name}.`)

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/

const showName = () => {
  return 'Lucas Silveira';
};

console.log(showName())

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/

const varShowName = showName;

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/

console.log(`A função ${varShowName.name} retorna ${showName()}`)

/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/

const calculator = (operator) => {
  return function calculation(num1, num2) {
    var result;
    switch(operator) {
      case '+' :
        result = num1 + num2;
        break;
      case '-' :
        result = num1 - num2;
        break;
      case '*' :
        result = num1 * num2;
        break;
      case '/' :
        result = num1 / num2;
        break;
      case '%' :
        result = num1 % num2;
        break;
      default :
        return 'Operação inválida.';
    }
    return `Resultado da operação: ${num1} ${operator} ${num2} = ${result} `
  }
}

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/

const sum2 = calculator('+');

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/

console.log(sum2(10, 8))

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/

const subtraction = calculator('-') ;
const multiplication = calculator('*');
const division = calculator('/');
const mod = calculator('%');
const teste = calculator('x')
/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/

console.log(subtraction(20, 5));
console.log(multiplication(5, 10));
console.log(division(20, 2));
console.log(mod(100, 10));
console.log(teste(10, 5));