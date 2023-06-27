// Trabajar con dos consultas 
// Async / await 

function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log('Descangando clientes... Espere...');
    
        setTimeout( ()=> {
            resolve('Los clientes fueron Descargados')
        }, 5000 );
    });
}


function descargarNuevosPedidos(){
    return new Promise( resolve => {
        console.log('Descangando pedidos... Espere...');
    
        setTimeout( ()=> {
            resolve('Los pedidos fueron Descargados')
        }, 3000 );
    });
}

async function app(){
    try {
        // const cliente = await descargarNuevosClientes();
        // const pedido = await descargarNuevosPedidos();
        // console.log(cliente);
        // console.log(pedido);

        const resultado = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();