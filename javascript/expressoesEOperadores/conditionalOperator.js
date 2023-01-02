// Operador Condicional (Ternário)

// Dependendo da condição, nós recebemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

let pao = false;
let queijo = true;

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim';

console.log(niceBreakfast);

//=======================

let age = 18;

const checkAge = age >= 18 ? 'Bigger than 18' : 'Smaller than 18';

console.log(checkAge);