const wrapper = document.querySelector('.wrapper');
const boton1 = document.querySelector('.boton');
const boton2 = document.querySelector('.icon-close');

boton1.addEventListener('click',(e)=>{
  e.preventDefault();
  wrapper.classList.add('active');
})

boton2.addEventListener('click',(e)=>{
  e.preventDefault();
  wrapper.classList.remove('active');
})