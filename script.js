document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Fetch form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});

function navigateToTechStack() {
    const dropdown = document.getElementById('tech-stack-dropdown');
    const selectedValue = dropdown.value;

    if (selectedValue) {
        window.location.href = selectedValue;
    }
}



