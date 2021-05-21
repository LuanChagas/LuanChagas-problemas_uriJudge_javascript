let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let read = input.split('\n');

let distancia = parseInt(read.shift());

let tempo = distancia * 2;

console.log(tempo,"minutos");
