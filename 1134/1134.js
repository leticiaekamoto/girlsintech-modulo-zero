let input = require('fs').readFileSync('1134/stdin', 'utf8');
let lines = input.split('\n');
let alcool = 0;
let gasolina = 0;
let diesel = 0;

lines.forEach(numero =>{
    numero = parseInt(numero)
    switch(numero){
        case 1:
            alcool++
            break;
        case 2:
            gasolina++
            break;
        case 3:
            diesel++
            break;
        case 4:
            break;
        default:
            

    }
})

console.log(`MUITO OBRIGADO\nAlcool: ${alcool}\nGasolina: ${gasolina}\nDiesel: ${diesel}`)