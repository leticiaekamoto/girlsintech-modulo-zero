var input = require('fs').readFileSync('stdin', 'utf8');
var numero = parseInt(input);

for (let i = 1; i <= 10; i++){
    var multiplicacao = i * numero
    console.log(`${i} x ${numero} = ${multiplicacao}`)
}