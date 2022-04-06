let input = require('fs').readFileSync('1015/stdin', 'utf8');
let lines = input.split('\n');
let lines1 = lines.shift();
let linesA = lines1.split(' ');
let lines2 = lines.shift();
let linesB = lines2.split(' ');

let x1 = parseFloat(linesA.shift());
let y1 = parseFloat(linesA.shift());
let x2 = parseFloat(linesB.shift());
let y2 = parseFloat(linesB.shift());
let distancia = Math.pow((Math.pow((x2 - x1), 2) + Math.pow((y2-y1),2)), 0.5).toFixed(4);
console.log(distancia);