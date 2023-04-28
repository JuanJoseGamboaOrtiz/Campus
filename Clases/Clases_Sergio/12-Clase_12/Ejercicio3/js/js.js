function obtenerelementos(){
    let etiqueta=document.querySelectorAll('p');
    let clase=document.querySelectorAll('.clase');
    etiqueta=Array.from(etiqueta);
    clase=Array.from(clase);
    etiqueta.forEach( elemento=>{console.log(elemento.innerText);})
    clase.forEach( clase=>{console.log(clase.innerText);})
    
}