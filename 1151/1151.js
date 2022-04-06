let input = require('fs').readFileSync('1151/stdin', 'utf8')
let lines = input.split('\n');
let n = parseInt(lines.shift());

let lista = [];
lista[0] = 0
lista[1]= 1
lista[2] = 1

 for(let i = 3; i < n; i++){
    lista[i] = lista[i-1] + lista[i-2]
 }

console.log(lista.join(' '))