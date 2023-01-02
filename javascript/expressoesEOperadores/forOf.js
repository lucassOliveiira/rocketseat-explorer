// Cria um loop através de uma váriavel existente, pode ser string, number 

let name = 'Lucas'
let names = ['Maria', 'Cintia', 'Rodrigo']
let name2 = {name: 'jose', age: 87}

for(let name in name2) {
    console.log(name)
}