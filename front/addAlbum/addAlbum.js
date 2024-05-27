//BOTON
const botonRegistro = document.getElementById("submit");

//CAMPOS DEL FORM

const tituloAlbum = document.getElementById("titulo");
const dia = document.getElementById("dia");
const mes = document.getElementById("mes");
const anio = document.getElementById("anio");
const descripcion= document.getElementById("descripcion");
const portada= document.getElementById("portada");




//EVENTO QUE SE DISPARA AL CLICKEAR EL BOTON DE SUBIR
botonRegistro.addEventListener("click",function(e){

    
    
    axios.post("http://localhost:5000/album",{
        titulo:tituloAlbum.value,
        descripcion:descripcion.value,
        lanzamiento:{
                        dia:dia.value,
                        mes:mes.value,
                        anio:anio.value
                    },
        canciones : [{
                        titulo:"sample",
                        duracion:"111",
                        link:"linksample"
                    }],
        portada:portada.value
    })
    .then(function(respuesta){
        alert(respuesta);
    })
})