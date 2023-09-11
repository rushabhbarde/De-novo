document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.sticky-header');
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('.desktop-nav');
    const closeButton = document.querySelector('.close-button');
    
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
});
