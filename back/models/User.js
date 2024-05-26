const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Expresión regular para validar emails
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

let userSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "Nombre requerido"],
        minlength: [3, "Nombre demasiado corto"]
    },
    apellido: {
        type: String,
        required: [true, "Apellido requerido"],
        minlength: [3, "Apellido demasiado corto"]
    },
    email: {
        type: String,
        required: [true, "Email requerido"],
        validate: {
            validator: function(v) {
                return emailRegex.test(v);
            },
            message: 'Debes ingresar un email válido'
        }
    },
    password: {
        type: String,
        required: [true, "Password requerido"],
        minlength: [5, "Password demasiado corta"]
    },
    favoritos: [{
        type: String
    }]
});

module.exports = mongoose.model("User", userSchema);