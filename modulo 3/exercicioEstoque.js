/* De forma simples vamos pensar em um estoque de uma padaria.
Precisamos de uma variável que contenha um objeto e cada chave seria um item com a quantidade em estoque que temos, e o alerta sobre quando precisamos comprar mais. Ex:
{
	"farinha": {
	    "qtdAtual": int,
	    "alertaEstoqueMin": int,
    }
    .
	.
	.
}
Agora precisamos de uma função que capture itens deste estoque. Ela precisa receber 2 parâmetros, item: string e quantidade: int. É necessário fazer o tratamento para atualizar os itens no estoque, e em caso de atingir o estoque mínimo precisamos printar a seguinte mensagem: "Estamos com estoque mínimo, reabastecer <item>". Caso ocorra tudo bem, sem o fluxo da mensagem de aviso, a função deve retornar apenas o bool True. Caso o item não seja encontrado na lista existente, é necessário logar a mensagem "Item não encontrado" e retornar False.

Validar se quantidade atual de estoque é maior ou igual a quantidade solicitada. Se for menor, deve logar a mensagem: 'Estoque menor do que o solicitado' e retornar false.

Vamos precisar também de uma função para reabastecer o estoque, ela deve receber 2 parâmetros, similares à função anterior item: string e quantidade: int. Os valores devem ser atualizados no estoque. Caso tudo ocorra bem, retorna True. Caso o item não seja encontrado na lista existente, é necessário logar a mensagem "Item não encontrado" e retornar False. 

1º - Declarar o estoque inicial
2º - Criar uma função que pegue os itens do estoque e sinalize em caso de estoque baixo
3º - Criar uma função que reabasteça o estoque
*/

var estoque = {
  'farinha': {
    'qtdAtual': 200,
    'alertaEstoqueMin': 40,
  },

  'acucar': {
    'qtdAtual': 200,
    'alertaEstoqueMin': 40
  },

  'fermento': {
    'qtdAtual': 200,
    'alertaEstoqueMin': 40,
  }
}



const getIngredient = (item, quantidade = 0) => {

  if (item in estoque) {

   console.log(`Você solicitou ${quantidade} de ${item}.`)

   let qtdAtual = estoque[item].qtdAtual;

   if (quantidade > qtdAtual) {
    console.log('Estoque menor que o solicitado')  
    return false
   }
    qtdAtual = qtdAtual - quantidade;

   if(qtdAtual <= estoque[item].alertaEstoqueMin) {
    console.log(`Estamos com estoque mínimo, reabastecer ${item}`)
   } 
   estoque[item].qtdAtual = qtdAtual
   return true

  } else {
    console.log('Item não encontrado');
    return false;
  }
}

getIngredient('farinha', 25)

const refuelItems = (item, quantidade) => {
  if (item in estoque) {
    estoque[item].qtdAtual += quantidade;
    console.log(`A quantidade disponível no estoque é: ${estoque[item].qtdAtual}`)
    return true;
  } else {
    console.log('Item não encontrado');
    return false;
  }
}

const getStock = (item) => {
  if (item in estoque) {
    console.log('A quantidade disponível no estoque é:' + estoque[item].qtdAtual)
  }
}

getStock('farinha')


var ingredient = {
  "ingredientes":[
     {
        "nome":"farinha",
        "qtdAtual":"200",
        "alertaEstoqueMin":"40"
     },
     {
        "nome":"sal",
        "qtdAtual":"200",
        "alertaEstoqueMin":"40"
     }
  ]
}

const ingrediente = (item, quantidade = 0) => {

    let ingrediente = ingredient.ingredientes.find(ing => ing.nome === item);
    if (ingrediente) {
      let qtdAtual = ingrediente.qtdAtual;
      if (qtdAtual >= quantidade) {
        ingrediente.qtdAtual -= quantidade;
        if (qtdAtual - quantidade <= ingrediente.alertaEstoqueMin) {
          console.log(`Estamos com estoque mínimo, reabastecer ${item}`);
        }
      } return true
    } else {
      console.log('Item não encontrado');
      return false
    }
}

const refuelIngredient = (item, quantidade) => {

  let ingrediente = ingredient.ingredientes.find(ing => ing.nome === item);
  if (ingrediente) {
    ingrediente.qtdAtual += quantidade;
    return true
  } else {
    console.log('Item não encontrado');
    return false
  }
}



