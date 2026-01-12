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
            // Close mobile menu if open
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Form validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Simple email regex check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// SCROLL ANIMATIONS
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px' // Changed from -50px to 0px so bottom items trigger
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Optional: Stop observing once animated
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.skill-category, .project-card, .education-item, .certifications li').forEach(el => {
    observer.observe(el);
});

// HERO TYPING EFFECT
const heroText = document.querySelector('.hero-content h3');
if (heroText) {
    const textToType = 'Computer Science Undergraduate';
    let index = 0;
    
    // Clear initial text
    heroText.textContent = '';
    
    function typeWriter() {
        if (index < textToType.length) {
            heroText.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typing after a small delay
    setTimeout(typeWriter, 500);
}

// HEADER SHADOW ON SCROLL
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.boxShadow = 'none';
        header.style.background = 'rgba(255, 255, 255, 0.8)';
    }
});