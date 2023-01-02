/*
    new

    * left-hand-side expression
    *criar um novo objeto
*/
let name = new String('Lucas');
name.surName = 'Oliveira';
let age = new Number(19);
console.log(name, age);

let date = new Date('2022-11-26');
console.log(date.__proto__)