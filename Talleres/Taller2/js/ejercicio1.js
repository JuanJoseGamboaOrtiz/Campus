// 1. Construir el algoritmo para un programa que ingrese tres
// notas de un alumno, si el promedio es menor o igual a 3.9
// mostrar un mensaje "Estudie“, de lo contrario un mensaje que
// diga "becado"
const a = parseFloat(prompt('Digite la nota de 0 a 5'));
const b = parseFloat(prompt('Digite la nota de 0 a 5'));
const c = parseFloat(prompt('Digite la nota de 0 a 5'));
console.log(notasAlumno(a,b,c));
function notasAlumno(a,b,c){
    return ((a+b+c/3)>3.9 ? 'Becado':'Estudie' );
}



