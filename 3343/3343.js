let input = require('fs').readFileSync('3343/stdin', 'utf8');
let lines = input.split('\n');

let linha1 = lines[0].split(' ');
let linha2 = lines[1].split('');
let linha3 = lines[2].split(' ');
let numeroDeTitas = parseInt(linha1[0]);
let tamanhoMuralha = parseInt(linha1[1]);
let tamanhoP = linha3[0];
let tamanhoM = linha3[1];
let tamanhoG = linha3[2];
let quantidade = 1;
let i = 0;
while(numeroDeTitas>0){
    if(linha2[i]==="P" && tamanhoMuralha >= tamanhoP){
        tamanhoMuralha-= tamanhoP;
        i++;
        numeroDeTitas--;
    }else if(linha2[i]==="M" && tamanhoMuralha >= tamanhoM){
        tamanhoMuralha-= tamanhoM;
        i++;
        numeroDeTitas--;
    }else if(linha2[i]==="G" && tamanhoMuralha >= tamanhoG){
        tamanhoMuralha-= tamanhoG;
        i++;
        numeroDeTitas--;
    }else if (tamanhoMuralha <=0){
        tamanhoMuralha = parseInt(linha1[1])
        quantidade++;
    }else{
        tamanhoMuralha = parseInt(linha1[1])
        quantidade++;
    }
    
    
}
console.log(quantidade)