function calcularOperacion(num1, num2, operacion) {
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
} while (continuar === 'sí' || continuar === 'si');