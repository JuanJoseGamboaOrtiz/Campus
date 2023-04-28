// 2. Dado un número indicar si es par o impar y si es mayor de 10.

const num =parseInt(prompt('Digite un número entero'));
console.log(numeroPar(num));
function numeroPar(num){
    mayorDiez= num>10? 'Mayor que diez' : 'Menor que diez';
    par= num%2==0 ? 'Par': 'Impar';

    return `El número es ${par} y es ${mayorDiez}`;
}