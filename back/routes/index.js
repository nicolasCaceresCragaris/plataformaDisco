
//IMPORTO EXPRESS
const express=require('express');

//IMPORTO BCRYPT

const bcrypt = require('bcrypt');

//IMPORTO BASE DE DATOS

const baseDatos=require('../conexion.js');

//IMPORTO MODELOS DE DATOS
const album= require('../models/Album.js');
const user = require('../models/User.js');
const Album = require('../models/Album.js');

//INSTANCIO AL ENRUTADOR
const router= express.Router();

//RUTAS


//########## RUTAS DE USER #################################


//CARGAR USUARIO
router.post('/user', async function(req,res){

    try{
        const {email,password,nombre,apellido,favoritos=[]} = req.body;
        
       

        const saltRound=10;

        //HASHEA LA CONTRASENIA
    
        const hashedPassword = await bcrypt.hash(password,saltRound);
        
        


        let datos ={
            nombre:nombre,
            apellido:apellido,
            email:email,
            password:hashedPassword,
            favoritos:favoritos
        };

        let nuevoDoc = new user(datos);

        console.log(nuevoDoc);

        await nuevoDoc.save();

        console.log("Salve el documento");

        console.log(`Usuario: ${datos.nombre} ${datos.apellido} creado correctamente`);
        res.status(200).send("Usuario creado correctamente");
    }
    catch(error){
        res.status(500).send("Error al registrar al usuario");
    }
});

//OBTENER USUARIO POR ID
router.get('/user/:email', async function(req, res) {
    try {
        let filter = { email: req.params.email };
        let documento = await user.findOne(filter);
        
        if (documento) {
            console.log("Se encontró el email:" + req.params.email);
            console.log("Documento encontrado:", documento);
            res.status(200).send(documento);
        } else {
            console.log("No se encontró el email:" + req.params.email);
            res.status(404).send("No se encontró");
        }
    } catch (error) {
        console.error('Error al buscar el email:', error);
        res.status(500).send("Error interno del servidor");
    }
});

//EDITAR LOS DATOS DE UN USUARIO
/* router.put('/user/:user_id',function(req,res){
    
});

//##########################################################
*/
//AGREGA UN ALBUM 
router.post('/album', async function(req,res){

    let datos = req.body;

    let nuevoDoc = new album(datos);

    await nuevoDoc.save();

    console.log("Album creado correctamente");
    res.send("Album Creado correctamente");
});

//EDITAR UN ALBUM
router.put('/album/:album_id',async function(req,res){

    
    try{
        const albumActualizado = await Album.findOneAndUpdate(
            {titulo:req.params.album_id},
            req.body,
            {new:true,runValidators:true}
        )
        if(!albumActualizado){
            return res.status(404).send("Error album no encontrado")
        }
        console.log("Album actualizado "+req.params.album_id);
        res.status(200).send(albumActualizado);
    }
    catch(error){
        res.status(500).send("Error al actualizar el album");
    }
});
/*
//RUTA PARA AGREGAR O ELIMINAR UNA CANCION DE UN ALBUM
router.put('/album/:album_id',function(req,res){
    
});
*/

//RUTA QUE DEVUELVE TODOS LOS ALBUMS
router.get('/albumes', async function(req,res){
    let documentos = await album.find()
    console.log("Peticion de albumes enviada correctamente");
  
    res.send(documentos);
});


//RUTA QUE DEVUELVE 1 ALBUM EN ESPECIFICO

router.get('/album/:id', async function(req,res){

    console.log(req.params.id);
    
    let filter = {titulo: req.params.id};

    let documentos = await album.find(filter);
    
    console.log("Su peticion de album fue cargada exitosamente");

    res.send(documentos);
});

//RUTA QUE ELIMINA UN ALBUM

router.delete('/album/:album_id',async function(req,res){

    try{
        const albumEliminado = await Album.findOneAndDelete({titulo:req.params.album_id});

        if(!albumEliminado){
            return res.status(404).send("Error:album no encontrado");
        }
        console.log("Album eliminado:",albumEliminado);
        res.status(200).send(albumEliminado);
    }catch(error){
        console.log("Error al eliminar el album:",error);
        res.status(500).send("Error al eliminar el album");
    }
});




//EXPORTO LAS RUTAS

module.exports=router;