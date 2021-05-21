let input = require("fs").readFileSync("/dev/stdin", "utf8");
let read = input.split('\n');

let Valor = read.shift().split(" ");
let A = Valor[0];
let B = Valor[1];
let C = Valor[2];
let D = Valor[3];

if((B > C && D > A) && (C + D > A + B) && (C > 0 && D > 0)&& (A % 2 ===0)){
    console.log("Valores aceitos");
}else {
     console.log("Valores nao aceitos");
}