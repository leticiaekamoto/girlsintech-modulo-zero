let input = require('fs').readFileSync('1078/stdin', 'utf8');
let numero = parseInt(input);

for (let i = 1; i <= 10; i++){
    let multiplicacao = i * numero
    console.log(`${i} x ${numero} = ${multiplicacao}`)
}