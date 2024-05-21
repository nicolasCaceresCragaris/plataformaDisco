const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let album = new Schema ({

    titulo : {type:String, required:[true,"Complete el campo por favor"]},
    descripcion:{type:String, required:[true,"Complete el campo por favor"],min:5,max:200},
    lanzamiento : {
        dia:Number, min:1,
        anio:Number, min:1,
        mes:Number, min:1,
        required:[true,"Complete el campo por favor"],
       },
    canciones : [{
            titulo:{type:String,required:[true,"Ingrese el nombre de la cancion"],min:1},
            duracion:{type:Number,required:[true,"Ingrese la duracion de la cancion"],min:1},
        }],
    portada:{type:String,required:[true,"Ingrese una URL para la portada."]}
})

module.exports=mongoose.model("album",album)