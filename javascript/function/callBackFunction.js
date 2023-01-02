// function sayMyName(name) {
//     console.log('antes de executar a função callback')

//     name()

//     console.log('depois de executar a função callback')
// }

// sayMyName(
//     () => {
//         console.log('estou em uma callback')
//     }
// )


function Lucas(name) {
    console.log(`Olá ${name}`)
}

function Lucas2(callback) {
    let name = 'Lucas' 
    callback(name)
}

Lucas2(Lucas)
