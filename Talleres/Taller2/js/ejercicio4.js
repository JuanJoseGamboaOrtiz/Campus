// 4. Construir el algoritmo que solicite el nombre y edad de 3
// personas y determine el nombre de la persona con mayor edad.


function mayorEdad(datos){
    if (datos[1]>datos[3] && datos[1]>datos[5]){
        return `La persona de mayor edad es ${datos[0]}`;
    }else if(datos[3]>datos[1] && datos[3]>datos[4]){
        return `La persona de mayor edad es ${datos[2]}`;
    }else if(datos[5]>datos[3] && datos[5]>datos[1]){
        return `La persona de mayor edad es ${datos[4]}`
    }
}

const texto=document.querySelector('.show-answer h3');


document.querySelector('form').addEventListener('submit',e=>{
    e.preventDefault();
    const data= Object.fromEntries(new FormData(e.target));

    const valores=Object.values(data);
    const texto1=mayorEdad(valores)
    texto.innerHTML=texto1;

    boton1.addEventListener('click',(e)=>{
        wrapper.classList.add('active');
    })
})