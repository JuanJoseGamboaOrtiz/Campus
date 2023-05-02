// 4. Construir el algoritmo que solicite el nombre y edad de 3
// personas y determine el nombre de la persona con mayor edad.

let p1=[];
let p2=[];
let p3=[];
p1[0] = prompt("Ingresa un nombre:");
p1[1] = parseInt(prompt("Ingresa una edad:"));
p2[0] = prompt("Ingresa un nombre:");
p2[1] = parseInt(prompt("Ingresa una edad:"));
p3[0] = prompt("Ingresa un nombre:");
p3[1] = parseInt(prompt("Ingresa una edad:"));

console.log(mayorEdad(p1,p2,p3));
function mayorEdad(p1,p2,p3){
    if (p1[1]>p2[1] && p1[1]>p2[1]){
        return `La persona de mayor edad es ${p1[0]}`;
    }else if(p2[1]>p1[1] && p2[1]>p3[1]){
        return `La persona de mayor edad es ${p2[0]}`;
    }else if(p3[1]>p2[1] && p3[1]>p1[1]){
        return `La persona de mayor edad es ${p3[0]}`
    }
}