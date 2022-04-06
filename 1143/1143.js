let input = require('fs').readFileSync('1143/stdin', 'utf8');
let linhas = parseInt(input);

for(let i = 1; i<= linhas; i++){
    console.log(`${i**1} ${i**2} ${i**3}`)
}

