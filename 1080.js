var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var lista = [];

for (let i = 0; i < 100; i++){
    
    var valores = parseInt(lines.shift());
    lista.push(valores)    
}

var maior = 0
for (let i = 0; i < lista.length; i++){
    
    if(parseInt(lista[i]) > maior){
        maior = lista[i]
        
    }
}

console.log(maior)
console.log(lista.indexOf(maior) + 1)
  




