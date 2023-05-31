// ForEach y map
const carrito = [
    {nombre: "Monitor 20 pulgadas", precio:300},
    {nombre: "Television", precio: 500},
    {nombre: "Tablet", precio: 1000},
    {nombre: "Celular", precio: 350},
    {nombre: "Mac", precio: 450}
];

// Foreach 
carrito.forEach(function(producto){
    console.log(producto.nombre)
})

// map
carrito.map(function(producto){
    console.log(producto.nombre)
})


// Diferencia 
// mostar cosas en pantalla o consola utilizar forEach : iterar y mostrar resultados
// si se crea un nuevo arreglo utilizar map : Poder crear arreglos