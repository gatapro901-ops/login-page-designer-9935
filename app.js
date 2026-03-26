
// Import necessary libraries
const lucide = window.lucide;

// Get DOM elements
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let confirmPasswordInput = document.getElementById('confirm-password');
let loginButton = document.getElementById('login-button');
let heroSection = document.getElementById('hero-section');
let loginForm = document.getElementById('login-form');

// Set up event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Animate page entrance
  heroSection.classList.add('animate-fade-in');
  loginForm.classList.add('animate-fade-in');

  // Add event listeners to input fields
  emailInput.addEventListener('focus', () => {
    emailInput.classList.add('animate-input-focus');
  });

  emailInput.addEventListener('blur', () => {
    emailInput.classList.remove('animate-input-focus');
  });

  passwordInput.addEventListener('focus', () => {
    passwordInput.classList.add('animate-input-focus');
  });

  passwordInput.addEventListener('blur', () => {
    passwordInput.classList.remove('animate-input-focus');
  });

  confirmPasswordInput.addEventListener('focus', () => {
    confirmPasswordInput.classList.add('animate-input-focus');
  });

  confirmPasswordInput.addEventListener('blur', () => {
    confirmPasswordInput.classList.remove('animate-input-focus');
  });

  // Add event listener to login button
  loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    validateForm();
  });
});

// Validate form data
function validateForm() {
  let email = emailInput.value.trim();
  let password = passwordInput.value.trim();
  let confirmPassword = confirmPasswordInput.value.trim();

  if (email === '' || password === '' || confirmPassword === '') {
    alert('يرجى ملء جميع الحقول');
    return;
  }

  if (password !== confirmPassword) {
    alert('كلمة المرور و تأكيد كلمة المرور لا تتطابقان');
    return;
  }

  // Save data to local storage
  saveDataToLocalStorage(email, password);

  // Redirect to dashboard page
  window.location.href = 'dashboard.html';
}

// Save data to local storage
function saveDataToLocalStorage(email, password) {
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
}

// Get data from local storage
function getDataFromLocalStorage() {
  let email = localStorage.getItem('email');
  let password = localStorage.getItem('password');

  return { email, password };
}

// Check if user is logged in
function checkIfUserIsLoggedIn() {
  let userData = getDataFromLocalStorage();

  if (userData.email && userData.password) {
    window.location.href = 'dashboard.html';
  }
}

// Initialize app
function initApp() {
  checkIfUserIsLoggedIn();
}

initApp();
