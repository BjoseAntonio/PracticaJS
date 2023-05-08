// Funciones con parametros y argumentos
// 1- Declaracion de funcion 
function sumar(numero1, numero2){ //variables son parametros
    console.log(numero1 + numero2);
}
sumar(2,3);//valores o argumenos
sumar(2,8);//valores o argumenos


//2- Expresion de la funcion 
const sumar2 = function(n1,n2){
    console.log(n1 + n2);
}
sumar2(1,3);

function sumar(num1 = 0, num2 = 0){ //variables son parametros por defaul 
    console.log(num1 + num2);
}
sumar(2,1);//valores o argumenos
sumar(2);//valores o argumenos