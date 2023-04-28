function tomarAnimal(){
    let animales=document.getElementsByClassName('animal');
    animales= Array.from(animales);
    animales.forEach( animal=> {
        console.log(animal.textContent);
    });
}