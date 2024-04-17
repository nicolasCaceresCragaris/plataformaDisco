document.addEventListener("DOMContentLoaded", function() {


    
    const bienvenida = document.querySelector("#welcome");
    
    let nombre= prompt ("Ingrese su nombre");
    let edad= parseInt(prompt("Ingrese su edad"));

  
    bienvenida.textContent=`Bienvenido ${nombre} de ${edad} anios. Desea adquirir tickets`;

});