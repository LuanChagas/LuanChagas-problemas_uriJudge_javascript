let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let read = input.split('\n');

const pi = 3.14159;
let raio = read.shift();

let volume = (4.0/3) * pi * Math.pow(raio,3);

console.log("VOLUME =",volume.toFixed(3))