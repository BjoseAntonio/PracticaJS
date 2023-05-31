// 'This' palabra reservada


// Objeto
const reservacion = {
    nombre: 'Salmon',
    apellido: 'Stark',
    total:500,
    pagado: false,
    // funcion 
    informacion: function(){
        console.log(`El cliente ${this.nombre} debe un total de $${this.total}`);
    }
}

const reservacion2 = {
    nombre: 'Adan',
    apellido: 'de la torre',
    total:1000,
    pagado: false,
    // funcion : solo this sirve con function ya que con arrow Fuctions ( => ) ejecuta la ventana global(fuera del objeto)
    informacion: function(){
        console.log(`El cliente ${this.nombre} debe un total de $${this.total}`);
    }
}

// console.log(reservacion);
reservacion.informacion();
reservacion2.informacion();
