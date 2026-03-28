// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', function() {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = '#8B4513';
            navLinks.style.padding = '20px';
            navLinks.style.gap = '15px';
            navLinks.style.zIndex = '999';
        }
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Booking form submission
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const ritual = document.getElementById('ritual').value;
        const date = document.getElementById('date').value;
        
        if (!name || !phone || !ritual || !date) {
            showAlert('Please fill all required fields 🙏', 'error');
            return;
        }
        
        const message = `*New Ritual Booking*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Ritual:* ${ritual}%0A*Date:* ${date}%0A*Address:* ${document.getElementById('address')?.value || 'Not specified'}%0A*Details:* ${document.getElementById('details')?.value || 'Not specified'}`;
        
        // Updated WhatsApp numbers - choose primary
        const whatsappNumber = '918328059590';
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
        
        showAlert('Booking request sent! We will contact you shortly. 🙏', 'success');
        bookingForm.reset();
    });
}

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('contactName').value;
        const phone = document.getElementById('contactPhone').value;
        const subject = document.getElementById('contactSubject').value;
        const message = document.getElementById('contactMessage').value;
        
        if (!name || !phone || !subject || !message) {
            showAlert('Please fill all required fields 🙏', 'error');
            return;
        }
        
        const whatsappMessage = `*New Contact Message*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
        const whatsappNumber = '918328059590';
        window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
        
        showAlert('Message sent successfully! We will respond shortly. 🙏', 'success');
        contactForm.reset();
    });
}

// Alert function
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i> ${message}`;
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        alertDiv.style.animation = 'slideOutRight 0.4s ease';
        setTimeout(() => alertDiv.remove(), 400);
    }, 4000);
}

// Set minimum date for booking (today + 7 days)
const dateInput = document.getElementById('date');
if (dateInput) {
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 7);
    dateInput.min = minDate.toISOString().split('T')[0];
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Add floating animation to cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .service-item, .ritual-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Add slideOutRight animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
