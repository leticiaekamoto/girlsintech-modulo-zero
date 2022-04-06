let input = require('fs').readFileSync('1043/stdin', 'utf8');
let lines = input.split(' ');

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());


if((a + b > c && a + c > b && b + c > a)){
    let perimetro = (a + b + c).toFixed(1)
    console.log(`Perimetro = ${perimetro}`)
}else{
    let area = (((a + b)*c)/2).toFixed(1)
    console.log(`Area = ${area}`)
}
