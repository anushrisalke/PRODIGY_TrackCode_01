// script.js
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = "";

  // Find current section in view
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70; // Adjust for navbar height
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  // Change navbar background based on section
  switch (current) {
    case 'home':
      navbar.style.background = 'rgba(0, 123, 255, 0.8)'; // Blue
      break;
    case 'features':
      navbar.style.background = 'rgba(255, 182, 193, 0.8)'; // Baby Pink
      break;
    case 'about':
      navbar.style.background = 'rgba(216, 191, 216, 0.8)'; // Light Purple
      break;
    case 'contact':
      navbar.style.background = 'rgba(240, 240, 240, 0.9)'; // Light Grey
      break;
    default:
      navbar.style.background = 'rgba(255, 255, 255, 0.6)';
  }
});
