function agregarStorage(){
    var nombre=prompt("Nombre:");
    var salario=parseInt(prompt("Salario: "));

    localStorage.setItem(nombre,salario);

    
};

function tomarStorage(){

    let  =localStorage.getItem();
    console.log(nombre);
};

function eliminarStorage(){
    localStorage.removeItem("juan");

}

function limpiarStorage(){
    localStorage.clear();
}