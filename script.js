// tipos primitivos
var boolean = false; 
console.log(boolean);
console.log('Exemplo de texto');

// template string 
console.log(`A variável ${boolean} tem o tipo ${typeof(boolean)}`);

var nome = 'caio';
var nome = 'Caio';

function nomeDaFuncao() {
    var sobrenome = 'Frota'
    console.log(sobrenome);
};

console.log(nome);
nomeDaFuncao();

// comparação

var comparacao = '0' == 0;
console.log(comparacao);

var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

var adicao = 2 + 4;
console.log(adicao);

var adicaoDeTextoSera = 'Olá' + 'Dev' + 5;
console.log(adicaoDeTextoSera);

var subtracao = 4 - 3;
console.log(subtracao);

var multiplicacao = 2 * 3;
console.log(multiplicacao);

// divisaoReal = 6 / 2; divisaoInteira = 5 % 2; potenciacao = 2 ** 10;

// operadores relacionais
var maiorQue = 5 > 2;
console.log(maiorQue);

var menorQue = 5 < 2;
var maiorOuIgual = 5 >= 2;
var menorOuIgual = 5 <= 2;
var menorOuIgual = 5 <= 2;
var diferente = 5 != 5;
var diferenteEstrito = 5 !== 5;

console.log(`
    o valor da variável menorQue é ${menorQue};
    o valor da variável maiorOuIgual é ${maiorOuIgual};
    o valor da variável menorOuIgual é ${menorOuIgual};
    o valor da variável diferente é ${diferente};
    o valor da variável diferenteEstrito é ${diferenteEstrito}
    `);

    // operadores lógicos
    var e = true && true;
    console.log(e);

    var ou = true || false;
    console.log(ou);

    var nao = !true;
    console.log(nao);

    


