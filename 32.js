// Prototypes 


//Object Constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}
Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
}


function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function(){
    return `El producto ${this.nombre} ${this.apellido}`;


}



const producto2 = new Producto('Monitor 24"', 500);
const producto3 = new Producto('Monitor 30"', 1000);
const cliente = new Cliente('Fidel', 'Castro');

console.log(producto2.formatearProducto())
console.log(cliente)



