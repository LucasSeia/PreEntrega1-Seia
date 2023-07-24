/* ----------------------------- PRIMER PRE-ENTREGA ------------------------------- */

/* function calcularOperacion(num1, num2, operacion) {
  let resultado;

  if (operacion === '+') {
    resultado = num1 + num2;
  } else if (operacion === '-') {
    resultado = num1 - num2;
  } else if (operacion === '*') {
    resultado = num1 * num2;
  } else if (operacion === '/') {
    resultado = num1 / num2;
  } else {
    return "Operación no válida.";
  }

  return "El resultado de la operación es: " + resultado;
}


let continuar;


do {
  let numero1 = parseFloat(prompt("Ingrese el primer número:"));
  let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
  let operacion = prompt("Ingrese la operación a realizar (+, -, *, /):");

  let resultadoOperacion = calcularOperacion(numero1, numero2, operacion);
  console.log(resultadoOperacion);

  continuar = prompt("¿Desea realizar otra operación? (Sí/No)").toLowerCase();
} while (continuar === 'sí' || continuar === 'si'); */


/* ----------------------------- SEGUNDA PRE-ENTREGA ------------------------------- */


/* let nombre = prompt("Solicitar nombre")
let apellido = prompt("Solicitar apellido")
let club = prompt("Solicitar club")
let edad = prompt("Solicitar edad")
let posicion = prompt("Solicitar posicion")
let partidosJudados = prompt("Solicitar partidos jugados")

const datosBusqueda = {
    nombre: nombre,
    apellido: apellido,
    club: club,
    edad: edad,
    posicion: posicion,
    partidosJudados: partidosJudados
}

function mostrarSeleccion(seleccionArgentina) {
    seleccionArgentina.forEach(jugador => {
        console.log(jugador.nombre + " " + jugador.apellido + ", Club: " + jugador.club + ", " + jugador.edad + " Años, Posición: " + jugador.posicion + ", " + jugador.partidosJudados + " Partidos Jugados ");

        document.write("<p style='padding:15px; font-size:1.5rem; text-align:center; color:#efb810'>" + jugador.nombre + " " + jugador.apellido + ", Club: " + jugador.club + ", " + jugador.edad + " Años, Posición: " + jugador.posicion + ", " + jugador.partidosJudados + " Partidos Jugados" + "</p>")
    });
}

function noResultados(){
    console.log("No se han encontrado resultados")
    document.write("<p style='color:red; padding:10px; font-size:2rem; text-align:center'>No se han encontrado resultados</p>")
}

function filtrarNombre(jugador){
    if (datosBusqueda.nombre) {
        return jugador.nombre == datosBusqueda.nombre
    }
    return jugador;
}

function filtrarApellido(jugador){
    if (datosBusqueda.apellido) {
        return jugador.apellido == datosBusqueda.apellido
    }
    return jugador;
}

function filtrarClub(jugador){
    if (datosBusqueda.club) {
        return jugador.club == datosBusqueda.club
    }
    return jugador;
}

function filtrarEdad(jugador){
    if (datosBusqueda.edad) {
        return jugador.edad >= datosBusqueda.edad
    }
    return jugador;
}

function filtrarPosicion(jugador){
    if (datosBusqueda.posicion) {
        return jugador.posicion == datosBusqueda.posicion
    }
    return jugador;
}

function filtrarPartidosJugados(jugador){
    if (datosBusqueda.partidosJudados) {
        return jugador.partidosJudados == datosBusqueda.partidosJudados
    }
    return jugador;
}

function filtrarSeleccion(){
    let resultado = seleccionArgentina.filter(filtrarNombre).filter(filtrarApellido).filter(filtrarClub).filter(filtrarEdad).filter(filtrarPosicion).filter(filtrarPartidosJugados);
    console.log(resultado.length);
    if (resultado.length) {
        mostrarSeleccion(resultado)
    }else {
        noResultados();
    }
}

filtrarSeleccion(); */

/* ----------------------------- TERCERA PRE-ENTREGA ------------------------------- */

// Obtener elementos relevantes del DOM
const inputBusqueda = document.getElementById('search');
const filtroPosicion = document.getElementById('posicion');
const jugadores = document.querySelectorAll('.card');

// Agregar un evento de escucha al input de búsqueda y al filtro de posiciones
inputBusqueda.addEventListener('input', filtrarJugadores);
filtroPosicion.addEventListener('change', filtrarJugadores);

document.addEventListener('DOMContentLoaded', () => {
    const searchTerm = localStorage.getItem('searchTerm');
    const selectedPosition = localStorage.getItem('selectedPosition');
  
    if (searchTerm) {
      inputBusqueda.value = searchTerm;
    }
  
    if (selectedPosition) {
      filtroPosicion.value = selectedPosition;
    }
  
    filtrarJugadores();
});

function filtrarJugadores() {
    const terminoBusqueda = inputBusqueda.value.toLowerCase();
    const posicionSeleccionada = filtroPosicion.value.toLowerCase();
    let resultadosEncontrados = false; // Agregamos esta variable para rastrear si se encontraron resultados

    jugadores.forEach(jugador => {
      const nombreJugador = jugador.querySelector('h4').textContent.toLowerCase();
      const posicionJugador = jugador.querySelector('.info-card > p:nth-child(4)').textContent.toLowerCase();

      const coincideTermino = nombreJugador.includes(terminoBusqueda);
      const coincidePosicion = posicionSeleccionada === '' || posicionJugador === posicionSeleccionada;

      if (coincideTermino && coincidePosicion) {
        jugador.style.display = 'block';
        resultadosEncontrados = true; // Marcamos que se encontraron resultados
      } else {
        jugador.style.display = 'none';
      }
    });

    // Mostrar alerta si no se encontraron resultados
    if (!resultadosEncontrados) {
      Swal.fire({
        icon: "warning",
        title: "No se encontraron resultados",
        text: "Inténtalo con otra búsqueda.",
        confirmButtonColor: "#007bff",
      });
    }

    localStorage.setItem('searchTerm', terminoBusqueda);
    localStorage.setItem('selectedPosition', posicionSeleccionada);
}





