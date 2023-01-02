// Cria um loop através de um objeto existente, pegando as propriedades do objeto

let person = {
    name: 'Lucas',
    age: 19,
    weigth: 70
};

for (let property in person) {
    console.log(property + ':')
    console.log(person[property])
}