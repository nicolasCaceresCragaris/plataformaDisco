//EVENTO DEL QUE SE EJECUTA AL CARGAR LA PAGINA
document.addEventListener("DOMContentLoaded", function() {

    //SELECCIONO EL CONTENEDOR PADRE
    const contenedor= document.getElementById("contenedor");
    
    let albumes;
    
    //MANEJAMOS LA PETICION
    axios.get('http://localhost:5000/albumes')

    .then(function(response){
        albumes= response.data;

        //PROCESO ALBUMES
        albumes.forEach(function(album){

            //CREAMOS EL CONTENEDOR DE LOS DATOS DEL DISCO
            let albumDiv = document.createElement('div');
            albumDiv.className="text-center font-bold hover:text-[#4C212A] w-120";
            albumDiv.id=album.titulo;

            //RENDERIZAMOS LA IMAGEN

            let albumImg = document.createElement('img');

            albumImg.src=album.portada;
            albumImg.className="size-60 border-solid border-2 border-[#BC3B24] hover:size-80";
            albumImg.name=album.titulo;

            //CREAMOS EL TITULO

            let albumTitle = document.createElement('h2');
            albumTitle.textContent=album.titulo;
            albumTitle.className="text-[#FAFDF6] hover:underline"

            //CREAMOS LA FECHA

            let albumFecha= document.createElement('h4');
            albumFecha.textContent=`${album.lanzamiento.dia}/${album.lanzamiento.mes}/${album.lanzamiento.anio}`;
            albumFecha.className="text-[#FAFDF6]";
            
            albumDiv.appendChild(albumImg);
            albumDiv.appendChild(albumTitle);
            albumDiv.appendChild(albumFecha);

            contenedor.appendChild(albumDiv);

        });
        //FUNCIONALIDAD DE DEJAR ESTRELLA EN EL DISCO
        agregarEventoFavoritos();

        //FUNCIONALIDAD DE REDIRIGIR AL DETALLE

        detallarDisco();
    })
    .catch(function(error){
        console.error("Error al obtener los albumes",error);
    })


    
   
    
})



// FUNCIONALIDAD DE AGREGAR UNA ESTRELLITA
function agregarEventoFavoritos(){

const imagen = document.getElementsByTagName("img");

    

    for (let i = 0; i < imagen.length; i++) {
        
        imagen[i].addEventListener("click", function() {
        // Verificar si hay un nodo <i> dentro de la tarjeta y lo elimina

        console.log("CLick"+imagen[i].name);
        const tarjeta = document.getElementById(imagen[i].name);

        const icono = tarjeta.querySelector("i");
        if (icono !== null) {
            tarjeta.removeChild(icono);
           
        } else {
            // Agrega la estrella si no existe
            let nuevoIcono = document.createElement("i");
            nuevoIcono.className = "fa-solid fa-star text-[#FFED66]";
            tarjeta.insertBefore(nuevoIcono, tarjeta.children[1]);
           
            }
        });
    }
}


function detallarDisco(){

    const titulosDisco = document.getElementsByTagName("h2");

    for(let i=0; i<titulosDisco.length;i++){

        titulosDisco[i].addEventListener("click",function(){

            window.location.href=`disco.html?id=${titulosDisco[i].textContent}`;

        })
    }
}


