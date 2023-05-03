// 3. Construir el algoritmo para determinar el voltaje de un
// circuito a partir de la resistencia y la intensidad de corriente.

function calcularVoltaje(o,a){
    return `El voltaje es ${o*a}V`;
}

const texto=document.querySelector('.show-answer h3');


document.querySelector('form').addEventListener('submit',e=>{
    e.preventDefault();
    const data= Object.fromEntries( new FormData(e.target));

    const valores=Object.values(data);

    const texto1=calcularVoltaje(valores[0],valores[1]);

    texto.innerHTML=texto1;

    boton1.addEventListener('click',(e)=>{
        wrapper.classList.add('active');
    })
})