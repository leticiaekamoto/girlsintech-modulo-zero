var input = require('fs').readFileSync('1012/stdin', 'utf8');
var lines = input.split(' ');

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());

let triangulo = ((a*c)/2).toFixed(3);
let circulo = (3.14159 * (c * c)).toFixed(3);
let trapezio = (((b + a) * c)/2).toFixed(3);
let quadrado = (b * b).toFixed(3);
let retangulo = (a*b).toFixed(3);

console.log("TRIANGULO: " + triangulo);
console.log("CIRCULO: " + circulo);
console.log("TRAPEZIO: " + trapezio);
console.log("QUADRADO: " + quadrado);
console.log("RETANGULO: " + retangulo);