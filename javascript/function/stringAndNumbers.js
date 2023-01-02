let string = '123'
console.log(Number(string))
let number4 = 321
console.log(String(number4))

console.log('=============================')

// Mostrar o tamanho da variavel
let word3 = "Paralelepipedo"
console.log(word3.length)
let number2 = 1234
console.log(String(number2).length)

console.log('=============================')

//Casas Decimais
let number = 12.50
console.log(number.toFixed(2).replace('.', ','))

console.log('=============================')

//Maiúscula e minúscula
let myNameUpper = 'lucas'
console.log(myNameUpper.toUpperCase())

let myNameLower = 'LUCAS'
console.log(myNameLower.toLowerCase())

console.log('=============================')

//separar textos com espaço e colocar _
let word1 = 'programar é uma coisa muito louca'
let myArray = word1.split(' ') //transforma em array e separa o texto pelo parametro passado
let phraseWithUnderscore = myArray.join('_') //transforma em string e junta o texto e separa pelo parametro passado
console.log(phraseWithUnderscore.toUpperCase())

console.log('=============================')

//Verificar se o texto contém a palavra Amor
let phrase = 'Eu quero viver o Amor!'
console.log(phrase.includes('Amor')) //mostra se existe e se é true ou false

console.log('=============================')

//criar array com Constructor
let myArrayConstructor = new Array('a', 'b', 'c')
console.log(myArrayConstructor)

console.log('=============================')

//Contar elemento de um array
console.log([
    "a",
    {type: "array"},
    () => {return 'Hello World!'}
].length)

console.log('=============================')

// transformar cada letra em array
let word = "manipulação"
console.log(Array.from(word)) // transforma uma string em um array separando todas as letras
// pode ser também
let word2 = "manipulação"
console.log(word.split('')) // transforma uma string em um array

console.log('=============================')

//
let techs = ["html", "css", "js", "react"]
// adicionar um item no final
techs.push('angular')
// adicionar um item começo
techs.unshift('nodeJS') 
// remover do final
techs.pop()
// remover do começo
techs.shift()
//pegar somente alguns elementos do array
console.log(techs.slice(1, 4)) // não remove do array
//remover 1 ou itens de qualquer elementos do array
techs.splice(1, 2) // remove do array
// encontrar a posição de um elemente no array
let index = techs.indexOf('html')
techs.splice(index, 1)

console.log(techs)