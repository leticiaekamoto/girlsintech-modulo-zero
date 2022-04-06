let input = require('fs').readFileSync('1113/stdin', 'utf8');
let lines = input.split('\n');
let lista = []

lines.forEach(item => {
    let linha = item.split(' ')
    linha.forEach(dado =>{
        dado = parseInt(dado.split('\n'))
        lista.push(dado)        
    }) 
    let item1 = parseInt(linha[0])
    let item2 = parseInt(linha[1])
        if(item1 < item2){
            console.log(`Crescente`)
        }else if(item1 > item2){
            console.log(`Decrescente`)
        }else{
            
        } 
});

