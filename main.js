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

let nombre = prompt("Solicitar nombre")
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

function mostrarSeleccion(seleccionArgentina){
    seleccionArgentina.forEach( jugador => {
        console.log(jugador.nombre + " " + jugador.apellido + " Club: " + jugador.club + " " + jugador.edad + " Años " + jugador.posicion + " Posición: " + jugador.partidosJudados + " Partidos Jugados ")

        document.write("<p style='padding:15px; font-size:1.5rem; text-align:center; color:#efb810'>" + jugador.nombre + " " + jugador.apellido + " Club: " + jugador.club + " " + jugador.edad + " Años " + jugador.posicion + " Posición: " + jugador.partidosJudados + " Partidos Jugados " + "</p>")

    })
}

function noResultados(){
    console.log("No hay Resultados")
    document.write("<p style='color:red; padding:10px; font-size:2rem; text-align:center'>No hay Resultados</p>")
}


function filtrarNombre(jugador){
    if(datosBusqueda.nombre){
        return jugador.nombre == datosBusqueda.nombre
    }
    return jugador;
}

function filtrarApellido(jugador){
    if(datosBusqueda.npellido){
        return jugador.apellido == datosBusqueda.apellido
    }
    return jugador;
}

function filtrarClub(jugador){
    if(datosBusqueda.club){
        return jugador.club >= datosBusqueda.club
    }
    return jugador;
}

function filtrarEdad(jugador){
    if(datosBusqueda.edad){
        return jugador.edad <= datosBusqueda.edad
    }
    return jugador;
}

function filtrarPosicion(jugador){
    if(datosBusqueda.posicion){
        return jugador.posicion == datosBusqueda.posicion
    }
    return jugador;
}

function filtrarPartidosJugados(jugador){
    if(datosBusqueda.partidosJudados){
        return jugador.partidosJudados == datosBusqueda.partidosJudados
    }
    return jugador;
}



function filtrarSeleccion(){
    let resultado = seleccionArgentina.filter(filtrarNombre).filter(filtrarApellido).filter(filtrarClub).filter(filtrarEdad).filter(filtrarPosicion).filter(filtrarPartidosJugados);
    console.log(resultado.length)
    if(resultado.length){
        mostrarSeleccion(resultado)
    }else {
        noResultados()
    }
}


filtrarSeleccion();