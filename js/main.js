const inputBusqueda = document.getElementById('search');
const filtroPosicion = document.getElementById('posicion');
const jugadoresContainer = document.getElementById('jugadores-container');

inputBusqueda.addEventListener('input', filtrarJugadores);
filtroPosicion.addEventListener('change', filtrarJugadores);

document.addEventListener('DOMContentLoaded', () => {
  cargarJugadores(); 
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

function cargarJugadores() {
  fetch('seleccion/jugadores.json') 
    .then(response => response.json())
    .then(data => mostrarJugadores(data.jugadores))
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

function mostrarJugadores(jugadores) {
  jugadores.forEach(jugador => {
    const jugadorCard = document.createElement('div');
    jugadorCard.className = 'card'; 
    jugadorCard.innerHTML = `
      <div class="card">
        <img src="${jugador.imagen}" alt="${jugador.nombre}" class="imagen-jugador">
        <div class="info-card">
          <h4>${jugador.nombre}</h4>
          <p>${jugador.equipo}</p>
          <p>${jugador.edad} años</p>
          <p>${jugador.posicion}</p>
        </div>
      </div>
    `;
    jugadoresContainer.appendChild(jugadorCard);
  });

  
  jugadoresContainer.classList.add('grid-container');
}


function filtrarJugadores() {
  const terminoBusqueda = inputBusqueda.value.toLowerCase();
  const posicionSeleccionada = filtroPosicion.value.toLowerCase();
  let resultadosEncontrados = false; 

  const cartasJugadores = jugadoresContainer.querySelectorAll('.card'); 

  cartasJugadores.forEach(cartajugador => {
    const nombreJugador = cartajugador.querySelector('h4').textContent.toLowerCase();
    const posicionJugador = cartajugador.querySelector('.info-card > p:nth-child(4)').textContent.toLowerCase();

    const coincideTermino = nombreJugador.includes(terminoBusqueda);
    const coincidePosicion = posicionSeleccionada === '' || posicionJugador === posicionSeleccionada;

    if (coincideTermino && coincidePosicion) {
      cartajugador.style.display = 'block';
      resultadosEncontrados = true; 
    } else {
      cartajugador.style.display = 'none';
    }
  });

  if (!resultadosEncontrados && (terminoBusqueda || posicionSeleccionada)) {
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






