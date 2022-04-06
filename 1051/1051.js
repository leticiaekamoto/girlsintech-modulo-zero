var input = require('fs').readFileSync('1051/stdin', 'utf8');
var input = parseFloat(input)

if(input <= 2000){
    console.log("Isento");
}else if(input > 2000 && input <=3000){
    let input = input - 2000
    let imposto1 = (input * 0.08).toFixed(2)
    console.log(`R$ ${imposto1}`)
}else if(input > 3000 && input <=4500){
    let input1= (3000 - 2000)*0.08
    let input2 = (input - 3000)*0.18
    let imposto2 = (input2+ input1).toFixed(2)
    console.log(`R$ ${imposto2}`)
}else if(input > 4500){
    let input1= (3000 - 2000)*0.08
    let input2 = (4500 - 3000)*0.18
    let input3 = (input - 4500)*0.28
    let imposto3 = (input1+input2+input3).toFixed(2)
    console.log(`R$ ${imposto3}`)

}
