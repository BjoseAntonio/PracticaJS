// Destructouring de objetos 

const producto = {
    // propiedad del objeto 
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// forma anterio 
const nombrProducto = producto.nombreProducto;
const precioProducto = producto.precio;

console.log(nombrProducto);
console.log(precioProducto);


// Destructuring de objetos 
const  {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombrProducto);