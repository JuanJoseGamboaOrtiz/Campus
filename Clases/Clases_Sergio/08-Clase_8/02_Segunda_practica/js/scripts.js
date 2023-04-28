/*
Se ingresan letras hasta que la letra ingresada sea FIN y se almacena en un array
Una vez se tenga el arreglo, se pide calcular la cantidad de letras "a" que se encuentran
en el arreglo.
*/

/*
Métodos para agregar o eliminar elementos de un arreglo

push: agregar al final
unshift: agregar al incio

Métodos para elimnar
pop: Eliminar el ultimo
delete: Eliminar por posición

 */

let letra,cantidadLetras=0,listaLetras=new Array();

letra=prompt("Letra: ");

while (letra!=="FIN"){
    listaLetras.push(letra);
    letra=prompt("Letra: ");
}

for(var i=0;i<listaLetras.length;i++){
    for( var j=0; j<listaLetras[i].length;j++){
        if (listaLetras[i][j]==="a"){
            cantidadLetras++ ;
        }
    }
}

alert(`Cantidad de letras a: ${cantidadLetras}`);



