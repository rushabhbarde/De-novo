document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.sticky-header');
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('.desktop-nav');
    const closeButton = document.querySelector('.close-button');
    const splashScreen = document.querySelector('.splash-screen');
    const splashScreen2 = document.querySelector('.splash-screen2');
    const content = document.querySelector('.content');

    splashScreen.style.display = 'flex'; 
    splashScreen2.style.display = 'flex'; 
    content.style.display = 'none'; 
    header.style.display = 'none';

    function showContent() {
        splashScreen.style.display = 'none';
        splashScreen2.style.display = 'none';
        content.style.display = 'block';
        header.style.display = 'flex'
    }

    setTimeout(showContent, 3000);
    
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
