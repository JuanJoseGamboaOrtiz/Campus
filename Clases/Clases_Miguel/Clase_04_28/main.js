let formulario= document.querySelector('#form');
formulario.addEventListener('submit',(e)=>{
    let date =Object.fromEntries(new FormData(e.target));
    console.log(date);
    e.preventDefault();
});

// let div=document.querySelector('#myDiv');
// let fragment=document.createDocumentFragment();
// const texto = `<h1>Hola</h1>`;
// const textoR= new DOMParser().parseFromString(texto,'text/html').body.children[0];


// fragment.append(textoR);
// console.log(fragment.children[0]);

// div.append(fragment.children[0]);