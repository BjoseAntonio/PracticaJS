//Creando arrow function

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
meses.forEach( mes => {
    if(mes == 'Marzo'){
       console.log("Marzo si existe");
    }else{
       console.log("Marzo no existe")
       // const nuevoMes = [...meses, 'Marzo'];
       // console.log(nuevoMes);
    }
   });

   //utilizacion con arreglos de objetos
   const resultado = carrito.some( producto => /*return*/ producto.nombre === 'Celular PRO' 
   //Evalua atraves de booleano si existe dentro del array de objetos 
    );
   console.log(resultado);
   
   // Resultado  del total de precio con metodo reduce
   const res2 = carrito.reduce( (total, producto) =>total + producto.precio , 0); 
   console.log(res2);
   
   //Filter obtencion del valor depende de la condicion
   res3 = carrito.filter(producto => producto.precio > 390 );
   console.log(res3);

   res4 = carrito.filter(producto => producto.nombre !== 'Celular');
   console.log(res4);

   //codigo simplificado de la practica 18 (18.js) function == =>