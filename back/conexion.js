const mongoose = require('mongoose');

let baseDatos=mongoose
.connect("mongodb+srv://shinardo:river123@cluster0.ucgympw.mongodb.net/plataformaDisco?retryWrites=true&w=majority&appName=Cluster0")
.then(function(db){
    console.log("Conectado a mongoDB");
})
.catch(function(err){
    console.log(err);
});

module.exports=baseDatos;