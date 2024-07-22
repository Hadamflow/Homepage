window.addEventListener('load', function() {
    // Cookie Banner Functionality
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('cookie-accept');
  
    // Check cookie consent only if elements exist
    if (cookieBanner && acceptButton) {
        if (!localStorage.getItem('cookieConsent')) {
            cookieBanner.style.display = 'block';
        }
  
        acceptButton.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'true');
            cookieBanner.style.display = 'none';
        });
    }
  
    // Swiper.js Initialization (only for pages with carousels)
    // ... (Remove or comment out this section if not needed) ...
  
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
        for (const element of elementsToFadeIn) { // Use 'for...of' for cleaner iteration
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && !element.classList.contains('show')) {
                element.classList.add('show');
            }
        }
    }  
  
    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Initial check on page load
  });
  
