// 3. Construir el algoritmo para determinar el voltaje de un
// circuito a partir de la resistencia y la intensidad de corriente.
resistencia = parseFloat(prompt('Ingre el valor de la resistencia en Ohms'));
corriente = parseFloat(prompt('Ingre el valor de la resistencia en Ampers'));

console.log(calcularVoltaje(resistencia.corriente));
function calcularVoltaje(o,a){
    return `El voltaje es ${o*a}V`;
}