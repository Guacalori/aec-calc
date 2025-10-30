document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  // Toggle nav-menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('active');
  });

// Themes dropdown
const themesButton = document.getElementById('themes-button');
const dropdownLi = themesButton.closest('.dropdown');
const dropdownMenu = dropdownLi.querySelector('.dropdown-menu');
const arrowIcon = document.getElementById('arrow-icon');

dropdownMenu.style.display = 'none';

themesButton.addEventListener('click', (e) => {
  e.stopPropagation();
  const isVisible = dropdownMenu.style.display === 'block';
  dropdownMenu.style.display = isVisible ? 'none' : 'block';
  arrowIcon.classList.toggle('arrow-up', !isVisible);
});

document.addEventListener('click', () => {
  dropdownMenu.style.display = 'none';
  arrowIcon.classList.remove('arrow-up');
});

// Theme switching
const body = document.body;
function removeAllThemes() {
  body.classList.remove('dark-theme', 'light-theme', 'color-blind-theme');
}

// Function to apply theme from localStorage if exists
function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme);
  }
}

// Apply theme when the page loads
applySavedTheme();

document.getElementById('theme-dark').addEventListener('click', () => {
  removeAllThemes();
  body.classList.add('dark-theme');
  localStorage.setItem('theme', 'dark-theme');  // Save selected theme
});

document.getElementById('theme-light').addEventListener('click', () => {
  removeAllThemes();
  body.classList.add('light-theme');
  localStorage.setItem('theme', 'light-theme');  // Save selected theme
});

document.getElementById('theme-colorblind').addEventListener('click', () => {
  removeAllThemes();
  body.classList.add('color-blind-theme');
  localStorage.setItem('theme', 'color-blind-theme');  // Save selected theme
});
});
