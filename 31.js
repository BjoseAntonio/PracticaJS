// POO 

// Object Loteral 
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
function Producto(nombre, precio){
    this.nomre = nombre;
    this.precio = precio;
}

const producto2 = new Producto('Monitor de 49"', 800);
const producto3 = new Producto('Monitor de 80"', 3000);

console.log(producto2);
console.log(producto3);