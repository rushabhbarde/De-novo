document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.sticky-header');
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('.desktop-nav');
    const closeButton = document.querySelector('.close-button');

    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    
    menuButton.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
    closeButton.addEventListener('click', function () {
        nav.classList.remove('show');
    });
    document.addEventListener('click', function (event) {
        if (!nav.contains(event.target) && !menuButton.contains(event.target)) {
            nav.classList.remove('show');
        }
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    function goToSlide(index) {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        }
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex--;
        goToSlide(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        goToSlide(currentIndex);
    });

    // Optional: Auto play the slider
    let autoPlayInterval;
    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            currentIndex++;
            goToSlide(currentIndex);
        }, 3000); // Change slide every 3 seconds
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    startAutoPlay();

    // Pause auto play on hover (optional)
    slider.addEventListener('mouseenter', stopAutoPlay);
    slider.addEventListener('mouseleave', startAutoPlay);
});
