var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ')
let lista = []
let n = lines.shift()
let x = lines.shift()
for (let i= 1; i<=x; i++){
    lista.push(i);
}

for(let i = 0; i < x/n; i++){
    linha = lista.splice(0,n)
    console.log(linha.join(' '))
}

