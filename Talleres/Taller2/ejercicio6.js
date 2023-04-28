// 6. Construir el algoritmo en Javascript para un programa
// para cualquier cantidad de estudiantes que lea el nombre,
// el sexo y la nota definitiva y halle al estudiante con la mayor
// nota y al estudiante con la menor nota y cuantos eran
// hombres y cuantos mujeres.

const n = parseInt(prompt('Digite el número de estudiantes'));
let estudiantes=[];
let hombres=0;
let mujeres=0;
let notaMayor=0;
let notaMenor=0;
indiceMayor=0;
indiceMenor=0;

for(let i=0;i<n;i++){
    let estudiante=[];
    estudiante.push(prompt('Digite el nombre del estudiante'));
    estudiante.push(prompt('Escriba F(Femenino) o M(Masculino)'));
    estudiante.push(parseFloat(prompt('Digite la nota definitiva')));
    estudiantes.push(estudiante);
    if (i===0){
        notaMayor=estudiante[2];
        notaMenor=estudiante[2];
    }else{
        if(estudiante[2]>notaMayor){
            notaMayor=estudiante[2];
            indiceMayor=i;
        }
        if(estudiante[2]<notaMenor){
            notaMenor=estudiante[2];
            indiceMenor=i;
        }
    }
    if (estudiante[1].toUpperCase()==='M'){
        hombres+=1;
    }else if(estudiante[1].toUpperCase()==='F'){
        mujeres+=1;
    }
}

console.log(`El estudiante con la nota mayor es ${estudiantes[indiceMayor][0]} y su nota es ${estudiantes[indiceMayor][2]},El estudiante con la menor nota es ${estudiantes[indiceMenor][0]} y su nota es ${estudiantes[indiceMenor][2]}, hay un total de ${hombres} hombres y ${mujeres} mujeres`);