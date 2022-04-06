let input = require('fs').readFileSync('1145/stdin', 'utf8');
let lines = input.split(' ')
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

