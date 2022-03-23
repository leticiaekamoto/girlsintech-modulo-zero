let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let quantidade = lines.shift();


for(i = 0; i < quantidade; i++){
    let n = parseInt(lines.shift());

    if(n%2 === 0 && n > 0){
        console.log("EVEN POSITIVE")
    }else if(n%2 === 0 && n < 0){
        console.log("EVEN NEGATIVE")
    }else if(n%2 !== 0 && n > 0){
        console.log("ODD POSITIVE")
    }else if(n%2 !== 0 && n < 0) {
        console.log("ODD NEGATIVE")
    }else if( n === 0){
        console.log("NULL")
    }
};
