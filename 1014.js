var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var distancia = parseInt(lines.shift());
var combustivel = parseFloat(lines.shift());
var totalCombustivel = (distancia/combustivel).toFixed(3);

console.log(totalCombustivel + " km/l")
