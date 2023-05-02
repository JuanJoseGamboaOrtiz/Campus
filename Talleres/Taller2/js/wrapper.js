const wrapper = document.querySelector('.wrapper');
const boton1 = document.querySelector('.boton');
const boton2 = document.querySelector('.icon-close');



boton2.addEventListener('click',(e)=>{
  wrapper.classList.remove('active');
})