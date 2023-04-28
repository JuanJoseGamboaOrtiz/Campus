/*
Dada la información de los N vendedores:
- Documento
- Nombre
- Tipo de Vendedor (1: Puerta a Puerta,2: Telemercadeo,3: Ejecutivo de ventas)
- Valor de las ventas del mes

Se pide:
- Valor a pagar a cada vendedor por comisiones
- Valor total a pagar
Tabla Liquidacíón de comisiones
Tipo            (%)Aplica al valor de las ventas
1               25%
2               15%
3               20%
*/ 

let numeroVendedores;
let nombre,documento,tipoVendedor,valor;
let valorPagar=0,totalPagar=0;

numeroVendedores= parseInt(prompt("Cantidad de Vendedores"));

for (let i=0;i<numeroVendedores;i++){
    nombre = prompt(`Nombre del vendedor ${i}`);
    documento = prompt(`documento del vendedor ${i}`);
    tipoVendedor = parseInt(prompt(`tipo de vendedor ${i}  (1,2,3)`));
    valor= parseFloat(prompt(`Ventas del mes del vendedor ${i}`));

    switch (tipoVendedor){
        case 1:
            valorPagar=valor*0.25;
            break
        case 2:
            valorPagar=valor*0.15;
            break
        case 3:
            valorPagar=valor*0.20;
            break
    }

    totalPagar+=valorPagar;

    alert(`Valor comisión vendedor ${valorPagar}`);
}

alert(`Total pagado ${totalPagar}`);
