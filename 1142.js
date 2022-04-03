var input = require('fs').readFileSync('stdin', 'utf8');
let linhas =parseInt(input);
let lista = []
let numeros = []
for(let i = 1; i<= linhas*4; i++){
    lista.push(i)
}
for(let i = 3; i <= linhas*4; i = i+4){
    lista[i] = "PUM"
    
}
for(let i = 0; i < linhas; i++){
    linha = lista.splice(0,4)
    console.log(linha.join(' '))
}
