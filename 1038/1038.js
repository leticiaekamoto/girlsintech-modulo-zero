let input = require('fs').readFileSync('1038/stdin', 'utf8');
let lines = input.split(' ');
let indice = parseInt(lines.shift());
let quantidade = parseInt(lines.shift());
let total = 0;

switch(indice){
    case 1:
       total+= quantidade*4.00
       break;
    case 2:
        total+= quantidade*4.50
        break;
    case 3:
        total+= quantidade*5.00
        break;
    case 4:
        total+= quantidade*2.00
        break;
    case 5:
        total += quantidade*1.50
        break;
    default:
        
}
console.log(`Total: R$ ${total.toFixed(2)}`)