document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    if (!slides.length) return;
    
    let currentSlide = 0;
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // Mostrar primeiro slide
    showSlide(0);
    
    // Adicionar event listeners para os botões
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
        nextButton.addEventListener('click', () => showSlide(currentSlide + 1));
    }
    
    // Auto-play com verificação
    const slideInterval = setInterval(() => {
        if (document.querySelector('.slide')) {
            showSlide(currentSlide + 1);
        } else {
            clearInterval(slideInterval);
        }
    }, 5000);
});
