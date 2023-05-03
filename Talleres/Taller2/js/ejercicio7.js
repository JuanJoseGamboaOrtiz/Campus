// 7. Programa que pida el ingreso del nombre y precio de un artículo y la
// cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
// en su factura.


function factura(nombre,precio,cantidad){
    return ` el precio de que debe pagar es ${precio*cantidad} por los ${cantidad} articulos del tipo ${nombre} `;
}

const texto=document.querySelector('.show-answer h3');


document.querySelector('form').addEventListener('submit',e=>{
    e.preventDefault();
    const data= Object.fromEntries( new FormData(e.target));

    const valores=Object.values(data);

    const texto1=factura(...valores);

    texto.innerHTML=texto1;

    boton1.addEventListener('click',(e)=>{
        wrapper.classList.add('active');
    })
})