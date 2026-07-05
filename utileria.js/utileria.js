
const validarCorreo = (correo) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(correo);
};

/** por ejemplo 
 * erick ----valido
 * pepe32 --falso 
 */
// Acepta letras con acentos, ñ y espacios este lo uso para el nombre
const soloLetras = (texto) => {
    const regex = /^[A-Za-z\sáéíóúÁÉÍÓÚñÑ]+$/
    return regex.test(texto);
};
/*
  validaLongitud(numero, maxLongitud)
  ejemplos
  validaLongitud(12345, 5)  // true
  validaLongitud(123456, 5) // false porque son 6 numeros y se esperava 5
 */
const validarLongitud = (numero, maxLongitud) => {
    return numero.length <= maxLongitud;
};

/*
 calcularEdad(fechaNacimiento)
  Calcular la edad exacta en años a partir de la fecha de nacimiento 
   {string|Date} fechaNacimiento - Fecha de nacimiento
  calcularEdad('2000-01-15') // 26 
  calcularEdad('1990-06-30') // 36
 */
const calcularEdad = (fechaNacimiento) => {
    const hoy = new Date();
    const birth = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - birth.getFullYear();
    const mes = hoy.getMonth() - birth.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < birth.getDate())) {
        edad--;
    }
    return edad;
};

/* esMayorDeEdad(fechaNacimiento)
es mayor de edasd cuando tiene al menos 18 años

 ejemplo
  esMayorDeEdad('2000-01-15') // true
  esMayorDeEdad('2010-01-15') // false
 */
const esMayorDeEdad = (fechaNacimiento) => {
    let edad = calcularEdad(fechaNacimiento);
    return edad >= 18;
};

/*validaPassword(password)
  Valida que la contraseña cumpla con:
Mínimo 8 caracteres
 1 mayúscula
 1 minúscula
 1 número
1 carácter especial
ejemplos
  validaPassword('Password123!') // true
 validaPassword('12345678')     // false (sin mayúscula, sin especial)
  validaPassword('Pass')         // false (le lantan caracteres )
 */
const validarPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    return regex.test(password);
};



const validarTelefono = (telefono) => {
    const regex = /^(\+?\d{1,3}\s?)?\d{10}$/;
    return regex.test(telefono);
};

const guardarUsuario = (correo, password) => {
    const usuario = {
        correo: correo,
        password: password,
        fechaRegistro: new Date().toLocaleDateString()
    };
    localStorage.setItem('usuario', JSON.stringify(usuario));
};

const obtenerUsuario = () => {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
        return JSON.parse(usuario);
    }
    return null;
};

const verificarLogin = (correo, password) => {
    const usuario = obtenerUsuario();
    if (usuario) {
        return usuario.correo === correo && usuario.password === password;
    }
    return false;
};


const mostrarModalRegistro = (nombre, correo, telefono, edad) => {
    Swal.fire({
        icon: "success",
        title: "Registro Exitoso",
        html: `
            <p><strong>Bienvenido, ${nombre}!</strong></p>
            <p>Correo: ${correo}</p>
            <p>Teléfono: ${telefono}</p>
            <p>Edad: ${edad} años</p>
        `,
        confirmButtonText: "Aceptar"
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'login.html';
        }
    });
};

const mostrarModalBienvenida = (correo) => {
    Swal.fire({
        icon: "success",
        title: "Bienvenido",
        text: `Has iniciado sesión correctamente\nCorreo: ${correo}`,
        confirmButtonText: "Aceptar"
    });
};

const mostrarModalError = (mensaje) => {
    Swal.fire({
        icon: "error",
        title: "Error",
        text: mensaje,
        confirmButtonText: "Aceptar"
    });
};

const mostrarValidacionEdad = (fecha) => {
    if (esMayorDeEdad(fecha)) {
        Swal.fire({
            icon: "success",
            title: "Edad Calculada",
            text: "Eres mayor de edad"
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Ooops",
            text: "Eres menor de edad"
        });
    }
};


/* las 2 extras------------------------------ */

/* formatearTelefono(telefono)
ponerlo en el formato mas comun (ej: +52 55 1234 5678)
 ejemplo
 formatearTelefono('5512345678') // '+52 55 1234 5678'
  formatearTelefono('1234567890') // '+52 12 3456 7890'
 */
function formatearTelefono(telefono) {
    const str = String(telefono).replace(/\D/g, '');
    if (str.length !== 10) return telefono;
    
    const parte1 = str.substring(0, 2);
    const parte2 = str.substring(2, 6);
    const parte3 = str.substring(6, 10);
    
    return `+52 ${parte1} ${parte2} ${parte3}`;
}
