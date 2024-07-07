window.addEventListener('load', function() {
    // Cookie Banner Functionality
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('cookie-accept');

    if (cookieBanner && acceptButton) {
        if (!localStorage.getItem('cookieConsent')) {
            cookieBanner.style.display = 'block';
        }

        acceptButton.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'true');
            cookieBanner.style.display = 'none';
        });
    }

    // Swiper.js Initialization (for image carousels - remove if not using Swiper)
    // ... (Your Swiper.js code or remove this section if not needed)

    // Email Validation for Newsletter Form
    const signupForm = document.querySelector('.embeddable-buttondown-form');
    const emailInput = document.getElementById('bd-email');

    if (signupForm && emailInput) {
        signupForm.addEventListener('submit', function(event) {
            if (!validateEmail(emailInput.value)) {
                event.preventDefault();
                alert('Please enter a valid email address.');
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Fade-in Animation
    const elementsToFadeIn = document.querySelectorAll('.fade-in');
    function fadeInOnScroll() {
        for (const element of elementsToFadeIn) { 
            if (element.offsetTop < window.pageYOffset + window.innerHeight && !element.classList.contains('show')) {
                element.classList.add('show');
            }
        }
    }

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const desktopURL = "https://hadamflow.github.io/Homepage/desktop";

    if (isMobile && window.location.href !== desktopURL) {  
        window.location.href = desktopURL;
    }

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); 
});
