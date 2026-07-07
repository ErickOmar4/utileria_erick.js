function iniciarSesion(){
    let correo = document.getElementById("correo").value;
    let contraseña = document.getElementById("password").value;
    /*const elSpan = document.getElementById("correo-r");*/

if(validarCorreo(correo)){
                document.getElementById("emal-r").textContent = "Correo válido";
                document.getElementById("emal-r").style.color = "green";
            }else{
                document.getElementById("emal-r").textContent = "Correo inválido";
                document.getElementById("emal-r").style.color = "red";
            }

            if(validarPassword(contraseña)){
                document.getElementById("contraseña-r").textContent = "Contraseña válida";
                document.getElementById("contraseña-r").style.color = "green";
            }else{
                document.getElementById("contraseña-r").textContent = "mínimo 8 caracteres, mayúscula, minúscula,  número y  carácter especial.";
                document.getElementById("contraseña-r").style.color = "red";
            }
}