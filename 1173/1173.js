let input = require('fs').readFileSync('1173/stdin', 'utf8');
let lista = [];
lista.unshift(input);
for(let i = 1; i <= 10; i++){
    
    lista[i] = lista[i-1]*2
    
    console.log(`N[${i -1}] = ${lista[i-1]}`)
}

