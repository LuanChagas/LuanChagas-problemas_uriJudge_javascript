let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let read = input.split('\n');

let X = parseInt(read.shift());
let Y = parseFloat(read.shift());

let kml = X / Y;

console.log(kml.toFixed(3),"km/l");
