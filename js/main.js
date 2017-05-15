//función que valida que los campos tengan algún contenido
function ingresoDatos(nombre, apellido, email, password) {
    if (nombre === '' || apellido === '' || email === '' || password === '') {
        alert('Debes ingresar todos los datos solicitados');
    }
}

//función que valida que el contenido tenga a-z y A-Z
function contenidoAlfa(data) {
    var expReg = /^[a-zA-Z ]+$/;
    if (!expReg.test(data)) {
        //console.log('no valido');
        alert('Debes ingresar todos los datos solicitados [a-z][A-Z]');
    } else {
        //console.log('valido');
        return true;
    }
}

//función para que la primera letra sea mayuscula
function primeraMayus(str) {
    var primera = str[0];
    var continuacion = str.slice(1, str.length);
    return primera.toUpperCase() + continuacion;
}

//función para validar el correo
function validarCorreo(correo) {
    var expRegCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (expRegCorreo.test(correo)) {
        console.log('correo valido');
    } else {
        console.log('correo no valido');
    }
}

//función que valida la contraseña
function password(pass) {
    //la contraseña debe tener al menos 6 caracteres
    var largoPass = pass.length;
    if (largoPass < 6 || pass == 'password' || pass == '123456' || pass == '098754') {
        console.log('contraseña no valida');
    } else {
        console.log('contraseña valida');
    }
}



function validateForm() {
    //Obtener ingreso por formulario de todos los campos
    var nombre = document.getElementById('name').value;
    var apellido = document.getElementById('lastname').value;
    var email = document.getElementById('input-email').value;
    var password = document.getElementById('input-password').value;
    //agregue el id selector en el select
    var selector = document.getElementById('selector').value; //no puede tener el valor 0


    //Llamo a las funciones
    if (ingresoDatos(nombre, apellido, email, password) || contenidoAlfa(nombre) || contenidoAlfa(apellido)) {
        return true;
    }

}