let input = require('fs').readFileSync('1080/stdin', 'utf8');
let lines = input.split('\n');
let lista = [];

for (let i = 0; i < 100; i++){
    
    let valores = parseInt(lines.shift());
    lista.push(valores)    
}

let maior = 0
for (let i = 0; i < lista.length; i++){
    
    if(parseInt(lista[i]) > maior){
        maior = lista[i]
        
    }
}

console.log(maior)
console.log(lista.indexOf(maior) + 1)
  




