let read = require("readline-sync");

let valores = read.question().split(" ");

let A = parseInt(valores[0]);
let B = parseInt(valores[1]);
let C = parseInt(valores[2]);


let areaTriangulo = (A * C) / 2;
let areaCirculo = 3.14159 * Math.pow(C, 2);
let areaTrapezio = ((A + B) * C) / 2;
let areaQuadrado = B * B;
let areaRetangulo = A * B;

console.log("TRIANGULO:", areaTriangulo.toFixed(3));
console.log("CIRCULO:", areaCirculo.toFixed(3));
console.log("TRAPEZIO:", areaTrapezio.toFixed(3));
console.log("QUADRADO:", areaQuadrado.toFixed(3));
console.log("RETANGULO:", areaRetangulo.toFixed(3));
