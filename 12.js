// crear objeto 
const producto = {
    // propiedad del objeto 
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}
// console.log(producto.precio);
// console.log(producto["precio"]);
// 

// agregar o quitar propiedad
producto.imagen = "imagen.jpg"; //agregar
delete producto.disponible;                                // eliminar

console.log(producto);