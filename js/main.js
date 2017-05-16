function datoVacio(dato) {
    if (dato == '') {
        return true;
    }
}

//función que valida que el contenido tenga a-z y A-Z
function contenidoAlfa(data) {
    var expReg = /^[a-zA-Z ]+$/;
    if (!expReg.test(data)) {
        return true;
    }
}

//función para que la primera letra sea mayuscula
function primeraMayus(str) {
    var primera = str[0];
    if (primera != primera.toUpperCase()) {
        return true;
    }
}

//función para validar el correo
function validarCorreo(correo) {
    var expRegCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!expRegCorreo.test(correo)) {
        return true;
    }
}

//función que valida la contraseña
function password(pass) {
    var largoPass = pass.length;
    if (largoPass < 6 || pass == 'password' || pass == '123456' || pass == '098754') {
        return true;
    }
}

function createSpanNombreVacio() {
    //creo el elemento span para avisar del dato vacío
    var span = document.createElement('span');
    var texto = document.createTextNode('Debes ingresar el dato solicitado');

    var contenedor = document.getElementsByClassName('input-box')[0];

    span.appendChild(texto);
    contenedor.appendChild(span);
    return span;
}

function createSpanCaractNoValidosNombre() {
    //creo el spam para avisar del dato no valido
    var span = document.createElement('span');
    var texto = document.createTextNode('El contenido debe ser del tipo[a - z][A - Z]');
    var contenedor = document.getElementsByClassName('input-box')[0];
    span.appendChild(texto);
    contenedor.appendChild(span);
    return span;
}

function createSpanPrimeraMayusNombre() {
    //creo el spam para pedir primeras letras mayuscula
    var span = document.createElement('span');
    var texto = document.createTextNode('La primera letra tiene que ser mayus');
    var contenedor = document.getElementsByClassName('input-box')[0];
    span.appendChild(texto);
    contenedor.appendChild(span);
    return span;
}

function createSpanApellidoVacio() {
    //creo el elemento span para avisar del dato vacío
    var span = document.createElement('span');
    var texto = document.createTextNode('Debes ingresar el dato solicitado');

    var contenedor = document.getElementsByClassName('input-box')[1];

    span.appendChild(texto);
    contenedor.appendChild(span);
    return span;
}

function createSpanCaractNoValidosApellido() {
    //creo el spam para avisar del dato no valido
    var span = document.createElement('span');
    var texto = document.createTextNode('El contenido debe ser del tipo[a - z][A - Z]');
    var contenedor = document.getElementsByClassName('input-box')[1];
    span.appendChild(texto);
    contenedor.appendChild(span);
    return span;
}

function createSpanPrimeraMayusApellido() {
    //creo el spam para pedir primeras letras mayuscula
    var span = document.createElement('span');
    var texto = document.createTextNode('La primera letra tiene que ser mayus');
    var contenedor = document.getElementsByClassName('input-box')[1];
    span.appendChild(texto);
    contenedor.appendChild(span);
    return span;
}

function createSpanMailVacio() {
    //creo el spam para pedir ingreso de datos
    var span = document.createElement('span');
    var texto = document.createTextNode('Debes ingresar el dato solicitado');
    var contenedor = document.getElementsByClassName('input-box')[2];
    span.appendChild(texto);
    contenedor.appendChild(span);
    return span;
}

function createSpanMailInvalido() {
    //creo el spam para pedir correo valido
    var span = document.createElement('span');
    var texto = document.createTextNode('Debes ingresar un correo válido. Ejem: name@domain.com');
    var contenedor = document.getElementsByClassName('input-box')[2];
    span.appendChild(texto);
    contenedor.appendChild(span);
    return span;
}

function createSpanCorreoVacio() {
    //creo el spam para pedir ingreso de datos
    var span = document.createElement('span');
    var texto = document.createTextNode('Debes ingresar el dato solicitado');
    var contenedor = document.getElementsByClassName('input-box')[3];
    span.appendChild(texto);
    contenedor.appendChild(span);
    return span;
}

function createSpanSeguridad() {
    //creo el spam para pedir mayor seguridad en la contraseña
    var span = document.createElement('span');
    var texto = document.createTextNode('Tu contraseña debe ser más segura');
    var contenedor = document.getElementsByClassName('input-box')[3];
    span.appendChild(texto);
    contenedor.appendChild(span);
    return span;
}

function createSpanSelector() {
    //creo el spam para pedir ingreso de alguna opción
    var span = document.createElement('span');
    var texto = document.createTextNode('Debes escoger alguna de nuestras opciones');
    var contenedor = document.getElementsByClassName('input-box')[4];
    span.appendChild(texto);
    contenedor.appendChild(span);
    return span;
}

function removerSpan() {
    //obtengo todos los input-box
    var inputBox = document.getElementsByClassName('input-box');
    for (var i = 0; i < inputBox.length; i++) {
        var input = inputBox[i];
        var spans = input.getElementsByTagName('span');
        console.log(spans);
        if (spans.length) {
            input.removeChild(spans[0]);
        }
    }
}

function limpiarForm() {
    //Borrar los valores una vez que son enviados
    document.getElementById('name').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('input-email').value = '';
    document.getElementById('input-password').value = '';
    document.getElementById('selector').value = '';
    document.getElementById('input-social').value = '';
}

function validateForm() {
    var valido = true;
    removerSpan();
    //Obtener ingreso por formulario de todos los campos
    var nombre = document.getElementById('name').value;
    var apellido = document.getElementById('lastname').value;
    var email = document.getElementById('input-email').value;
    var pass = document.getElementById('input-password').value;
    var selector = document.getElementById('selector').value;
    var twitter = document.getElementById('input-social').value;

    //Validaciones para el nombre
    if (datoVacio(nombre)) {
        createSpanNombreVacio();
        valido = false;
    } else if (contenidoAlfa(nombre)) {
        createSpanCaractNoValidosNombre();
        valido = false;
    } else if (primeraMayus(nombre)) {
        createSpanPrimeraMayusNombre();
        valido = false;
    }

    //validaciones para el apellido
    if (datoVacio(apellido)) {
        createSpanApellidoVacio();
        valido = false;
    } else if (contenidoAlfa(apellido)) {
        createSpanCaractNoValidosApellido();
        valido = false;
    } else if (primeraMayus(apellido)) {
        createSpanPrimeraMayusApellido();
        valido = false;
    }

    //validaciones para el mail
    if (datoVacio(email)) {
        createSpanMailVacio();
        valido = false;
    } else if (validarCorreo(email)) {
        createSpanMailInvalido();
        valido = false;
    }

    //validaciones para el correo
    if (datoVacio(password)) {
        createSpanCorreoVacio();
        valido = false;
    } else if (password(pass)) {
        createSpanSeguridad();
        valido = false;
    }

    //validaciones para el selector
    if (selector == 0) {
        createSpanSelector();
        valido = false;
    }

    if (valido) {
        limpiarForm();
    }
}