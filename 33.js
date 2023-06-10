// clases 

class Producto {
    constructor(nombre, precio){
        this.producto = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto ${this.producto} tiene un precio de $ ${this.precio}`;
    }
}

const producto2 = new Producto('Monitor 22"', 8000);
const producto3 = new Producto('Monitor 32"', 10000);

console.log(producto2);
console.log(producto3);