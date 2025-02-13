window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.products, .testimonials, .benefits');
    let windowHeight = window.innerHeight;
    
    elements.forEach(function(element) {
        let position = element.getBoundingClientRect().top;
        if (position < windowHeight - 50) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});
