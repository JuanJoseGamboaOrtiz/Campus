/*

 */

function calcularCuotaPersonal(monto,interes,plazo,estrato){
    let valorCuota=0;
    switch(estrato){
        case 1:
            valorCuota=((monto+ monto*(interes/100)*plazo)/plazo)*0.5;
            break
        case 2:
            valorCuota=((monto+ monto*(interes/100)*plazo)/plazo)*0.7;
            break
        case 3:
            valorCuota=((monto+ monto*(interes/100)*plazo)/plazo)*0.8;
            break
        default:
            valorCuota=((monto+ monto*(interes/100)*plazo)/plazo);
    }

    return valorCuota;
}

function calcularCuotraEmpresaria(monto,valorInteres,plazo){
    let valorCuota=((monto+ monto*(valorInteres*plazo))/plazo);
    return valorCuota
}


function creditoPersonal(){
    console.log(`----CREDITO PERSONAL-----`)
    let monto=parseFloat(prompt("Ingrese el monto: "));
    let interes=parseFloat(prompt("(%) Interés mensual: "));
    let plazo=parseInt(prompt("Plazo en meses: "));
    let estrato=parseInt(prompt("Estrato(1,2,3,4,5): "));
    let valorCuota=calcularCuotaPersonal(monto,interes,plazo,estrato);
    console.log(`Valor cuota crédito personal: ${valorCuota}`);
}

function creditoEmpresarial(){
    console.log(`----CREDITO EMPRESARIAL-----`)
    let monto=parseFloat(prompt("Ingrese el monto: "));
    let valorInteres=parseFloat(prompt("valor Interés mensual: "));
    let plazo=parseInt(prompt("Plazo en meses: "));
    let valorCuota=calcularCuotraEmpresaria(monto,valorInteres,plazo);
    console.log(`Valor cuota crédito empresarial: ${valorCuota}`);
}

let opcion;

do {
    console.log("-------MENU DE CREDITOS--------\n1) Credito Personal.\n2) Credito Empresarial.\n3) Salir.")
    opcion=parseInt(prompt("Escriba la opciòn del menu al que quiera acceder"));
    if(opcion===1){
        creditoPersonal();
    }
    else if(opcion===2){
        creditoEmpresarial();
    }
    else{
        console.log("Entrada invalida");
    }
} while (opcion!==3);

