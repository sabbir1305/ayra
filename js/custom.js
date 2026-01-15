// Custom JavaScript for Ayra Properties Ltd. Website

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Image modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const clickableImages = document.querySelectorAll('.clickable-image');
    const modalImage = document.getElementById('modalImage');
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));

    clickableImages.forEach(img => {
        img.addEventListener('click', function() {
            // Get the full resolution image URL by removing crop parameters
            let fullImageUrl = this.src.replace('&w=1000&q=80', '&w=1200&q=90');
            modalImage.src = fullImageUrl;
            modalImage.alt = this.alt;
            document.getElementById('imageModalLabel').textContent = this.alt;
            imageModal.show();
        });
    });
});