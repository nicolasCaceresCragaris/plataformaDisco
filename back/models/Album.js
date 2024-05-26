const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let albumSchema = new Schema({
    titulo: {
        type: String,
        required: [true, "Complete el campo por favor"]
    },
    descripcion: {
        type: String,
        required: [true, "Complete el campo por favor"],
        minlength: 5,
        maxlength: 200
    },
    lanzamiento: {
        dia: {
            type: Number,
            min: 1,
            max: 31,
            required: [true, "Complete el campo por favor"]
        },
        mes: {
            type: Number,
            min: 1,
            max: 12,
            required: [true, "Complete el campo por favor"]
        },
        anio: {
            type: Number,
            min: 1900,
            required: [true, "Complete el campo por favor"]
        }
    },
    canciones: [{
        titulo: {
            type: String,
            required: [true, "Ingrese el nombre de la cancion"],
            minlength: 1
        },
        duracion: {
            type: String,
            required: [true, "Ingrese la duracion de la cancion"],
            minlength: 1
        },
        link:{
            type:String,
            required:[true,"Ingrese el link"],
            minlength:2,
        }
    }],
    portada: {
        type: String,
        required: [true, "Ingrese una URL para la portada."]
    }
});

module.exports = mongoose.model("Album", albumSchema);