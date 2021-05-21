let input = require("fs").readFileSync("/dev/stdin", "utf8");
let read = input.split('\n');


let Valor = read.shift().split(" ");
let A = parseFloat(Valor[0]);
let B = parseFloat(Valor[1]);
let C = parseFloat(Valor[2]);



let delta = Math.pow(B,2) - 4 * A * C;

if(delta <0 || A === 0){
    console.log("Impossivel calcular");
}else {
    let xP = (-B + Math.sqrt(delta)) / (2*A);
    let x = (-B - Math.sqrt(delta)) / (2*A);
    console.log("R1 =",xP.toFixed(5));
    console.log("R2 =",x.toFixed(5));
}

