function validarFormulario(){
            let nombre = document.getElementById("nombre").value;
            let telefono = document.getElementById("telefono").value;
            let fecha = document.getElementById("fecha").value;
            let cp = document.getElementById("cp").value;
            let texto = document.getElementById("texto").value;
            let correo = document.getElementById("correo").value;
            let tel = document.getElementById("telefono").value;
            

            if(soloLetras(nombre)){
                document.getElementById("mensajeNombre").textContent = "Nombre válido";
                document.getElementById("mensajeNombre").style.color = "green";
            }else{
                document.getElementById("mensajeNombre").textContent = "Nombre inválido";
                document.getElementById("mensajeNombre").style.color = "red";
            }

            if(validarLongitud(telefono,10)){
                document.getElementById("mensajeTelefono").textContent = "Teléfono válido";
                document.getElementById("mensajeTelefono").style.color = "green";
                /*formatearTelefono(tel);
                document.getElementById("f_numero").textContent = formatearTelefono(tel);*/

                const inputTelefono = document.getElementById('f_numero');
                inputTelefono.value = formatearTelefono(tel);
            }else{
                document.getElementById("mensajeTelefono").textContent = "Teléfono inválido";
                document.getElementById("mensajeTelefono").style.color = "red";
            }

            if(fecha === ""){
                document.getElementById("mensajeEdad").textContent = "Ingrese una fecha de nacimiento";
                document.getElementById("mensajeEdad").style.color = "red";
            }else if(esMayorDeEdad(fecha)){
                document.getElementById("mensajeEdad").textContent = "Mayor de edad";
                document.getElementById("mensajeEdad").style.color = "green";
            }else{
                document.getElementById("mensajeEdad").textContent = "Menor de edad";
                document.getElementById("mensajeEdad").style.color = "red";
            }

            if(validarCodigoPostal(cp)){
                document.getElementById("mensajeCP").textContent = "Código Postal válido";
                document.getElementById("mensajeCP").style.color = "green";
            }else{
                document.getElementById("mensajeCP").textContent = "Código Postal inválido";
                document.getElementById("mensajeCP").style.color = "red";
            }

            document.getElementById("mensajeTexto").textContent = "Cantidad de caracteres: " + contarCaracteres(texto);
            document.getElementById("mensajeTexto").style.color = "green";

            if(validarCorreo(correo)){
                document.getElementById("emal-r").textContent = "Correo válido";
                document.getElementById("emal-r").style.color = "green";
            }else{
                document.getElementById("emal-r").textContent = "Correo inválido";
                document.getElementById("emal-r").style.color = "red";
            }

        }

        function abrirModal(){
            let fecha=document.getElementById("fecha").value;
            if(fecha === ""){
                document.getElementById("edadCalculada").textContent =
                " ingrese una fecha de nacimiento para calcular.";
            }else{

                let edad = calcularEdad(fecha);

                document.getElementById("edadCalculada").textContent =
                "tienes" + edad + " años";

            }
            document.getElementById("modal").style.display="block";
        }

        function cerrarModal(){
            document.getElementById("modal").style.display="none";
        }