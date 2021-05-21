let input = require("fs").readFileSync("/dev/stdin", "utf8");
let read = input.split("\n");

let valorXs = read.shift().split(" ");
let valorYs = read.shift().split(" ");

let xone = parseFloat(valorXs[0]);
let yone = parseFloat(valorXs[1]);

let xtwo = parseFloat(valorYs[0]);
let ytwo = parseFloat(valorYs[1]);


let distancia = Math.pow(xtwo - xone, 2) + Math.pow(ytwo - yone, 2);
let distanciaFinal = Math.sqrt(distancia);

console.log(distanciaFinal.toFixed(4));
