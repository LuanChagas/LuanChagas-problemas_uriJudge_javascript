let read = require("readline-sync");

let produtos = [
  [1, "Cachorro Quente", 4.0],
  [2, "X-Salada", 4.5],
  [3, "X-Bacon", 5.0],
  [4, "Torrada Simples", 2.0],
  [5, "Refrigerante", 1.5],
];

let valor = read.question().split(" ");
let codigo = parseInt(valor[0]);
let quantidade = parseInt(valor[1]);
let total = 0;

for (let p of produtos) {
  if (codigo == p[0]) {
    total = quantidade * p[2];
  }
}

console.log("Total: R$", total.toFixed(2));
