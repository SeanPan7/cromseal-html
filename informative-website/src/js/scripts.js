document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation functionality
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-links');
    const dropdownToggle = document.getElementById('dropdown-toggle');
    const dropdown = document.querySelector('.dropdown');
    
    // Toggle hamburger menu
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Handle dropdown toggle in mobile view
    if (dropdownToggle && dropdown) {
        dropdownToggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                console.log('dropdown clicked');
                e.preventDefault();
                e.stopPropagation();
                dropdown.classList.toggle('active');
            }
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu && hamburger && dropdown && !e.target.closest('nav') && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            dropdown.classList.remove('active');
        }
    });
    
    // Close menu when scrolling (new)
    window.addEventListener('scroll', function() {
        if (window.innerWidth <= 768) {
            if (navMenu && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                if (dropdown) dropdown.classList.remove('active');
            }
        }
    });
    
    // Close menu when clicking any nav link (new)
    const navLinks = document.querySelectorAll('nav ul li a');
    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    dropdown.classList.remove('active');
                }
            });
        });
    }
});