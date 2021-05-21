let read = require( "readline-sync");

let valoresNotas = read.question().split(' ');

let n1 = parseFloat(valoresNotas[0]);
let n2 = parseFloat(valoresNotas[1]);
let n3 = parseFloat(valoresNotas[2]);
let n4 = parseFloat(valoresNotas[3]);

let media = ((n1 * 2) + (n2 * 3) + (n3 * 4) + n4) / (2 + 4 + 3 + 1);

console.log("Media:",media.toFixed(1));

if(media >= 7.0){
    console.log("Aluno aprovado.");
}else if(media<5.0){
    console.log("Aluno reprovado.");
}else{
    console.log("Aluno em exame.");
    let notaExame = parseFloat(read.question());
    console.log("Nota do exame:",notaExame);
    let mediaFinal = parseFloat(((notaExame + media ) / 2));
    let final = ( mediaFinal > 5.0) ? "Aluno aprovado." : "Aluno reprovado.";
    console.log(final);
    console.log("Media Final:",mediaFinal.toFixed(1));
}