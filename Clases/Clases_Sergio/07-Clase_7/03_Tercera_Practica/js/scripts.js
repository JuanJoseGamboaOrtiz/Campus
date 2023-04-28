/*Dado el nombre y salario de un empleado calcular el subsidio de transporte si el salario es menor o igual a $1000000 el subsidio es de $140000*/ 

var nombre,salario,subsidio=0;

nombre=prompt("Nombre empleado:");
salario=parseInt(prompt("Salario: "));

if (salario<=1_000_000){
    subsidio=140_000;
}else{
    subsidio=0;
};

alert("Subsidio de transporte:" +subsidio);