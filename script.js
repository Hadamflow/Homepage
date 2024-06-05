const signupForm = document.getElementById('signup-form');
const followEmail = document.getElementById('follow-email');
const errorDisplay = document.createElement('p'); // Create error message element
errorDisplay.style.color = "red"; 
// Add an id to easily style it later (optional)
errorDisplay.id = "email-error";
// Insert the error message element before the button
followButton.parentNode.insertBefore(errorDisplay, followButton.nextSibling); 

// Get the submit button by ID
const followButton = document.getElementById('follow-button'); 

followButton.addEventListener('click', (event) => {
    event.preventDefault();

    const email = followEmail.value;

    if (!validateEmail(email)) {
        errorDisplay.textContent = "Please enter a valid email address."; 
        return; 
    }

    // Construct the mailto: link (using your email)
    const subject = "New Subscriber";
    const body = `A new subscriber has signed up with the email: ${email}`;
    const mailtoLink = `mailto:hannes.p.adam@web.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's email client
    window.location.href = mailtoLink;

    alert('Thank you for subscribing! You will receive a confirmation email shortly.');
    signupForm.reset();
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}