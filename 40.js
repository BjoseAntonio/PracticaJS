// fetch API 

//======Utilizando promise===========//
// function obtenerEmpleado(){
//     const archivo = 'empleados.json';

//     fetch(archivo)
//         .then(resultado => resultado.json()
//         // {
//         //     return resultado.json();
//         // }
//         )

//         .then(datos => {
//             // console.log(datos);

//              const { empleados } = datos;
//             console.log(empleados);

//             //  empleados.forEach(empleado => {
//             //     // console.log(empleado);
//             //     console.log(empleado.id);
//             //     console.log(empleado.nombre);
//             //     console.log(empleado.puesto);

//             //     // Mostrarlo en html
//             //     document.querySelector('.contenido').textContent += empleado.nombre;

//             //  });
//         });
    
// }


// utilizando Async/await 
async function obtenerEmpleado(){
    const archivo = 'empleados.json';

    const resultado = await fetch(archivo);
    const datos = resultado.json();
    console.log(datos);
}

obtenerEmpleado();