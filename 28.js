// for loops (iteradores) 
//  for(let i = 1; i < 10; i++){
//     if(i % 2 === 0){
//         console.log(`El numero ${i} es PAR`);
//     }else{
//         console.log(`El numero ${i} es impar`);
//     }
//  }


const carrito = [
    {nombre: "Monitor 20 pulgadas", precio:300},
    {nombre: "Television", precio: 500},
    {nombre: "Tablet", precio: 1000},
    {nombre: "Celular", precio: 350},
    {nombre: "Mac", precio: 450}
];

//  for(let indice = 0; indice < carrito.length; indice++){
//     console.log(carrito[indice].nombre);
//  }


//While loop
// let i = 0;

// while(i < carrito.length){
//     // console.log(i);

//     // if(i % 2 === 0){
//     //     console.log(`El numero ${i} es par`);
//     // }

//     console.log(carrito[i].nombre);
//     i++;
// }

// Do while loop 
let i = 10;

do{
 console.log(i);
    i++;
}while(i < 10)