let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let readLineSync = input.split('\n');

let linhaUm = readLineSync.shift();
let linhaDois = readLineSync.shift();

linhaUm = linhaUm.split(" ");
linhaDois = linhaDois.split(" ");

let pagar = parseFloat((linhaUm[1] * linhaUm[2]) + (linhaDois[1] * linhaDois[2])
);

console.log("VALOR A PAGAR: R$", pagar.toFixed(2));
