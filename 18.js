// Metodos Arreglos
const meses = ["Enero","Febrero","Abril",];

const carrito = [

    {nombre: "Monitor 20 pulgadas", precio:300},
    {nombre: "Television", precio: 500},
    {nombre: "Tablet", precio: 1000},
    {nombre: "Celular", precio: 350},
    {nombre: "Mac", precio: 450}
];

// forEch 
meses.forEach( function(mes){
 if(mes == 'Marzo'){
    console.log("Marzo si existe");
 }else{
    console.log("Marzo no existe")
    // const nuevoMes = [...meses, 'Marzo'];
    // console.log(nuevoMes);
 }
});

//Includes
const res = meses.includes('Marzo');
console.log(res);

//utilizacion con arreglos de objetos
const resultado = carrito.some(function(producto){
    return producto.nombre === 'Celular PRO' //Evalua atraves de booleano si existe dentro del array de objetos
});

console.log(resultado);

// Resultado  del total de precio con metodo reduce
const res2 = carrito.reduce( function(total, producto){
    return total + producto.precio
}, 0); 
console.log(res2);

//Filter obtencion del valor depende de la condicion
res3 = carrito.filter(function(producto){
    return producto.precio > 390
});
res4 = carrito.filter(function(producto){
    return producto.nombre !== 'Celular'
});
console.log(res3);
console.log(res4);

