// Mobile menu: show/hide the navigation when the Menu button is pressed
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

// Close the menu after tapping a link
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Keep the footer year up to date automatically
document.querySelector('#year').textContent = new Date().getFullYear();
