// Funciones
// 1- Declaracion de funcion 
function sumar(){
    console.log(10+10);
}
sumar();

//2- Expresion de la funcion 
const sumar2 = function(){
    console.log(2+2);
}

sumar2();
//Diferencia entre 1 y 2, 1 permite ejecutar codigo apesar de declarar la funcion primero, 2 no lo hace.

// IIFE proteccion de variables o funciones con otros archivos
(function(){
    console.log("Esta es una funcion");
})();