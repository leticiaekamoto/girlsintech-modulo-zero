var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n');
var n = parseInt(lines.shift());

let lista = [];
lista[n-1] = 1
lista[n-2]= 1

 for(let i = n; i >=0 ; i--){
    lista[i-3] = lista[i-2] + lista[i- 1]
 }


console.log(lista.join(' '))