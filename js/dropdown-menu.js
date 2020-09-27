const dropdownBackground = document.querySelector('.login-shape');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownToggle = document.querySelector('.dropdown-toggle');

// Close dropdown on scroll
window.addEventListener('scroll', function () {
    closeDropdown();
});

// Toggle dropdown menu
function toggleDropdown () {
    dropdownBackground.classList.toggle('active');
    dropdownMenu.classList.toggle('visible');
    dropdownToggle.classList.toggle('active');
}

// Create separate function for closing the dropdown
function closeDropdown() {
    if (dropdownBackground.classList.contains('active')) {
        dropdownBackground.classList.remove('active');
        dropdownMenu.classList.remove('visible');
    }
}
