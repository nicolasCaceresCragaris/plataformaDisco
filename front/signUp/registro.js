
//BOTON
const botonRegistro = document.getElementById("submit");

//CAMPOS DEL FORM
const nombre_dato = document.getElementById("nombre");

const apellido_dato = document.getElementById("apellido");

const email_dato = document.getElementById("correo");

const password_dato = document.getElementById("password");

//EVENTO QUE SE DISPARA AL CLICKEAR EL BOTON DE SUBIR
botonRegistro.addEventListener("click",function(){

    axios.post("http://localhost:5000/user",{
        nombre:nombre_dato.value,
        apellido:apellido_dato.value,
        email:email_dato.value,
        password:password_dato.value,
        favoritos:[]
    })
    .then(function (respuesta){
        alert(respuesta);
    })

})