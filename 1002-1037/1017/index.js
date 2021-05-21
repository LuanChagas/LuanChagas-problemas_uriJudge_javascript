let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let read = input.split('\n');

let tempo = parseInt(read.shift());
let vm = parseInt(read.shift());

let litros = (vm * tempo) / 12;

console.log(litros.toFixed(3));