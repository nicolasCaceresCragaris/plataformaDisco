const botonSubmit = document.getElementById("submitButton");




botonSubmit.addEventListener("click",function(e){

    e.preventDefault()

    const passwordSubido = document.getElementById("password");
    const emailSubido = document.getElementById("email");

    axios.get(`http://localhost:5000/user/${emailSubido.value}`)
    .then(function (response){
        console.log("Procesando solicitud");

        let user = response.data;
        console.log(user);
    })
    .catch(function(error){
        alert("Email incorrecto");
    })

})