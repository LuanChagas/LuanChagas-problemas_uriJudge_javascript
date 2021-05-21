let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let read = input.split('\n');

let dias = read.shift();
let ano = 0, mes = 0 , dia = 0;

while(dias > 0){
    if(dias >= 365){
        ano++,
        dias-=365;
    } else if(dias >= 30){
        mes++;
        dias-=30;
    }else {
        dia++;
        dias--;
    }
}

console.log(ano,"ano(s)");
console.log(mes,"meses(s)");
console.log(dia,"dia(s)");