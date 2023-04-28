// a. Declarar variables llamadas 'continente', 'país',
// 'Departamento', 'ciudad', 'barrio' y 'dirección', y asigne sus
// valores de cantidad de habitantes, de acuerdo con su contexto
// real en su propio país.
// b. Registre sus valores en la consola.

let continente= ['America', 1_002_000_000];
let pais= ['Colombia', 51_520_000];
let departamento=['Santander' ,2_280_000];
let ciudad= ['Bucaramanga', 581_530];
let barrio = ['Universidad',2500];
let dirección= 'Cra21 #22-22';

// 2.
// a. Declare una variable llamada 'esTercerMundista' y
// establezca su valor de acuerdo con su país. La variable debe
// contener un valor booleano. También declarar una variable
// 'idioma', pero no le asigne ningún valor todavía.
// b. Registrar los valores de 'esTercerMundista',
// 'continente', 'país' e 'idioma'

console.log(continente);
console.log(pais);
console.log(departamento);
console.log(ciudad);
console.log(barrio);
console.log(dirección);

let esTercermundista=true;
let idioma;

console.log(esTercermundista);
console.log(continente);
console.log(pais);
console.log(idioma);

// 3.
// a. Establezca el valor de 'idioma' en el idioma que se
// habla donde vive.
// b. Piense en qué variables deberían ser variables
// constantes (¿qué valores nunca cambian y cuáles podrían
// cambiar?). Luego, cambia estas variables a const.
// c. observe lo que sucede.

idioma='Español';


// 4.
// a. Si su país se dividiera por la mitad, y cada mitad contendría la
// mitad de la población, Entonces, ¿cuántas personas vivirían en cada
// mitad?
// b. Aumente la población de su país en 1M y registre el resultado
// en la consola
// c. Finlandia tiene una población de 6 millones. ¿Tu país tiene más
// gente que ¿Finlandia?
// d. La población promedio de un país es de 33 millones de
// personas. ¿Tu país tiene menos gente que el país promedio?
// e. Basado en las variables que creó, cree una nueva variable
// 'descripción' que contiene una cadena con este formato: 'Colombia
// está en América, y Bucaramanga que está en el departamento de
// Santander tiene un barrio llamado el prado y sus 3000 personas
// hablan inglés.

let personasMitad=(pais[1]/2);
console.log(`En cada mitad viven ${personasMitad}`);
pais[1]+=1_000_000;
console.log(`La población de mi pais mas 1M es ${pais[1]}`);
let poblacionFinlandia=6_000_000;
console.log(`El pais con mayor población es ${(pais[1]>poblacionFinlandia? "Colombia":"Finlandia")}`);
let poblacionPromedio=33_000_000;
console.log(`Mi pais tiene mas población que la media- ${(pais[1]>poblacionPromedio? true: false)}`)

const descripción= `${pais[0]} está en ${continente[0]}, y ${ciudad[0]} que está en el departamento de ${departamento[0]} tiene un barrio llamado ${barrio[0]} y sus ${barrio[1]} hablan ${idioma}`;


// Métodos en cadenas
// Cree 10 variables de tipo cadena donde almacene valores string en
// Ingles y aplique cada una de los siguientes métodos de cadena
// 1. length
// 2. includes()
// 3. back ticks o templatre strings
// 4. trimStart()
// 5. trimEnd()
// 6. replace
// 7. slice
// 8. split
// 9. ToUpperCase
// 10. ToLowerCase


let Prueba= 'Green';
let Prueba2= 'Pencil';
let Prueba3= 'Butter'
let Prueba4= '   Butterfly';
let Prueba5= 'Hate     ';
let Prueba6= 'Speech';
let Prueba7= 'Love';
let Prueba8= 'D,r,e,s,s';
let Prueba9= 'Pocket';
let Prueba0= 'Climb' ;

console.log(Prueba.length);
console.log(Prueba2.includes('fit'));
console.log(`${Prueba3}`);
console.log(Prueba4.trimStart());
console.log(Prueba5.trimEnd());
console.log(Prueba6.replace('Speech','Speed'));
console.log(Prueba7.slice(0,6));
console.log(Prueba8.split(","));
console.log(Prueba9.toUpperCase());
console.log(Prueba0.toLowerCase());



