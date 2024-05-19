

const imagen = document.getElementsByTagName("img");

for (let i = 0; i < imagen.length; i++) {
    imagen[i].addEventListener("click", function() {
        // Verificar si hay un nodo <i> dentro de la tarjeta y lo elimina


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
