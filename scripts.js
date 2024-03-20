// scripts.js

// Example JavaScript for handling button clicks
document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-btn');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for your purchase!');
        });
    });
});