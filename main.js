document.addEventListener("DOMContentLoaded", function() {
    const mainContent = document.querySelector("main");
    mainContent.classList.add("visible");

    // Defina os elementos dentro do DOMContentLoaded
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    // Certifique-se de que os elementos existem antes de adicionar os eventos
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');

            // Alterna a classe 'show' no menu
            navMenu.classList.toggle('show');
        });
    }

    // Inicializa o carrossel
    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-item');
        if (index >= slides.length) currentSlide = 0;
        if (index < 0) currentSlide = slides.length - 1;

        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === currentSlide) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide++;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide--;
        showSlide(currentSlide);
    }

    // Atribui os eventos de clique aos botões do carrossel
    const nextButton = document.querySelector('.carousel-controls .next');
    const prevButton = document.querySelector('.carousel-controls .prev');

    if (nextButton) {
        nextButton.addEventListener('click', nextSlide);
    }

    if (prevButton) {
        prevButton.addEventListener('click', prevSlide);
    }

    // Inicializa o primeiro slide
    showSlide(currentSlide);

    // Função de scroll automático (se necessário)
    const slider = document.querySelector('.themes-wrapper');
    let isDown = false;
    let scrollLeft;
    let scrollSpeed = window.innerWidth < 768 ? 0.8 : 0.6; 
    let scrollPos = 0;

    window.addEventListener('resize', () => {
        scrollSpeed = window.innerWidth < 768 ? 0.8 : 0.6;
    });

    // Função para scroll automático
    function autoScroll() {
        if (!isDown && slider.scrollWidth > slider.clientWidth) {
            scrollPos += scrollSpeed;
            slider.scrollLeft = scrollPos;

            // Verifica se chegou ao final do conteúdo e reinicia o scroll
            if (scrollPos >= slider.scrollWidth / 2) {
                scrollPos = 0; // Reinicia a posição
            }
        }
        
        requestAnimationFrame(autoScroll); // Mantém o loop
    }

    // Inicia o scroll automático, se necessário
    if (slider) {
        autoScroll();
    }
});
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'fade-in', 'fade-out'); // Remove classes de animação
        if (i === currentSlide) {
            slide.classList.add('fade-in'); // Adiciona animação de entrada
            slide.classList.add('active'); // Define como ativo
        } else {
            slide.classList.add('fade-out'); // Adiciona animação de saída para os não ativos
        }
    });
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

// Inicializa o primeiro slide
showSlide(currentSlide);
