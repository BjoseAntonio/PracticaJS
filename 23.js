// Metodos de propiedad
const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo cancion: ${id}`)
    },
    pausar : function(){
        console.log('Pausando...')
    },
    crearPlaylist : function(nombre){
        console.log(`Creando play list: ${nombre}`)
    }
}

//tambien se puede crar funcion fuera del objeto
reproductor.borrarCancion = function(id){
    console.log(`Borrando cancion ${id}`)
}

reproductor.reproducir('Mi mayor anhelo - Banda MS');
reproductor.pausar();
reproductor.borrarCancion('El hijo mayor - junir H');
reproductor.crearPlaylist('Musica belica');
// console.log(reproductor);