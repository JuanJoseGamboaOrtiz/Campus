// // 2. Dado un número indicar si es par o impar y si es mayor de 10.


// 1. Construir el algoritmo para un programa que ingrese tres
// notas de un alumno, si el promedio es menor o igual a 3.9
// mostrar un mensaje "Estudie“, de lo contrario un mensaje que
// diga "becado"

const texto=document.querySelector('.show-answer h3');


document.querySelector('form').addEventListener('submit',e=>{
    e.preventDefault();
    const data= Object.fromEntries( new FormData(e.target));

    const valores=Object.values(data);

    function numeroPar(num){
        mayorDiez= num>10? 'Mayor que diez' : 'Menor que diez';
        par= num%2==0 ? 'Par': 'Impar';

        return `El número es ${par} y es ${mayorDiez}`;
    }

    const texto1=numeroPar(valores[0]);

    texto.innerHTML=texto1;

    boton1.addEventListener('click',(e)=>{
        wrapper.classList.add('active');
    })
})




