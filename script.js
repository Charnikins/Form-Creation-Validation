// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the form and feedback div
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Add event listener for form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        validateForm(); // Call the validation function
    });

    // Function to validate the form
    function validateForm() {
        // Retrieve user inputs and trim whitespace
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation variables
        let isValid = true; // Flag for overall validity
        const messages = []; // Array to hold error messages

        // Validate username
        if (username.length < 3) {
            isValid = false; // Set flag to false if validation fails
            messages.push('Username must be at least 3 characters long.'); // Add error message
        }

        // Validate email
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false; // Set flag to false if validation fails
            messages.push('Please enter a valid email address.'); // Add error message
        }

        // Validate password
        if (password.length < 8) {
            isValid = false; // Set flag to false if validation fails
            messages.push('Password must be at least 8 characters long.'); // Add error message
        }

        // Feedback Display Logic
        feedbackDiv.style.display = 'block'; // Make feedback div visible

        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!'; // Success message
            feedbackDiv.style.color = '#28a745'; // Green color for success
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Join error messages
            feedbackDiv.style.color = '#dc3545'; // Red color for errors
        }
    }
});
