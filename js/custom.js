// Custom JavaScript for Ayra Properties Ltd. Website

// Smooth scrolling handled by CSS


// Navbar background change on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Active Link Highlighting on Scroll
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: "-100px 0px -50% 0px" // Adjust viewport to trigger earlier/later
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));

                // Add active class to corresponding link
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Image modal functionality
document.addEventListener('DOMContentLoaded', function () {
    const clickableImages = document.querySelectorAll('.clickable-image');
    const modalImage = document.getElementById('modalImage');
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));

    clickableImages.forEach(img => {
        img.addEventListener('click', function () {
            // Get the full resolution image URL by removing crop parameters
            let fullImageUrl = this.src.replace('&w=1000&q=80', '&w=1200&q=90');
            modalImage.src = fullImageUrl;
            modalImage.alt = this.alt;
            document.getElementById('imageModalLabel').textContent = this.alt;
            imageModal.show();
        });
    });
});