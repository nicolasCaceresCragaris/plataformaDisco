
const bienvenida = document.querySelector("#welcome");
const iconoTicket=document.querySelector("#iconoTicket");
const saludo= document.querySelector("#saludo");

const entradas=[
    {lugar:"carlos paz",cantidad:10},
    {lugar:"villa fiorito",cantidad:10},
    {lugar:"Bella vista",cantidad:0}
]
    


//FUNCIONALIDAD DE NO PERMITIR SI ES UN NOMBRE CORTO

let nombre= prompt ("Ingrese su nombre");

while(nombre.length<3){

    alert("Error nombre invalido");
    nombre= prompt ("Ingrese su nombre");

};

//FUNCIONALIDAD DE PONER EL TICKET CON EL NOMBRE
let edad= parseInt(prompt("Ingrese su edad"));

iconoTicket.innerHTML='<i class="fa-solid fa-ticket"></i>';
saludo.textContent=` Hola!${nombre}`;
 bienvenida.textContent=`Bienvenido ${nombre} de ${edad} anios. Desea adquirir tickets?`;


//FUNCIONALIDAD DE SWEET ALERT

const botonCompra= document.getElementsByClassName("botonCompra");


function getTickets(entradas,i){

    

    if(entradas[i].cantidad>0){
        
        devolver=entradas[i];
        entradas[i].cantidad--;

        return true;
    }
    if(entradas[i].cantidad<=0){

        return false;
    }
    
}


for (let i = 0; i < botonCompra.length; i++) {

    if(edad>=18){

        botonCompra[i].addEventListener("click", function() {
            if(getTickets(entradas,i)){
                swal("Compra exitosa","Gracias","success");
            }else{
                botonCompra[i].textContent="Sold Out";
                swal("No se pudo efectuar","Lo sentimos","error");
            }

        });
    }else{
        swal("No podes comprar entradas","Sos menor","warning")
    }
}

