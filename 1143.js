var input = require('fs').readFileSync('stdin', 'utf8');
var linhas = parseInt(input);

for(let i = 1; i<= linhas; i++){
    console.log(`${i**1} ${i**2} ${i**3}`)
}

