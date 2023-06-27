// Async / await 

function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log('Descangando clientes... Espere...');
    
        setTimeout( ()=> {
            resolve('Los clientes fueron Descargados')
        }, 5000 );
    });
}

async function app(){
    try {
        const resultado = await descargarNuevosClientes();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

app();