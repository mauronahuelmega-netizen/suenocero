// --- Lógica de Animación (Intersection Observer) ---
document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todos los elementos con la clase 'js-animate'
    const animatedElements = document.querySelectorAll('.js-animate');

    if (animatedElements.length === 0) return;

    // Opciones del observador
    const observerOptions = {
        root: null, // El viewport es el root
        rootMargin: '0px',
        // El elemento es visible cuando el 10% de él está en el viewport
        threshold: 0.1 
    };

    // Callback que se ejecuta cuando la visibilidad de un elemento cambia
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si el elemento es visible, añade la clase 'is-visible'
                entry.target.classList.add('is-visible');
                // Deja de observar el elemento una vez animado
                observer.unobserve(entry.target); 
            }
        });
    };

    // Inicializar el observador
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observar cada elemento
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});