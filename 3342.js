var input = require('fs').readFileSync('stdin', 'utf8');
let n = parseInt(input)
let espacos = n*n
let brancas = 0;
let pretas = 0;

if(n%2===0){
    brancas = espacos/2
    pretas = espacos/2
}else{
    brancas = Math.ceil(espacos/2)
    pretas = espacos - brancas
}
console.log(`${brancas} casas brancas e ${pretas} casas pretas`)
