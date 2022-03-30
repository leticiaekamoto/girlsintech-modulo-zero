var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var lista = []

lines.forEach(item => {
    var linha = item.split(' ')
    linha.forEach(dado =>{
        var dado = parseInt(dado.split('\n'))
        lista.push(dado)        
    }) 
    var item1 = parseInt(linha[0])
    var item2 = parseInt(linha[1])
        if(item1 < item2){
            console.log(`Crescente`)
        }else if(item1 > item2){
            console.log(`Decrescente`)
        }else{
            
        } 
});

