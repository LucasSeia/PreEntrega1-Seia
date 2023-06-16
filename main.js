let tareas = {};

function agregarTarea() {
  while (true) {
    titulo = prompt("Ingrese el título de la tarea:");
    descripcion = prompt("Ingrese la descripción de la tarea:");

    tareas[titulo] = descripcion;

    if (!confirm('¿Quieres agregar otra?')) {
      alert('¡No te olvides de realizarlas!');
      break; // Salir del bucle si no se desea agregar más tareas
    }
  }
}

function verListaTareas() {
  console.log('--- Lista de Tareas ---');
  for (let titulo in tareas) {
    console.log('Título: ' + titulo);
    console.log('Descripción: ' + tareas[titulo]);
    console.log('-----------------------');
  }
}

function eliminarTarea() {
  let titulo = prompt("Ingrese el título de la tarea que desea eliminar:");
  if (tareas.hasOwnProperty(titulo)) {
    let confirmarEliminar = confirm('¿Estás seguro de que deseas eliminar la tarea "' + titulo + '"?');
    if (confirmarEliminar) {
      delete tareas[titulo];
      console.log('La tarea "' + titulo + '" ha sido eliminada correctamente.');
    } else {
      console.log('Se canceló la eliminación de la tarea "' + titulo + '".');
    }
  } else {
    console.log('No se encontró ninguna tarea con el título "' + titulo + '".');
  }
}


agregarTarea(); // Llamar a la función para comenzar a agregar tareas
verListaTareas();
eliminarTarea();


