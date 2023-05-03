// 5. Construir el algoritmo que lea por teclado dos números,
// si el primero es mayor al segundo informar su suma y
// diferencia, en caso contrario, informar el producto y la
// división del primero respecto al segundo.

const texto=document.querySelector('.show-answer h3');


function dosNumeros(num1,num2){
    if (num1>num2){
        return `La suma es ${num1+num2} y la diferencia es ${num1-num2}`
    }else if(num2>num1){
        return `El producto es ${num1*num2} y la división es ${num1/num2}`
    }
}

document.querySelector('form').addEventListener('submit',e=>{
    e.preventDefault();
    const data= Object.fromEntries(new FormData(e.target));

    const valores=Object.values(data);
    const texto1=dosNumeros(...valores)
    texto.innerHTML=texto1;

    boton1.addEventListener('click',(e)=>{
        wrapper.classList.add('active');
    })
})