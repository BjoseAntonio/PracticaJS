//Switch
//Mas de una condicion o opciones

const metodoPago = 'efectivo';

switch(metodoPago){
    case 'tarjeta':
        console.log('Pago con tarjeta');
        break;
    case 'cheque':
        console.log('Pago con cheque');
        break;
    case 'efectivo':
        console.log('Pago en efectivo');
        break;
    default:
        console.log('Un no has pagado');
        break;


}