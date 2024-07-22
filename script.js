window.addEventListener('load', function() {
    // Cookie Banner Functionality
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('cookie-accept');

    if (cookieBanner && acceptButton) { // Check if elements exist before accessing them
        if (!localStorage.getItem('cookieConsent')) {
            cookieBanner.style.display = 'block';
        }

        acceptButton.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'true');
            cookieBanner.style.display = 'none';
        });
    }

    // Swiper.js Initialization (Removed for this example since we're focusing on the error)
    // If you need this, make sure the Swiper.js library is correctly included and initialized.

    // Email Validation for Newsletter Form
    const signupForm = document.querySelector('.embeddable-buttondown-form');
    const emailInput = document.getElementById('bd-email'); 

    if (signupForm && emailInput) { // Check if elements exist before accessing them
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
        for (const element of elementsToFadeIn) { // Use for...of for cleaner iteration
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && !element.classList.contains('show')) {
                element.classList.add('show');
            }
        }
    }

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Initial check on page load
});


