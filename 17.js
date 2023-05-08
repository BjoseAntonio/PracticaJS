// Metodos para los Arreglos
const numeros = [10,20,23,20,45];
const arreglo = ['string', 123, true, null, {nombe: "jose", trabajo: "desarrollo"},[1,2,3]];

//Agregar nuevos elemenntos al final del arreglo utlizando metodo Push
numeros.push(40);

//Agregar valor al inicio con metodo Unshift
numeros.unshift(23)

console.log(numeros);

const meses = ["enero","febrero","Marzo","abril","Mayo","junio","julio"];
// Elimina lo ultimo del arreglo 
meses.pop();
// Elimina al principio del Arreglo 
meses.shift();
//Elimina desde el indice 2 > ha indice < 1 eliminando mes de abril
meses.splice(2,1);
console.table(meses);

// Rest operator o Spread operator, objeto mas utilizado para agregar valores 
const nuevoArreglo = ["Diciembre",...meses, "Agosto"];
console.log(nuevoArreglo);
