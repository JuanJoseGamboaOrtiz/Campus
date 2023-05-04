//Seleccionar componentes
const recuadro=document.querySelector('.info-encabezado');



//Add eventlistener

listeners();
function listeners(){
    recuadro.addEventListener('mouseout', activarPorcentaje);
    recuadro.addEventListener('mouseover', activarPorcentaje);
}

//funciones

function activarPorcentaje(e){
    if (e.target.classList.contains("egresos") || e.target.classList.contains("ingresos")){
        e.target.classList.toggle('activo');
    }
}

