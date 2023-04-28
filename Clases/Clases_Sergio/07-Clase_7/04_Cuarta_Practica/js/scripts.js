/*Dado el nombre y la caliificación cuantitativa(0,100) , se pide hallar la calificación cualitativa, de acuerdo con:
 rango     Nota Cualitativa
  0-59          D
  60-79         C
  80-89         B
  90-100        A
  
  Imprimir la nota cualitativa
  */

var notaCuantitativa,nombre,notaCualitativa="";

nombre= prompt("Nombre estudiante: ");
notaCuantitativa=parseInt(prompt("Nota: "));

if (notaCuantitativa<60){
 notaCualitativa="D";
}
else if(60<=notaCuantitativa<79){
 notaCualitativa="C";
}
else if(80<=notaCuantitativa<89){
 notaCualitativa="B";
}
else if(90<=notaCuantitativa<100){
 notaCualitativa="A";
}
else{
    alert("Error")
}

alert(`La nota del estudiante: ${notaCualitativa}`);