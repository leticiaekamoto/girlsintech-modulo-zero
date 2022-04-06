var input = require('fs').readFileSync('1014/stdin', 'utf8');
var lines = input.split('\n');

let distancia = parseInt(lines.shift());
let combustivel = parseFloat(lines.shift());
let totalCombustivel = (distancia/combustivel).toFixed(3);

console.log(totalCombustivel + " km/l")
