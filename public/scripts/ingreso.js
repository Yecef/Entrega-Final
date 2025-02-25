
console.log("hola soy ingreso");

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    Ingresar();


});

async function Ingresar() {
    const correo = document.getElementById('Usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    console.log(correo, contrasena);
    try {
        //2. Realizar la solicitud GET al servidor para verificar el inicio de sesión
        const respuesta = await fetch('http://localhost:9000/api/obtenerUsuario');
        const usuarios = await respuesta.json();

        console.log(usuarios);

        //3. Verificar si se encontró un usuario con el correo y la contraseña proporcionados

        //Primero verificamos si está en los usuarios de la base de datos
        const esUsuarioRegistrado = usuarios.find(usuario => usuario.correo == correo && usuario.contrasena == contrasena);

        console.log(esUsuarioRegistrado);

        if (esUsuarioRegistrado) {
            //Ahora verificamos si es admin
            const correoAdmin = "admi.23@gmail.com";

            if (esUsuarioRegistrado.correo == correoAdmin) {
                alert('Hola administrador!');
                window.location.href = './admi.html';
            } else {
                alert('Ingreso exitoso!');
                window.location.href = './index.html';
            }

        } else {
            alert('Correo o contraseña incorrectos. Usuario no encontrado! Vuelve a intentarlo o regístrate!');
        }


    } catch (error) {
        console.error('Error al verificar inicio de sesión:', error);

    }

}