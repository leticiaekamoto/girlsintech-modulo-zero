let input = require('fs').readFileSync('1094/stdin', 'utf8');
let lista = input.split('\r');
let n = lista.shift();

let coelho=0;
let sapo =0;
let rato = 0;
let total = 0;
for(let i = 0; i < n; i++){
    item = lista[i].split(' ');
    let quantidade = Number(item[0]);
    if(item.includes("C") === true){
        coelho+=quantidade;
    }else if(item.includes("S")===true){
        sapo+=quantidade;
    }else if(item.includes("R")===true){
        rato+=quantidade;
    }
    total+=quantidade;
}

let percentualcoelho = ((coelho*100)/total).toFixed(2);
let percentualrato = ((rato*100)/total).toFixed(2);
let percentualsapo= ((sapo*100)/total).toFixed(2);

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${coelho}`);
console.log(`Total de ratos: ${rato}`);
console.log(`Total de sapos: ${sapo}`);
console.log(`Percentual de coelhos: ${percentualcoelho} %`);
console.log(`Percentual de ratos: ${percentualrato} %`);
console.log(`Percentual de sapos: ${percentualsapo} %`);