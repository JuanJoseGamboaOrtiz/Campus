// 8. Programa que Ingrese por teclado:
// a. el valor del lado de un cuadrado para mostrar por pantalla el
// perímetro del mismo
// b. la base y la altura de un rectángulo para mostrar el área del
// mismo


function permietroArea(arista,base,altura){
    return `El perimetro del cuadrado es ${arista*4} y el area del rectangulo es ${base*altura}`
}

const texto=document.querySelector('.show-answer h3');


document.querySelector('form').addEventListener('submit',e=>{
    e.preventDefault();
    const data= Object.fromEntries( new FormData(e.target));

    const valores=Object.values(data);
    const texto1=permietroArea(...valores);

    texto.innerHTML=texto1;

    boton1.addEventListener('click',(e)=>{
        wrapper.classList.add('active');
    })
})