// Función para cargar el HEAD y HEADER
function loadCommonComponents() {
  // Inyectar HEADER
  document.body.insertAdjacentHTML(
    "afterbegin",
    `
        
        <nav class="top-header">
            <a href="/index.html" class="logo">
                <img src="/imagenes/logo.png" alt="Logo Artea">
            </a>
            <!-- BOTÓN HAMBURGUESA -->
            <button class="menu-toggle" aria-label="Abrir menú">
            &#9776;
            <!-- Ícono de hamburguesa -->
            </button>
            <ul class="menu-horizontal">
                    <li><a href="/index.html">Inicio</a></li>
                    <li><a href="/principales/galeria.html">Galería</a>
                        <ul class="menu-vertical">
                          <li><a href="/galeria/panel-tendencias.html">Tendencias</a><li>
                          <li><a href="/galeria/buen-trabajo.html">Recursos</a></li>
                          </ul>
                    </li>
                    <li><a href="/principales/crear.html">Crear</a>
                        <ul class="menu-vertical">
                        <li><a href="/crear/emocion-inicio.html">¿Cómo te sientes antes de comenzar?</a></li>
                        <li><a href="/crear/evento-invitacion.html">Eventos Especiales</a></li>
                        </ul>
                    
                    </li>
                    <li>
                        <a>Inspiración</a>
                        <ul class="menu-vertical">
                            <li><a href="/inspiracion/inspiracion.html">Inspírate cada día</a></li>
                            <li><a href="/inspiracion/crea.html">Crea con Libertad</a></li>
                            <li><a href="/inspiracion/registrar-ciclo.html">Registrar ciclo <br/>académico</a></li>
                            <li><a href="/inspiracion/salas-creativas.html">Salas creativas</a></li>
                            <li><a href="/inspiracion/pausa-invitacion.html">¿Te gustaria tomar una pausa emocional? </a></li>
                        </ul>
                    </li>
                    <li><a href="/principales/contacto.html">Contacto</a></li>
                    <li><a href="/principales/nosotros.html">Nosotros</a></li>
                    <li><a href="/principales/opiniones.html">Opiniones</a></li>
                    <li>
                    <a href="/cuenta/cuenta.html" class="btn-cuenta">
  <i class="fa-solid fa-circle-user"></i>
  <span>Cuenta</span>
</a>
                  </li>
            </ul>
        </nav>
        <main>
    `
  );

  // Inyectar FOOTER
  document.body.insertAdjacentHTML(
    "beforeend",
    `
        <footer>
            <p>&copy; 2025 Artea | Todos los derechos reservados</p>
        </footer>
    `
  );
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", loadCommonComponents);

document.addEventListener("DOMContentLoaded", () => {
  // Selecciona el botón de hamburguesa
  const btn = document.querySelector(".menu-toggle");

  // Selecciona el menú horizontal
  const menu = document.querySelector(".menu-horizontal");

  // Al hacer clic en el botón de hamburguesa
  btn.addEventListener("click", () => {
    // Alterna (agrega o quita) la clase "active" en el menú
    // Esto hace que se muestre o se oculte
    menu.classList.toggle("active");

    // (opcional) También puedes alternar una clase en el botón si quieres cambiar su apariencia
    // btn.classList.toggle("open");
  });
});
