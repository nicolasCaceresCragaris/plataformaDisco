
const express = require('express');

const cors = require('cors'); 


//ENRUTADOR
const router=require('./routes/index')



//CONEXION A LA BASE DE DATOS
const baseDatos=require('./conexion');

//INCLUIR ARCHIVO DE ESTRUCTURA
let album = require ('./models/Album');
let user = require ('./models/User');

const app=express();

//Utilizar modulo CORS

app.use(cors());


app.use(express.json());

app.use('/', router);



app.listen(5000,()=>{
    console.log('Server listening on port 5000')
})