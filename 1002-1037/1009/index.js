let read = require('readline-sync');
 

let nome = read.question();
let salario = parseFloat(read.question());
let vendas = parseFloat(read.question());

let comissao = salario + (vendas * .15);

console.log("TOTAL = R$",comissao.toFixed(2));


