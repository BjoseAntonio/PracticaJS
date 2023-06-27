// Promises JS 
const usuarioAutenticado = new Promise ( (resolve, reject) => {
    const auth =false; //autenticacion

    if(auth){
        resolve('Usuario autenticado');//Resultado
    }else{
        reject('Usuario no autenticado');//Error
    }

});

// Utilizacion para mostrarlo y poderlo utilizar mensaje visual en html 
usuarioAutenticado
// .then(function(resultado){
//     console.log(resultado);
// })
// .catch(function(error){
//     console.log(error);
// })

// Es similar que con el fuction pero con codigo mas reducido
.then( resultado => console.log(resultado))
.catch( error => console.log(error))

// console.log(usuarioAutenticado);

// En los Promises exiten 3 valores
// Pending: No se ha cumplido pero tampoco se ha rechazado
// Fulfilled: Ya se cumplio  
// Rejected: Se ha rechazado o no se pudo cumplir