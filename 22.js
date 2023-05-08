// // Funciones que retornan valores
// function sumar(num1, num2){ //variables son parametros por defaul
//     return num1 + num2;
// }
// const resultado = sumar(2,1);//valores o argumenos
// console.log(resultado);


let total = 0;

function agrgarCarrito(precio){
    return total += precio;
};

function calcularImpueto(total){
    return 1.15 * total;
}

total = agrgarCarrito(200);
total = agrgarCarrito(200);
total = agrgarCarrito(25);
console.log(total)

const totalApagar = Math.round(calcularImpueto(total));

console.log(`El total a pagar es de: $${totalApagar}`);