//SI no se dice si es let o var o const entonces es globarl

function ver(){
    y=2;
    let z=1;
 
}

// ver();
// console.log(y);
// console.log(z);


//Practica2

function letTest(){
    let x=31;
    if(true){
        let x=71;
        alert(x)
    };
    alert(x);
}

letTest();
