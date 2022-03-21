var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var c = parseFloat(lines.shift());

var triangulo = ((a*c)/2).toFixed(3);
var circulo = (3.14159 * (c * c)).toFixed(3);
var trapezio = (((b + a) * c)/2).toFixed(3);
var quadrado = (b * b).toFixed(3);
var retangulo = (a*b).toFixed(3);

console.log("TRIANGULO: " + triangulo);
console.log("CIRCULO: " + circulo);
console.log("TRAPEZIO: " + trapezio);
console.log("QUADRADO: " + quadrado);
console.log("RETANGULO: " + retangulo);