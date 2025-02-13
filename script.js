// Animaciones al hacer scroll
window.addEventListener("scroll", function () {
    let elements = document.querySelectorAll(".products, .testimonials, .benefits");
    let windowHeight = window.innerHeight;

    elements.forEach(function (element) {
        let position = element.getBoundingClientRect().top;
        if (position < windowHeight - 50) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
});

// Carrusel de testimonios
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".testimonial-slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    document.getElementById("prevTestimonial").addEventListener("click", function () {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    });

    document.getElementById("nextTestimonial").addEventListener("click", function () {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        showSlide(currentSlide);
    });

    // Cambio automático cada 5 segundos
    setInterval(() => {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        showSlide(currentSlide);
    }, 5000);

    // Mostrar el primer slide al cargar la página
    showSlide(currentSlide);
});
