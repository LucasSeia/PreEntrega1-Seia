/* let tarea = prompt('Ingresa una tarea');

if(tarea != ''){
    console.log(tarea);
}else{
    alert("Debes ingresar un valor");
}

 */

/* let listaTareas = 'Lista de Tareas:'; 

let titulo = prompt("Ingrese el título de la tarea:");
let descripcion = prompt("Ingrese la descripción de la tarea:");



function agregarTarea() {
  while(true){
        if (confirm('¿Quieres agregar otra?')){
            titulo = prompt("Ingrese el título de la tarea:");
            descripcion = prompt("Ingrese la descripción de la tarea:");

            // Crear un objeto para representar la tarea
            let tarea = {
                titulo: titulo,
                descripcion: descripcion,
            };
            
            console.log('La terea es: ' + titulo)
            console.log('La descripción de la tarea es: ' + descripcion)
        } else {
            alert('¡No te olvides de realizarlas!')
            break;
        }
    }
}

console.log('La terea es: ' + titulo)
console.log('La descripción de la tarea es: ' + descripcion)

agregarTarea() */

let titulo = prompt("Ingrese el título de la tarea:");
let descripcion = prompt("Ingrese la descripción de la tarea:");

function agregarTarea() {
  while (true) {
    console.log('La tarea es: ' + titulo);
    console.log('La descripción de la tarea es: ' + descripcion);

    if (!confirm('¿Quieres agregar otra?')) {
      alert('¡No te olvides de realizarlas!');
      break; // Salir del bucle si no se desea agregar más tareas
    }

    titulo = prompt("Ingrese el título de la tarea:");
    descripcion = prompt("Ingrese la descripción de la tarea:");
  }
}

agregarTarea(); // Llamar a la función para comenzar a agregar tareas

// console.log(listaTareas);
console.log('La tarea es: ' + titulo);
console.log('La descripción de la tarea es: ' + descripcion);

