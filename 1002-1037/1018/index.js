let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let read = input.split('\n');

let valor = parseInt(read.shift());
let cem = 0,
  cinquenta = 0,
  vinte = 0,
  dez = 0,
  cinco = 0,
  dois = 0,
  um = 0;

console.log(valor);
while (valor > 0) {
  if (valor >= 100) {
    cem++;
    valor -= 100;
  } else if (valor >= 50) {
    cinquenta++;
    valor -= 50;
  } else if (valor >= 20) {
    vinte++;
    valor -= 20;
  } else if (valor >= 10) {
    dez++;
    valor -= 10;
  } else if (valor >= 5) {
    cinco++;
    valor -= 5;
  } else if (valor >= 2) {
    dois++;
    valor -= 2;
  } else {
    um++;
    valor -= 1;
  }
}
console.log(cem, "nota(s) de R$ 100,00");
console.log(cinquenta, "nota(s) de R$ 50,00");
console.log(vinte, "nota(s) de R$ 20,00");
console.log(dez, "nota(s) de R$ 10,00");
console.log(cinco, "nota(s) de R$ 5,00");
console.log(dois, "nota(s) de R$ 2,00");
console.log(um, "nota(s) de R$ 1,00");
