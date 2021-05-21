let read = require('readline-sync');

let valores = read.question().split(" ");

let A = parseInt(valores[0]);
let B = parseInt(valores[1]);
let C = parseInt(valores[2]);

console.log(A,B,C)

let MaiorAB = (A + B + Math.abs(A - B)) / 2;

if (MaiorAB > C) {
  console.log(MaiorAB, "eh o maior");
} else {
  console.log(C, "eh o maior");
}
