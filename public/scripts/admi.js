
console.log("hola soy admi");


// const btn = document.getElementById("btn");
// btn.addEventListener("click",()=>{
// Ingresar();


// }); 



// Función para obtener datos de la base de datos
const mostrarUsuarios = async () => {
  try {
    const response = await fetch('http://localhost:9000/api/obtenerusuario');
    const data = await response.json();
    console.log(data)
    // Llamar a la función para crear filas en la tabla con los datos recibidos
    crearTabla(data);
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}


// Función para crear tarjetas con los datos de los productos
function crearTabla(Usuarios) {
  const tabla = document.getElementById("Tabla");

  tabla.innerHTML = "";
  Usuarios.forEach(Usuario => {

    // creamos una fila en la tabla
    tabla.innerHTML += `
          // <tr>
          //   <td>${Usuario.nombreCompleto}</td>
          //   <td>${Usuario.correo}</td>
          //   <td class="acciones">
          //     <button type="button" class="btn btn-info" id="${Usuario._id}" onclick='editarUsuario(event)'>
          //       <i class="bi bi-pencil-square"></i>
          //       Editar
          //     </button>

          //     <button type="button" class="btn btn-danger" id="${Usuario._id}" onclick='eliminarUsuario(event)'>
          //       <i class="bi bi-trash"></i>
          //       Eliminar
          //     </button>
          //   </td>
          // </tr>
          // `;

          const btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
eliminarUsuario(Event);

}); 
  });
}

mostrarUsuarios();


function eliminarUsuario(event) {
  console.log("eliminar");
  const idUsuarioEliminar = event.target.id;
  console.log(idUsuarioEliminar);

  fetch("http://localhost:9000/api/eliminarUsuario/:_id", {
    method: "DELETE",
  }).then(response => {
    if (!response.ok) {
      throw new Error("Error al eliminar usuario");
    }
    alert("Usuario eliminado correctamente");
    mostrarUsuarios();
  }).catch(error => {
    console.error("Error al eliminar usuario:", error);
  });
}

function editarUsuario(event) {
  console.log("editar");
  const idUsuarioEditar = event.target.id;
  console.log(idUsuarioEditar);
}