// Arreglos o Arrays
// Corchetes se hacen para los arreglos, llaves para objetos
const numeros = [10,20,23,20,45];

const meses = ["enero","febrero","abril",];

const arreglo = ['string', 123, true, null, {nombe: "jose", trabajo: "desarrollo"},[1,2,3]];

console.log(numeros);
console.table(numeros);
console.log(arreglo);
// Acceso al valor del arreglo
console.log(numeros[2]);
// Conocer valor total de valores del arreglo 
console.log(numeros.length);

numeros.forEach( function(numero)
{
    console.log(numero)
})


