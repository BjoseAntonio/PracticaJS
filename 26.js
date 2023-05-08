// Escructuras de control 

// if sentencias
const puntaje = 100;
if(puntaje === 100){
    console.log('Puntaje igual a 1000');
}else{
    console.log('Puntaje no es igual a 1000');
}

// Condicion con mayor que o menor que
const efectivo = 1000;
const carrito = 200;

if(efectivo > carrito){
    console.log('El usuario puede pagar');
}else{
    console.log('El usuario no puede pagar');

}


//Mas de una condicion
const rol = 'Editor' 

if(rol === 'Administrador'){
    console.log('Acceso al sistema');
}else if(rol === 'Editor'){
    console.log('Acceso limitado');
}else{
    console.log('No tienes acceso');
}