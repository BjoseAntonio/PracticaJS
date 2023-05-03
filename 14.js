// Object Methods
"use strict" //permite mostra los erros como el codigo de agregacion imagen que ya no es valido porque el objeto esta congelado
const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}
// metodo que permite congelar el objeto(sin modificaciones)
Object.freeze(producto);//no permite eliminar ni agregar o cambiar valor
Object.seal(producto);//no permite eliminar ni agregar pero si cambiar valor
// producto.precio = "Nuevo precio";//Ejemplo en  metodo seal

// producto.imagen = "imagen.jpg";//ya no se agrega
console.log(Object.isFrozen(producto));//permite saber si esta congelado el objeto
console.log(Object.isSealed(producto));

console.log(producto);