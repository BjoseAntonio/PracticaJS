// Notification API 
// querySelector ; Nos ayuda a seleccionar contenido html 
const boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`))
});

// Se muestra la notificacion cuando el usuario autoriza pernisos
if(Notification.permission == 'granted'){
    new Notification('Esta es una notificacion', {
        icon: 'img/ccj.png'
    })
}