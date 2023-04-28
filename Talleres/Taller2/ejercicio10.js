// 10. Desarrolle un programa cíclico que capture un dato
// numérico cada vez, y los vaya acumulando. El programa se
// detiene cuando el usuario digita un cero. El programa debe
// mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
// PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
// VALOR Y MENOR VALOR.

let num=parseFloat(prompt('Ingrese un número'));
let sum=0;
let cont=0;
let mayor=0;
let menor=0;
while (num!=0){
    cont+=1;
    sum+=num;
    if(num>mayor){
        mayor=num;
    }
    if(num<menor){
        menor=num;
    }
    num=parseFloat(prompt('Ingrese el siguiente número'));
}

console.log(`La sumatoria de los valores es ${sum}, el valor promedio ${sum/cont},la cantidad de valores ${cont}, el mayor valor es ${mayor} y el menor ${menor}`);