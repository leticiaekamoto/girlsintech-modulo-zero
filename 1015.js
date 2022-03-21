var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var lines1 = lines.shift();
var linesA = lines1.split(' ');
var lines2 = lines.shift();
var linesB = lines2.split(' ');

var x1 = parseFloat(linesA.shift());
var y1 = parseFloat(linesA.shift());
var x2 = parseFloat(linesB.shift());
var y2 = parseFloat(linesB.shift());
var distancia = Math.pow((Math.pow((x2 - x1), 2) + Math.pow((y2-y1),2)), 0.5).toFixed(4);
console.log(distancia);