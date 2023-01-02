// throw - disparar

// function sayMyName(name = '') {
//     if(name === '') {
//         throw 'Nome é obrigatorio'
//     }
//     console.log(name)
// }

// // try...catch - pegar
// try {
//     sayMyName('Lucas')
// } catch(e) {
//     console.log(e)
// }

// console.log('após ao try/catch')

function pegar(name) {
    if(name === '')
    throw 'Nome obrigatorio'
    console.log(name)
}

try {
    pegar('')
} catch(e) {
    console.log(e)
}
