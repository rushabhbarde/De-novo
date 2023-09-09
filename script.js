document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.sticky-header');
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('.desktop-nav');
    const closeButton = document.querySelector('.close-button');
    const splashScreen = document.querySelector('.splash-screen');
    const splashScreen2 = document.querySelector('.splash-screen2');
    const content = document.querySelector('.content');
    
    /*setTimeout(function () {
        // Hide the splash screens
        splashScreen.style.display = 'none';
        splashScreen2.style.display = 'none';
    }, 10000);*/

    splashScreen.style.display = 'flex'; // You can change this to 'none' if you want to hide it initially
    splashScreen2.style.display = 'flex'; // You can change this to 'none' if you want to hide it initially
    content.style.display = 'none'; 
    header.style.display = 'none'// Hide the content initially

    // Function to hide the splash screens and show the content
    function showContent() {
        splashScreen.style.display = 'none';
        splashScreen2.style.display = 'none';
        content.style.display = 'block';
        header.style.display = 'flex'
    }

    // Set a timeout to show the content after a certain duration (e.g., 10 seconds)
    setTimeout(showContent, 3000);
    
    menuButton.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
    closeButton.addEventListener('click', function () {
        nav.classList.remove('show');
    });

    // Close the sidebar when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!nav.contains(event.target) && !menuButton.contains(event.target)) {
            nav.classList.remove('show');
        }
    });

    // Sticky Header (as before)
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
});
