document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    // Prevent default anchor click behavior
    e.preventDefault();

    // Store hash
    let hash = this.hash;
window.scroll({
  top: document.querySelector(hash).offsetTop,
  behavior: 'smooth'
});
});
});

// Responsive Navbar
let menuIcon = document.querySelector('.logo');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
navbar.classList.toggle('active');
});
