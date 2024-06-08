window.addEventListener('load', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('cookie-accept');
  
    if (!localStorage.getItem('cookieConsent')) {
      cookieBanner.style.display = 'block';
    }
  
    acceptButton.addEventListener('click', function() {
      localStorage.setItem('cookieConsent', 'true');
      cookieBanner.style.display = 'none';
    });
   
    const swiper = new Swiper('.swiper', {
      loop: true, 
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  
  
      // Get the form and email input elements
      const signupForm = document.querySelector('.embeddable-buttondown-form'); 
      const emailInput = document.getElementById('bd-email'); 
  
      // Get the submit button
      const submitButton = signupForm.querySelector('input[type="submit"]');
  
      // Add submit event listener to the form
      signupForm.addEventListener('submit', function(event) {
          // Check if the email is valid
          if (!validateEmail(emailInput.value)) {
              // Prevent form submission if invalid
              event.preventDefault();
  
              // Show an error message
              alert('Please enter a valid email address.'); 
          }
      });
  
      // Email validation function
      function validateEmail(email) {
          // Basic email validation regex
          const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return re.test(email);
      }
  });

  window.addEventListener('load', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('cookie-accept');
  
    if (!localStorage.getItem('cookieConsent')) {
      cookieBanner.style.display = 'block';
    }
  
    acceptButton.addEventListener('click', function() {
      localStorage.setItem('cookieConsent', 'true');
      cookieBanner.style.display = 'none';
    });
  });
  