// tipo de dado
// booleanos

// conversão implícita
const numero = 456;
const numeroString = "456";


console.log(numero + numeroString) // 2 iguais compara o valor e 3 compara o valor e tipo de dado


// conversão explícita

//para solucionar o problema da concateção, deve-se usar:
//Number
//String
console.log(numero + Number(numeroString)) // 2 iguais compara o valor e 3 compara o valor e tipo de dado
