let input = require("fs").readFileSync("/dev/stdin", "utf8");
let read = input.split("\n");

let tempo = parseInt(read.shift());

let horas = parseInt(tempo / 60 / 60);
let minutos = parseInt((tempo / 60) % 60);
let segundos = parseInt(tempo % 60);

console.log(horas + ":" + minutos + ":" + segundos);
