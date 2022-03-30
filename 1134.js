var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var alcool = 0;
var gasolina = 0;
var diesel = 0;

lines.forEach(numero =>{
    var numero = parseInt(numero)
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