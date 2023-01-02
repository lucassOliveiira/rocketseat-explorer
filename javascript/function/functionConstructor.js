/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
    this.walk = () => {
        return this.name + ' está andando'
    }
}
const lucas = new Person('Lucas', 19, 'Male')
const maria = new Person('Maria', 66, 'Female')
console.log(lucas.walk())
console.log(maria.walk())

let date = new Date("2022-11-19")
console.log(date)