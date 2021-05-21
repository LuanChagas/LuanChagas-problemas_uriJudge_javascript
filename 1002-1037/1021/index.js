//let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let read = require('readline-sync');

let valorTotal = read.question().split(".");
let valorInt = parseInt(valorTotal[0]);
let valorMo = parseInt(valorTotal[1]);

let cem = 0,
  cinquenta = 0,
  vinte = 0,
  dez = 0,
  cinco = 0,
  dois = 0,
  um = 0,
  CiqCent = 0,
  vinteCent = 0,
  dezCent = 0,
  CincoCent = 0,
  umCent = 0;

while (valorInt > 0 && valorMo > 0) {
  if (valorInt >= 100) {
    cem++;
    valorInt -= 100;
  } else if (valorInt >= 50) {
    cinquenta++;
    valorInt -= 50;
  } else if (valorInt >= 20) {
    vinte++;
    valorInt -= 20;
  } else if (valorInt >= 10) {
    dez++;
    valorInt -= 10;
  } else if (valorInt >= 5) {
    cinco++;
    valorInt -= 5;
  } else if (valorInt >= 2) {
    dois++;
    valorInt -= 2;
  } else if (valorInt >= 1) {
    um++;
    valorInt -= 1;
  }
}
while (valorMo > 0) {
  if (valorMo >= 50) {
    CiqCent++;
    valorMo -= 50;
  } else if (valorMo >= 25) {
    vinteCent++;
    valorMo -= 25;
  } else if (valorMo >= 10) {
    dezCent++;
    valorMo -= 10;
  } else if (valorMo >= 5) {
    CincoCent++;
    valorMo -= 5;
  } else if (valorMo >= 1) {
    umCent++;
    valorMo -= 1;
  }
}
console.log("MOEDAS:");
console.log(cem, "nota(s) de R$ 100.00");
console.log(cinquenta, "nota(s) de R$ 50.00");
console.log(vinte, "nota(s) de R$ 20.00");
console.log(dez, "nota(s) de R$ 10,00");
console.log(cinco, "nota(s) de R$ 5.00");
console.log(dois, "nota(s) de R$ 2.00");
console.log("MOEDAS:");
console.log(um, "moeda(s) de R$ 1.00");
console.log(CiqCent, "moeda(s) de R$ 0.50");
console.log(vinteCent, "moeda(s) de R$ 0.25");
console.log(dezCent, "moeda(s) de R$ 0.10");
console.log(CincoCent, "moeda(s) de R$ 0.05");
console.log(umCent, "moeda(s) de R$ 0.01");
