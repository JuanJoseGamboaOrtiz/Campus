/*
Liquidación de honorarios para N docentes de cátedra
Información docente:
- Nombre
- Categoria (1,2,3)
- Horas Laboradas en el mes

Se pide valor a pagar por honoraraios al docente y el valor total
a pagar

Categoría Valor Hora
    1       40000
    2       70000
    3       90000
*/

let nombre,categoria,horasLaboradas,numeroDocentes,pagoDocente=0,pagoTotal=0

function honorarios(categoria,horas){
    let valorHora;
    switch (categoria){
        case 1:
            valorHora=40000;
            break
        case 2:
            valorHora=70000;
            break            
        case 3:
            valorHora=90000;
    }

    return valorHora*horas;
}

numeroDocentes=parseInt(prompt("Cuantos profesores son: "));

for (let i=0;i<numeroDocentes;i++){
    nombre=prompt(`Digite el nombre del profesor ${i}: `);
    horasLaboradas=parseFloat(prompt(`Digite la cantidad de horas laboradas: `));
    categoria=parseInt(prompt(`Digite la categoria del profesor`));
    pagoDocente=honorarios(categoria,horasLaboradas);
    pagoTotal+=pagoDocente;
    console.log(`El pago del profesor ${nombre} es de ${pagoDocente}`)
}

console.log(`El pago total a pagar es ${pagoTotal}`);