let input = require('fs').readFileSync('1019/stdin', 'utf8');


let horas = parseInt((input)/3600)
let minutos = parseInt(((input)%3600)/60)
let segundos = parseFloat((input)%60)

console.log(`${horas}:${minutos}:${segundos}`);