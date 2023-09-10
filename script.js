document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.sticky-header');
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('.desktop-nav');
    const closeButton = document.querySelector('.close-button');
    const splashScreen = document.querySelector('.splash-screen');
    const splashScreen2 = document.querySelector('.splash-screen2');
    const content = document.querySelector('.content');

    const openPopupButton = document.getElementById('open-popup');
    const openPopupButton1 = document.getElementById('open-popup1');
    const closePopupButton = document.getElementById('close-popup');
    const popup = document.getElementById('popup');

    const openSignupPopupButton = document.getElementById('open-signup-popup');
    const closeSignupPopupButton = document.getElementById('close-signup-popup');
    const signupPopup = document.getElementById('signup-popup');
    const loginLink = document.getElementById('open-login-popup');


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

    function openPopup() {
        popup.style.display = 'flex';
    }

    // Function to close the popup
    function closePopup() {
        popup.style.display = 'none';
    }

    function openSignupPopup() {
        signupPopup.style.display = 'flex';
    }

    function closeSignupPopup() {
        signupPopup.style.display = 'none';
    }

    // Event listeners
    openPopupButton.addEventListener('click', openPopup);
    openPopupButton1.addEventListener('click', openPopup);
    closePopupButton.addEventListener('click', closePopup);

    openSignupPopupButton.addEventListener('click', openSignupPopup);
    closeSignupPopupButton.addEventListener('click', closeSignupPopup);

    // Close the popup if the overlay is clicked
    popup.addEventListener('click', function (event) {
        if (event.target === popup) {
            closePopup();
        }
    });
    
    menuButton.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
    closeButton.addEventListener('click', function () {
        nav.classList.remove('show');
    });

    loginLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        closeSignupPopup(); // Close the signup popup
        openPopup(); // Open the signup popup
    });

    // Function to toggle password visibility

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
