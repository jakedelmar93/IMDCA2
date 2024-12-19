// Smooth Scrolling - Navbar Links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = this.getAttribute('href'); 
        if (target.startsWith('#')) { 
            e.preventDefault();
            const section = document.querySelector(target);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Toast Notification - Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const toastEl = document.getElementById('formToast');
        if (toastEl) {
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
        }
        this.reset();
    });
}

// Typewriter Effect - About Me 
document.addEventListener("DOMContentLoaded", function () {
    const typewriterElement = document.getElementById("typewriter");
    if (typewriterElement) { 
        const text = "About Me";
        const speed = 100; 
        let index = 0;

        function typeWriter() {
            if (index < text.length) {
                typewriterElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, speed);
            }
        }

        typeWriter(); 
    }
});