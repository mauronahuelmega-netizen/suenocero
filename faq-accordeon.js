// --- Lógica del Acordeón para Preguntas Frecuentes ---

const setupFAQAccordion = () => {
    // Selecciona todos los elementos de FAQ
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        // Busca el botón de la pregunta dentro de cada item
        const questionButton = item.querySelector('.faq-question');
        
        // Agrega el listener de evento click
        if (questionButton) {
            questionButton.addEventListener('click', () => {
                // Alterna la clase 'open' en el elemento principal (faq-item)
                item.classList.toggle('open');
                
                // Opcional: Cerrar otros elementos abiertos (puedes descomentar esto si lo prefieres)
                /*
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('open')) {
                        otherItem.classList.remove('open');
                    }
                });
                */
            });
        }
    });
};

// ** ACTIVACIÓN CLAVE: Llama a la función una vez que el DOM esté completamente cargado. **
document.addEventListener("DOMContentLoaded", setupFAQAccordion);