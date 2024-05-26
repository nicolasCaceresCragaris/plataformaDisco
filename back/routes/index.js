
//IMPORTO EXPRESS
const express=require('express');

//IMPORTO BASE DE DATOS

const baseDatos=require('../conexion.js');

//IMPORTO MODELOS DE DATOS
const album= require('../models/Album.js');
const user = require('../models/User.js');

//INSTANCIO AL ENRUTADOR
const router= express.Router();

//RUTAS


//########## RUTAS DE USER #################################


//CARGAR USUARIO
router.post('/user', async function(req,res){

    let datos = req.body;

    let nuevoDoc = new user(datos);

    await nuevoDoc.save();

    console.log("Creado correctamente");
    res.send("Creado correctamente");
});

//OBTENER USUARIO POR ID
router.get('/user/:user_id', async function(req,res){

    let documentos = await user.find();
    console.log(documentos);
    res.send(documentos);
});

//EDITAR LOS DATOS DE UN USUARIO
/* router.put('/user/:user_id',function(req,res){
    
});

//##########################################################

//AGREGA UN ALBUM 
router.post('/album',function(req,res){
    
});

//EDITAR UN ALBUM
router.post('/album/:album_id',function(req,res){
    
});

//RUTA PARA AGREGAR O ELIMINAR UNA CANCION DE UN ALBUM
router.put('/album/:album_id',function(req,res){
    
});
*/

//RUTA QUE DEVUELVE TODOS LOS ALBUMS
router.get('/albumes', async function(req,res){
    let documentos = await album.find()
    console.log("Peticion de albumes enviada correctamente");
    console.log(documentos);
    res.send(documentos);
});


/*
//RUTA QUE DEVUELVE LA INFORMACION DE UN DISCO EN ESPECIFICO
router.get('/album/:album_id',function(req,res){
    
});

//RUTA QUE ELIMINA UN ALBUM

router.delete('/album:album_id',function(req,res){

})

*/
//EXPORTO LAS RUTAS

module.exports=router;