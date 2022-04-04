var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n');
let n = lines.shift()

let lista = [];
lista[0] = 0
lista[1]= 1
lista[2] = 1

 for(let i = 3; i <= 60; i++){
    lista[i] = lista[i-1] + lista[i-2]
 }

for(let i = 0; i < n; i++){
    let posicao = parseInt(lines.shift())
    console.log(`Fib(${posicao}) = ${lista[posicao]}`)
}
