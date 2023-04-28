// 7. Programa que pida el ingreso del nombre y precio de un artículo y la
// cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
// en su factura.

const nombre = prompt('Digite el nombre del articulo');
const precio = parseInt(prompt('Digite el precio del artículo'));
const cantidad = parseInt(prompt('Digite las unidades del articulo'));

console.log(factura());
function factura(nombre,precio,cantidad){
    return ` el precio de que debe pagar es ${precio*cantidad} por los ${cantidad} articulos del tipo ${nombre} `;
}