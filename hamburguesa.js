// 7) Comportamiento Javascript
document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar el botón hamburguesa y el menú lateral
    const toggleBtn = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    // Agregar el listener para alternar la clase 'open'
    toggleBtn.addEventListener("click", () => {
        // Alterna la clase 'open' en el menú lateral para deslizarlo
        mobileMenu.classList.toggle("open");
        
        // Opcional: Bloquear el scroll del cuerpo cuando el menú está abierto
        document.body.style.overflow = mobileMenu.classList.contains("open") ? "hidden" : "auto";
    });

    // Lógica para cerrar el menú si se hace clic en un enlace
    const menuLinks = mobileMenu.querySelectorAll("a");
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Cierra el menú después de un breve retraso para mejorar la UX
            setTimeout(() => {
                mobileMenu.classList.remove("open");
                document.body.style.overflow = "auto";
            }, 300);
        });
    });
});