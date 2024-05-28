

document.addEventListener("DOMContentLoaded",function(){


    //CUANDO LA PAGINA CARGUE TOMAMOS LOS ELEMENTOS
    const botonSubir = document.getElementById("botonSubir");

    const inputTitulo = document.getElementById("titulo");
    const inputDescripcion=document.getElementById("descripcion");
    const inputDia=document.getElementById("dia");
    const inputMes=document.getElementById("mes");
    const inputAnio=document.getElementById("anio");
    const inputPortada=document.getElementById("portada")

    const urlParams = new URLSearchParams(window.location.search);
    const albumId= urlParams.get('id');
    console.log("Url params obtenido:"+albumId);
    //PETION GET PARA OBTENER LOS DATOS QUE YA TENEMOS DEL DISCO

    axios.get(`http://localhost:5000/album/${albumId}`)
    .then(response => {
        const datosExistentes = response.data;
        console.log(datosExistentes);

        inputTitulo.value=datosExistentes[0].titulo;
        inputDescripcion.value=datosExistentes[0].descripcion;
        inputDia.value=datosExistentes[0].lanzamiento.dia;
        inputMes.value=datosExistentes[0].lanzamiento.mes;
        inputAnio.value=datosExistentes[0].lanzamiento.anio;
        inputPortada.value=datosExistentes[0].portada;
    })
    .catch(error => {
        console.error("Error al obtener datos existentes:", error);
    });

    //OBJETO QUE TENDRA LOS DATOS QUE SE SOBREESCRIBIRAN
    let datosNuevos = {
        titulo:"",
        descripcion:"",
        lanzamiento:{
            dia:0,
            anio:0,
            mes:0
        },
        portada:""
    };



//EL CLICK DISPARA EL EVENTO 
    botonSubir.addEventListener("click",function(e){

        

        //CARGA DE DATOS DEL FORM
        datosNuevos.titulo=inputTitulo.value;
        datosNuevos.descripcion=inputDescripcion.value;
        datosNuevos.lanzamiento.dia=inputDia.value;
        datosNuevos.lanzamiento.mes=inputMes.value;
        datosNuevos.lanzamiento.anio=inputAnio.value;
        datosNuevos.portada=inputPortada.value;

        

    //ENVIA LOS DATOS NUEVOS
    axios.put(`http://localhost:5000/album/${albumId}`,datosNuevos)
        .then(response =>{
            console.log("Recurso actualizado",response.data);
            //window.location.href=`../disco.html?id=${datosNuevos.titulo}`
     }).catch(error =>{
            console.log("Error al actualizar el recurso",error);
        });
    })

})




