const selectForm = document.forms;

let mensajeDeError="Error:";

let errores=0;


selectForm[0].addEventListener("submit",function(e){


        for(let i=0;i<selectForm[0].elements.length-1;i++){

            if(selectForm[0].elements[i].value.length==0){

                mensajeDeError=mensajeDeError.concat(` Complete ${selectForm[0].elements[i].name}.`);

                errores++;
            }
        }

        if(errores==0){

            swal ( "Exitos" ,  "Recibimos su peticion" ,  "success" );

        }


        if(errores>0){

            e.preventDefault();
            swal ( "Error" ,  mensajeDeError ,  "error" );
            mensajeDeError="Error:";   
            errores=0;
        }

     
})

