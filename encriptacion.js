function encriptar() {
    let texto = document.getElementById("TextoUsuario").value;
    let tituloMensaje = document.querySelector(".titulo__noencriptado");
    let parrafo = document.querySelector(".parrafo__noencriptado");
    let imagenVisible = document.querySelector(".contenedor__imagen img:not([style*='display: none'])");
    let botonCopiar = document.querySelector(".boton__copiar");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("TextoUsuario").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";

        // Ocultar la imagen actual y mostrar la nueva
        if (imagenVisible) {
            imagenVisible.style.display = "none";
        }

        let imagenNueva = document.querySelector(".contenedor__imagen img[src='/assets/imagen2.jpg']");
        if (imagenNueva) {
            imagenNueva.style.display = "block";
        }

        botonCopiar.style.display = "block"; 
    } else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar";
        let imagenOriginal = document.querySelector(".contenedor__imagen img[src='/assets/Muneco.jpg']");
        if (imagenOriginal) {
            imagenOriginal.style.display = "block";
        }
        botonCopiar.style.display = "none"; 
    }
}

function desencriptar() {
    let texto = document.getElementById("TextoUsuario").value;
    let tituloMensaje = document.querySelector(".titulo__noencriptado");
    let parrafo = document.querySelector(".parrafo__noencriptado");
    let imagenVisible = document.querySelector(".contenedor__imagen img:not([style*='display: none'])");
    let botonCopiar = document.querySelector(".boton__copiar");

    let textoDesencriptado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("TextoUsuario").value = textoDesencriptado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";

        // Ocultar la imagen actual y mostrar la nueva
        if (imagenVisible) {
            imagenVisible.style.display = "none";
        }

        let imagenNueva = document.querySelector(".contenedor__imagen img[src='/assets/imagen2.jpg']");
        if (imagenNueva) {
            imagenNueva.style.display = "block";
        }

        botonCopiar.style.display = "block"; 
    } else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas desencriptar";
        let imagenOriginal = document.querySelector(".contenedor__imagen img[src='/assets/Muneco.jpg']");
        if (imagenOriginal) {
            imagenOriginal.style.display = "block";
        }
        botonCopiar.style.display = "none"; 
    }
}


function botoncopiado() {
    document.querySelector(".boton__copiar").addEventListener('click', function() {
        let texto = document.getElementById("TextoUsuario").value;
        navigator.clipboard.writeText(texto).then(function() {
            alert("Texto copiado al portapapeles");
        }).catch(function(err) {
            console.error('Error al copiar el texto: ', err);
        });
    });
}

botoncopiado();
