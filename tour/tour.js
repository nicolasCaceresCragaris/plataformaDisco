document.addEventListener("DOMContentLoaded", function() {

    function getTickets(){
        swal("Sold!", "You have tickets to the " + place + 
       " concert", "success");
    }
    
    const bienvenida = document.querySelector("#welcome");
    const iconoTicket=document.querySelector("#iconoTicket");
    const saludo= document.querySelector("#saludo");


    let nombre= prompt ("Ingrese su nombre");

    while(nombre.length<3){

        alert("Error nombre invalido");
        nombre= prompt ("Ingrese su nombre");

    };
    let edad= parseInt(prompt("Ingrese su edad"));

    iconoTicket.innerHTML='<i class="fa-solid fa-ticket"></i>';
    saludo.textContent=`Hola,${nombre}`;
    bienvenida.textContent=`Bienvenido ${nombre} de ${edad} anios. Desea adquirir tickets`;

});





