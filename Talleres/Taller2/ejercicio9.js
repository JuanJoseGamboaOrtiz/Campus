// 9. N atletas han pasado a finales en salto triple en los juegos
// olímpicos femenino de 2022. Diseñe un programa que pida por
// teclado los nombres de cada atleta finalista y a su vez, sus
// marcas del salto en metros. Informar el nombre de la atleta
// campeona que se quede con la medalla de oro y si rompió
// récord, reportar el pago que será de 500 millones. El récord
// esta en 15,50 metros.

const n= parseInt(prompt('Digite el número de atletas'));
let nombre="";
let marca=0;
let nombres="";
let marcas;
for (let i=0;i<n;i++){
    nombres=prompt('Digite el nombre de la atleta');
    marcas=parseFloat(prompt('Digite la marca'));
    if (marcas>marca){
        marca=marcas;
        nombre=nombres;
    }
}

console.log(`La ganadora de la medalla de oro es ${nombre}`);
if(marca>15.50){
    console.log("Rompio el record se gano 500 millones");
}