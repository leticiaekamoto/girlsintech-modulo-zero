var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var c = parseFloat(lines.shift());


if((a + b > c && a + c > b && b + c > a)){
    var perimetro = (a + b + c).toFixed(1)
    console.log(`Perimetro = ${perimetro}`)
}else{
    var area = (((a + b)*c)/2).toFixed(1)
    console.log(`Area = ${area}`)
}
