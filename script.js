// Función para alternar el menú móvil
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active"); // Alterna la clase "active"
}

// Función reutilizable para animaciones de entrada
function setupFadeInAnimation(selector, threshold = 0.2) {
  document.addEventListener("DOMContentLoaded", () => {
      const elements = document.querySelectorAll(selector);
      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("active");
              }
          });
      }, { threshold });
      elements.forEach((element) => observer.observe(element));
  });
}

// Configurar animaciones
setupFadeInAnimation(".fade-in", 0.2); // Animaciones generales
setupFadeInAnimation(".footer-left, .footer-center, .footer-right", 0.5); // Animaciones del footer

