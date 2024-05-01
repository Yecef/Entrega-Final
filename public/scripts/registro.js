console.log("hola soy registro");

const btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
registrarUsuario();

}); 

const registrarUsuario = async () => {

    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    console.log(nombreCompleto, correo, contrasena);

    const datosUsuario = {
        nombreCompleto,
        correo,
        contrasena
    };

    console.log(datosUsuario);


    try {
        const respuesta = await fetch('http://localhost:9000/api/crearUsuario', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosUsuario)
        });


        const nuevoUsuario = await respuesta.json();
        console.log('Usuario creado:', nuevoUsuario);

        if(nuevoUsuario){
            alert("Registro Exitoso");
            window.location.href = "./ingreso.html";
        }else{
            alert('Error de registro, inténtalo nuevamente');
        }

    } catch (error) {
        console.error('Error al registrar usuario:', error);
    }

}