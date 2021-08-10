//boolean
const usuraioLogado = true;
const contaPaga = false;

//truthy ou falsy
//0 => False
//1 => True

console.log(0 == false);
console.log("" == false);
console.log(1 == true);

//NULL

let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

//undefined

let input2; //ganha automaticdamente o valor de undefined

console.log(input); // null
console.log(input2); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false


//typeof

let numero = 3;
let texto = "Alura"

console.log(typeof numero);
console.log(typeof texto);