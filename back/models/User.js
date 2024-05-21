const mongoose=require("mongoose");

const Schema = mongoose.Schema;

const regex='/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/';

let user = new Schema({
    nombre:{type:String, required:[true,"Nombre requerido"] , min:[3,"Nombre demaciado corto"]},
    apellido:{type:String, required:[true,"Apellido requerido"], min:[3,"Apellido demaciado corto"]},
    email:{type:String, required:[true,"Email requerido"]},
    password:{  type:String, 
                required:[true,"Password requerido"], 
                min:[5,"Password demaciada corta"],
                validate:{
                    validator:function(v){
                        return regex.text(v);
                    },
                    message:'You must enter a valid email!'
                },
            },
    favoritos:[{type:String}]
})

module.exports=mongoose.model("user",user);