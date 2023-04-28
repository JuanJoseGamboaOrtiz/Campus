// 8. Programa que Ingrese por teclado:
// a. el valor del lado de un cuadrado para mostrar por pantalla el
// perímetro del mismo
// b. la base y la altura de un rectángulo para mostrar el área del
// mismo
let rectangulo=[];
const ladoCuadrado=parseInt(prompt('Digite la longitud del lado del cuadrado'));
rectangulo.push(parseInt(prompt('Digite la base del rectangulo')));
rectangulo.push(parseInt(prompt('Digite la altura del rectangulo')));

console.log(permietroArea(ladoCuadrado,rectangulo));
function permietroArea(cuadrado,rectangulo){
    perimetro=cuadrado*4;
    area=rectangulo[0]*rectangulo[1];
    return `El perimetro del cuadrado es ${perimetro} y el area del rectangulo es ${area}`
}