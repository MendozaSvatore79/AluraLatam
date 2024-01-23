function encriptar (){
    var texto = document.getElementById('texto').value;
    var contenedor = document.querySelector('.contenedor-parrafo');
    var contenedor2 = document.querySelector('.contenedor-parrafo h3');
    var contenedor3 = document.querySelector('.contenedor-parrafo p');
    var imagenElemento = document.querySelector('.contenedormunieco img')
    if (texto == '') {
        swal("Error!", "El Campo Esta Vacio", "error"); 
    }else if(/[A-Z]/.test(texto)){
        swal("¡Error!", "Ingrese Solo Minusculas", "warning");      
    }else{
        var desplazamiento = 3; // Cambia esto para cambiar el desplazamiento
        var resultado = '';
        for (var i = 0; i < texto.length; i++) {
            var ascii = texto.charCodeAt(i);
            if (ascii >= 97 && ascii <= 122) {
                resultado += String.fromCharCode((ascii - 97 + desplazamiento) % 26 + 97);
            } else {
                resultado += texto.charAt(i);
            }
        }
        var nuevoElemento = document.createElement('p');
        nuevoElemento.textContent =  resultado;
        contenedor.prepend(nuevoElemento); // Agrega el nuevo elemento al principio del contenedor
        imagenElemento.style.display = 'none';
        contenedor2.style.display = 'none';
        contenedor3.style.display = 'none';
    }
}

function desencriptar() {
    var texto = document.getElementById('texto').value;
    var contenedor = document.querySelector('.contenedor-parrafo');
    var contenedor2 = document.querySelector('.contenedor-parrafo h3');
    var contenedor3 = document.querySelector('.contenedor-parrafo p');
    var imagenElemento = document.querySelector('.contenedormunieco img');
    if (texto == '') {
        swal("Error!", "El Campo Esta Vacio", "error"); 
    } else if(/[A-Z]/.test(texto)){
        swal("¡Error!", "Ingrese Solo Minusculas", "warning");   
    } else {
        var desplazamiento = 3; // Cambia esto para cambiar el desplazamiento
        var resultado = '';
        for (var i = 0; i < texto.length; i++) {
            var ascii = texto.charCodeAt(i);
            if (ascii >= 97 && ascii <= 122) {
                resultado += String.fromCharCode((ascii - 97 - desplazamiento + 26) % 26 + 97);
            } else {
                resultado += texto.charAt(i);
            }
        }
        var nuevoElemento = document.createElement('p');
        nuevoElemento.textContent =  resultado;
        contenedor.prepend(nuevoElemento); 
        imagenElemento.style.display = 'none';
        contenedor2.style.display = 'none';
        contenedor3.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btn-copiar').addEventListener('click', function() {
        var elemento = document.querySelector('.contenedor-parrafo p');
        var resultado = elemento ? elemento.textContent : '';
        if (resultado.trim()) { 
            navigator.clipboard.writeText(resultado).then(function() {
                swal("¡Éxito!", "Texto copiado al portapapeles", "success");
            }).catch(function() {
                swal("¡Error!", "Error al copiar el texto", "error");
            });
        } else {
            swal("¡Advertencia!", "No hay texto para copiar", "warning");
        }
    });
});