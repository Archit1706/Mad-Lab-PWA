// Add event listeners to buttons
const buttons = document.querySelectorAll('.product .btn button');
buttons.forEach(button => {
    button.addEventListener('click', event => {
        const product = event.target.parentNode.parentNode;
        const name = product.querySelector('h2').textContent;
        alert(`Added ${name} to cart`);
    });
});

window.onload = () => {
    'use strict';
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/public/generate-sw.js');
    }
}