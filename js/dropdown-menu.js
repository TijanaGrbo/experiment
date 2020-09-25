const dropdownBackground = document.querySelector('.login-shape');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Toggle dropdown menu
function toggleDropdown () {
    dropdownBackground.classList.toggle('active');
    dropdownMenu.classList.toggle('visible');
}

// // Close dropdown in window is wider than mobile breakpoint
// window.addEventListener('resize', function () {
//     if (window.innerWidth > 768) {
//         closeDropdown();
//     }
// });

// Close dropdown on scroll
window.addEventListener('scroll', function () {
    closeDropdown();
});

// Create separate function for closing the dropdown
function closeDropdown() {
    if (dropdownBackground.classList.contains('active')) {
        dropdownBackground.classList.remove('active');
        dropdownMenu.classList.remove('visible');
    }
}
