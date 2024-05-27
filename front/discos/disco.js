
document.addEventListener("DOMContentLoaded",function(){

    const urlParams = new URLSearchParams(window.location.search);

    const albumId= urlParams.get('id');

    console.log("Url Param obtenido:"+albumId);

    axios.get(`http://localhost:5000/album/${albumId}`)
    .then(function(response){

        console.log("Solicitud procesada exitosamente");
        
        album=response.data;
        console.log(album[0]);
        //RENDERIZAMOS EL DISCO EN CUESTION

        const divPadre = document.getElementById("contenedorPadre");
        
        const divIzquierda = document.createElement("div");
        divIzquierda.className="w-1/2 p-40 flex flex-col text-center bg-black text-[#FAFDF6]"

        const divDerecha= document.createElement("div");    
        divDerecha.className="w-1/2 flex flex-col bg-[#56494E]  text-center text-[#FAFDF6] font-mono text-xl"
        //RENDERIZAMOS LA IMAGEN
        const imagenAlbum = document.createElement("img");
        imagenAlbum.src=album[0].portada;
        imagenAlbum.className="size-60 border-solid border-2 border-[#BC3B24]"

        //RENDERIZAMOS EL TITULO
        const tituloAlbum = document.createElement("h2");
        tituloAlbum.textContent=album[0].titulo;
        tituloAlbum.className= "text-4xl my-10 uppercase font-bold font-mono"
        //RENDERIZAMOS LA DESCRIPCION
        const descripAlbum = document.createElement("p");
        descripAlbum.textContent=album[0].descripcion
        
        //EDITAR ALBUM
        const editAlbumButton=document.createElement("button");
        editAlbumButton.textContent="Editar Album";
        editAlbumButton.classList="text-[#FAFDF6] mt-20 border-white border-solid border-2 uppercase font-bold font-mono"

         //AGREGAMOS EL BOTON DE BORRAR

        const deleteButton = document.createElement("button");
        deleteButton.textContent="Borrar Album";
        deleteButton.classList="text-[#FAFDF6] mt-20 border-white border-solid border-2 uppercase font-bold font-mono"


        //AGREGAMOS AL DIV DE LA IZQUIERDA
        divIzquierda.appendChild(imagenAlbum);
        divIzquierda.appendChild(tituloAlbum);
        divIzquierda.appendChild(descripAlbum);
        divIzquierda.appendChild(editAlbumButton);
        divIzquierda.appendChild(deleteButton);

        //AGREGAMOS LAS CANCIONES

        for(let i = 0 ; i<album[0].canciones.length;i++){
            const cancion = document.createElement("p");

            const ref = document.createElement("a");
            ref.href=album[0].canciones[i].link;
            ref.target="_blank"

            ref.appendChild(cancion);

            const duracion=obtenerDuracion(album[0].canciones[i].duracion);
            cancion.textContent=`${album[0].canciones[i].titulo} ${duracion}`;
            cancion.className="p-6 hover:underline";
            divDerecha.appendChild(ref);

        }
        //AGREGAMOS AL BOTON DE EDITAR

        const editButton = document.createElement("button");
        editButton.textContent="Editar";
        editButton.type="button";
        editButton.className="border-2 border-solid border-black w-1/2 justify-center";

       

   
        //AGREGAMOS AL DIV PADRE
        divPadre.appendChild(divIzquierda);
        divPadre.appendChild(divDerecha);
        divDerecha.appendChild(editButton);
        
        //EVENTO EDITAR ALBUM
        editAlbum(editAlbumButton,album[0].titulo);

    })
    .catch(function(error){
        console.log("Error, no se pudo encontrar el id")
    })


})

//ESTA FUNCION PARCEA LA DURACION
function obtenerDuracion(duracionEntera){

    let valorA=Math.trunc(duracionEntera/100);
    let valorB=duracionEntera%100;

    

    duracion=`${valorA}:${valorB}`

    return duracion;
}

function editAlbum(editAlbumButton,albumTitulo){

    editAlbumButton.addEventListener("click",function(){
        console.log("hola");
        window.location.href=`editAlbum/edit.html?id=${albumTitulo}`
    })
}