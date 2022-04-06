let input = require('fs').readFileSync('2807/stdin', 'utf8')
let lines = input.split('\n');
let n = parseInt(lines.shift());

let lista = [];
lista[n-1] = 1
lista[n-2]= 1

 for(let i = n; i >=0 ; i--){
    lista[i-3] = lista[i-2] + lista[i- 1]
 }


console.log(lista.join(' '))