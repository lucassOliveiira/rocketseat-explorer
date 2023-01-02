/*
    Capturar 2 números
    e fazer as operações matemáticas
    de soma, subtração, multiplicação,
    divisão e resto da divisão

    E para cada operação, mostrar um alerta 
    com o resultado
*/

let numberOne = prompt('Digite um número: ');
let numberTwo = prompt('Digite outro número: ');
numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

let sum = numberOne + numberTwo;
let subtraction = numberOne - numberTwo;
let multiplication = numberOne * numberTwo;
let division = numberOne / numberTwo;
let restDivision = numberOne % numberTwo;

alert(`O resultado das operações é:
Soma: ${sum}
Subtração: ${subtraction}
Multiplicação: ${multiplication}
Divisão: ${division}
Resto da Divisão: ${restDivision}
`);


// let numberOne = prompt('Digite um número: ');
// let numberTwo = prompt('Digite outro número: ');

// let sum = Number(numberOne) + Number(numberTwo);
// let subtraction = Number(numberOne) - Number(numberTwo);
// let multiplication = Number(numberOne) * Number(numberTwo);
// let division = Number(numberOne) / Number(numberTwo);
// let restDivision = Number(numberOne) % Number(numberTwo);

// alert(`O resultado das operações é:
// Soma: ${Number(numberOne) + Number(numberTwo)}
// Subtração: ${Number(numberOne) - Number(numberTwo)}
// Multiplicação: ${Number(numberOne) * Number(numberTwo)}
// Divisão: ${Number(numberOne) / Number(numberTwo)}
// Resto da Divisão: ${Number(numberOne) % Number(numberTwo)}
// `)
