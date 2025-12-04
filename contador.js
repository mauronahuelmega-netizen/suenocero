// --- Lógica del Contador Regresivo ---
const startCountdown = () => {
    
    const countDownDate = new Date("Apr 24, 2026 21:00:00").getTime();

    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        // Búsqueda de elementos
        const daysEl = document.getElementById("cd-days");
        const hoursEl = document.getElementById("cd-hours");
        const minutesEl = document.getElementById("cd-minutes");
        const secondsEl = document.getElementById("cd-seconds");
        
        // Comprobación de existencia para evitar errores si la sección no está cargada
        if (!daysEl) return; 

        // Cálculos de tiempo para Días, Horas, Minutos y Segundos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Formatea para asegurar dos dígitos (ej: 09 en lugar de 9)
        const formatNumber = num => num < 10 ? "0" + num : num;

        if (distance < 0) {
            // Cuando el contador llega a cero
            clearInterval(timerInterval);
            daysEl.textContent = "00";
            hoursEl.textContent = "00";
            minutesEl.textContent = "00";
            secondsEl.textContent = "00";
        } else {
            // Actualiza el DOM
            daysEl.textContent = formatNumber(days);
            hoursEl.textContent = formatNumber(hours);
            minutesEl.textContent = formatNumber(minutes);
            secondsEl.textContent = formatNumber(seconds);
        }
    };

    // Llama a la función una vez de inmediato y luego cada segundo
    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
};

// ** ESTA LÍNEA ES LA CLAVE **
// Llama a la función 'startCountdown' para iniciar el proceso.
document.addEventListener("DOMContentLoaded", startCountdown);