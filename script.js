// script.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Gracias por contactarnos. Pronto te responderemos.');
      form.reset();
    });
  }
});
