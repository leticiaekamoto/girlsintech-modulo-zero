var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nome = lines.shift();
var salarioFixo = parseFloat(lines.shift());
var vendas = parseFloat(lines.shift());
var comissao = vendas * 0.15;
var salarioTotal = salarioFixo + comissao;

console.log("TOTAL = R$ " + salarioTotal.toFixed(2));