(function(){
    /*
    Envolva todo o código desse desafio em uma IIFE.
    Crie um arquivo chamado index.html e adicione esse script ao HTML.
    */

    /*
    Crie uma função construtora chamada "Person". Esse construtor deve ter
    as seguintes características:
    - Deve receber 3 parâmetros: `name`, `lastName` e `age`;
    - Deverá ter 3 propriedades:
    - `name` - que receberá o valor do parâmetro `name`;
    - `lastName` - que receberá o valor do parâmetro `lastName`;
    - `age` - que receberá o valor do parâmetro `age`;
    - Deverá ter 3 métodos:
    - `getFullName` - que deve retornar o nome completo do objeto criado,
    no formato:
        - "[NAME] [LASTNAME]"
    - `getAge` - que deverá retornar a idade (age);
    - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
    iremos passar um único argumento, que é a quantidade de anos que devem ser
    adicionados à idade original (age). Esse método deverá retornar o objeto
    que será instanciado.
    */
    
    class Person {
        constructor(name, lastName, age) {
            this.name = name;
            this.lastName = lastName;
            this.age = age;
        }
        getFullName() {
            return this.name + ' ' + this.lastName;
        };

        getAge() {
            return this.age;
        };

        addAge(incremento) {
            this.age += incremento;
            return this;
        };
    };

    /*
    Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
    pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
    parâmetros corretamente para o construtor para criar as novas pessoas.
    Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
    */
    console.log( 'Novas pessoas criadas à partir de Person:' );
    
    var lucas = new Person( 'Lucas', 'Silveira', 22 );
    var lorenna = new Person( 'Lorenna', 'Silveira', 15 );
    var leila = new Person( 'Leila', 'Silveira', 49 );

    console.log( lucas );
    console.log( lorenna );
    console.log( leila );
    /*
    Mostre no console o nome completo de cada pessoa.
    */
    console.log( '\nNomes das pessoas:' );
    
    console.log(lucas.getFullName());
    console.log(leila.getFullName());
    console.log(lorenna.getFullName());

    /*
    Mostre no console as idades de cada pessoa, com a frase:
    - "[NOME COMPLETO] tem [IDADE] anos." 
    */
    console.log( '\nIdade das pessoas:' );
    
    console.log(`${lucas.getFullName()} tem ${lucas.getAge()} anos.`)
    console.log(`${leila.getFullName()} tem ${leila.getAge()} anos.`)
    console.log(`${lorenna.getFullName()} tem ${lorenna.getAge()} anos.`);

    /*
    Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
    cada um. A frase deverá ser no formato:
    - "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
    */
    console.log( '\nNova idade das pessoas:' );
    lucas.addAge(2);
    console.log(`${lucas.getFullName()} agora tem tem ${lucas.getAge()} anos.`)
    leila.addAge(3);
    console.log(`${leila.getFullName()} agora tem ${leila.getAge()} anos.`)
    lorenna.addAge(4);
    console.log(`${lorenna.getFullName()} agora tem ${lorenna.getAge()} anos.`)
    
})();