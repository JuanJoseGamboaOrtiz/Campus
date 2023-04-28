/* Dado el nombre y estrato de un usuario de servicio de agua se pide hallar el valor tárifa básica,
con base en :

    Estrato   Tarifa Básica
    1           10000
    2           15000
    3           30000
    4           50000
    5           75000

    Imprimir le valor de la tárifa básica

    */

var nombre,estrato,tarifaBasica=0;

nombre=prompt("Nombre: ");
estrato=parseInt(prompt("Estrato: "));

switch(estrato){
    case 1:
        tarifaBasica=10000;
        break
    case 2:
        tarifaBasica=15000;
        break
    case 3:
        tarifaBasica=30000;
        break
    case 4:
        tarifaBasica=50000;
        break
    case 5:
        tarifaBasica=75000;
        break
}

alert(`La tarifa basica es: ${tarifaBasica}`);
