// Show welcome alert on page load
window.addEventListener('load', () => {
    alert("Welcome to the Urban Development Initiative Website!");
});

// Smooth scroll to sections
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const section = document.getElementById(targetId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll-to-top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerText = '↑';
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '20px';
scrollToTopBtn.style.right = '20px';
scrollToTopBtn.style.padding = '10px 15px';
scrollToTopBtn.style.fontSize = '20px';
scrollToTopBtn.style.display = 'none';
scrollToTopBtn.style.cursor = 'pointer';
scrollToTopBtn.style.border = 'none';
scrollToTopBtn.style.borderRadius = '5px';
scrollToTopBtn.style.backgroundColor = '#333';
scrollToTopBtn.style.color = 'white';
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Basic form validation (if contact form exists)
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const email = document.querySelector('#email');
            const message = document.querySelector('#message');
            if (!email.value || !message.value) {
                e.preventDefault();
                alert('Please fill out all fields before submitting.');
            }
        });
    }
});
