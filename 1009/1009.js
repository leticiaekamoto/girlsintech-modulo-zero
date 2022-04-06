let input = require('fs').readFileSync('1009/stdin', 'utf8');
let lines = input.split('\n');

let nome = lines.shift();
let salarioFixo = parseFloat(lines.shift());
let vendas = parseFloat(lines.shift());
let comissao = vendas * 0.15;
let salarioTotal = salarioFixo + comissao;

console.log("TOTAL = R$ " + salarioTotal.toFixed(2));