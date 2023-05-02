// 1. Construir el algoritmo para un programa que ingrese tres
// notas de un alumno, si el promedio es menor o igual a 3.9
// mostrar un mensaje "Estudie“, de lo contrario un mensaje que
// diga "becado"

const texto=document.querySelector('.show-answer');

document.querySelector('form').addEventListener('submit',e=>{
    e.preventDefault();
    const data= Object.fromEntries( new FormData(e.target));

    const valores=Object.values(data);

    const total=valores.reduce((total,actual) => parseFloat(total)+ parseFloat(actual));
    const promedio= (total/3).toFixed(1);
    if(promedio>3.9){
        var texto1='está becado.';
    }else{
        var texto1='debe seguir estudiando.'
    }
    texto.innerHTML=`
        <h3>
            El promedio es ${promedio} por lo tanto el estudiante ${texto1} 
        </h3>
    `;

    boton1.addEventListener('click',(e)=>{
        wrapper.classList.add('active');
    })
})

// const a = parseFloat(prompt('Digite la nota de 0 a 5'));
// const b = parseFloat(prompt('Digite la nota de 0 a 5'));
// const c = parseFloat(prompt('Digite la nota de 0 a 5'));
// console.log(notasAlumno(a,b,c));
// function notasAlumno(a,b,c){
//     return ((a+b+c/3)>3.9 ? 'Becado':'Estudie' );
// }



