//BOTON
const botonRegistro = document.getElementById("submit");

//EVENTO QUE SE DISPARA AL CLICKEAR EL BOTON DE SUBIR
botonRegistro.addEventListener("click",async function(e){
    e.preventDefault();
    //CAMPOS DEL FORM
    const nombre_dato = document.getElementById("nombre");

    const apellido_dato = document.getElementById("apellido");

    const email_dato = document.getElementById("correo");

    const password_dato = document.getElementById("password");

    //CHECKEO SI NO EXISTE EL MAIL
    
    const existe= await checkData(email_dato.value);
        
    if(existe){
        e.preventDefault();
        swal("El email ya existe","Use otro email","error");
    }

    //SI NO EXISTE CARGO LOS DATOS
    else{
        axios.post("http://localhost:5000/user",{
            nombre:nombre_dato.value,
            apellido:apellido_dato.value,
            email:email_dato.value,
            password:password_dato.value,
            favoritos:[]
        })
        .then(function (respuesta){
            swal("Usuario creado","Ingrese en el login","success");
            window.location.href=`http://127.0.0.1:5500/front/login/login.html`;
        })
        
    }
    
})

async function checkData(emailIngresado) {
    
    try {
      const response = await axios.get(`http://localhost:5000/user/${emailIngresado}`);
      const registro = response.data;
      
      // Chequeo de email
      if (registro.email === emailIngresado) {
       
        return true; // O cualquier lógica para determinar true o false
      } 
      else {
        return false;
      }
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      return false; // Devuelve false en caso de error
    }
  }