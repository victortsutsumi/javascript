const texto1 = "Olá, Mundo!";
const texto2 = 'Olá, mundo!'; //funciona das duas maneiras
const StringDeNumeros = "34567";

const citacao = 'Meu nome é '; //em citacoes, usar aspas diferente para diferenciar
const meuNome = 'Leonardo';


//concatenação (+)

console.log(citacao + meuNome)


//template string ou template literal



//caracteres especiais
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)


//comparação de strings

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

//Maiusculo ou Minusculo

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

//tamanho da string

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres

