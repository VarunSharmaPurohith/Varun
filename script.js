// Mobile menu toggle
document.querySelector('.mobile-menu')?.addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
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
    }
});

// Booking form submission
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const ritual = document.getElementById('ritual').value;
        const date = document.getElementById('date').value;
        
        // Validate
        if (!name || !phone || !ritual || !date) {
            showAlert('Please fill all required fields', 'error');
            return;
        }
        
        // Create message for WhatsApp
        const message = `*New Ritual Booking*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Ritual:* ${ritual}%0A*Date:* ${date}%0A*Address:* ${document.getElementById('address')?.value || 'Not specified'}%0A*Details:* ${document.getElementById('details')?.value || 'Not specified'}`;
        
        // Send to WhatsApp (replace with your number)
        const whatsappNumber = '919876543210'; // Replace with actual number
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
        
        showAlert('Booking request sent! We will contact you shortly.', 'success');
        bookingForm.reset();
    });
}

// Show alert function
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
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
