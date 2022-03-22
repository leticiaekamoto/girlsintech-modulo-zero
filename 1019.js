var input = require('fs').readFileSync('stdin', 'utf8');


var horas = parseInt((input)/3600)
var minutos = parseInt(((input)%3600)/60)
var segundos = parseFloat((input)%60)

console.log(`${horas}:${minutos}:${segundos}`);