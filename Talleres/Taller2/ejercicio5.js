// 5. Construir el algoritmo que lea por teclado dos números,
// si el primero es mayor al segundo informar su suma y
// diferencia, en caso contrario, informar el producto y la
// división del primero respecto al segundo.

const num1=parseFloat(prompt('Digite el primer número'));
const num2=parseFloat(prompt('Digite el segundo número'));

console.log(dosNumeros(num1,num2));
function dosNumeros(num1,num2){
    if (num1>num2){
        return `La suma es ${num1+num2} y la diferencia es ${num1-num2}`
    }else if(num2>num1){
        return `El producto es ${num1*num2} y la división es ${num1/num2}`
    }
}