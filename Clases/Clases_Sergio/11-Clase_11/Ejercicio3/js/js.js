/*
Dada la información sobre un usuario del servicio de agua:
- Nombre
- Estrato (1,2,3,4,5)
 Se pide calcular el valor a pagar por el servicio de agua, conociendo que el servicio es la suma de la tarifa
 más valor del consumo.
 La tarifa básica depende del estrato, asi;

 Estrato tarifa básica
    1      $10000
    2      $15000
    3      $30000
    4      $60000
    5      $80000
*/

function liquidarServicio(){
    let nombre= document.getElementById('nombre').value;
    let estrato= parseInt(document.getElementById('estrato').value);
    let consumo= parseInt(document.getElementById('consumo').value);
    let tarifaBasica,valorPagar,valorConsumo;
    valorConsumo=consumo*100;

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
            tarifaBasica=60000;
            break
        case 5:
            tarifaBasica=80000;
            break
    }

    valorPagar=tarifaBasica+valorConsumo;

    let titulo=document.getElementById('titulo');
    let valorPagars=document.getElementById('valorPagar');
    titulo.innerHTML='Valor a pagar';
    valorPagars.innerHTML=valorPagar;
    console.log(nombre);

}

let tabla=document.querySelector(".table");

tabla.addEventListener('keyup',e=>{
    if (e.key==="Enter"){
        console.log("hola");
        liquidarServicio();
    }
});