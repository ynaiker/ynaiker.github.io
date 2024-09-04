// Form submission alert
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    alert('Form submitted!'); // Show alert on submission
});