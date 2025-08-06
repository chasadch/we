// Contact form JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (validateForm()) {
            // Simulate form submission
            showMessage('Thank you! Your message has been sent successfully.', 'success');
            contactForm.reset();
        }
    });

    // Form validation function
    function validateForm() {
        let isValid = true;
        
        // Clear previous error messages
        clearErrors();
        
        // Validate name
        if (nameInput.value.trim().length < 2) {
            showFieldError(nameInput, 'Name must be at least 2 characters long');
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            showFieldError(emailInput, 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate message
        if (messageInput.value.trim().length < 10) {
            showFieldError(messageInput, 'Message must be at least 10 characters long');
            isValid = false;
        }
        
        return isValid;
    }

    // Show field error
    function showFieldError(field, message) {
        field.style.borderColor = '#ff4757';
        field.style.boxShadow = '0 0 5px rgba(255, 71, 87, 0.3)';
        
        // Create error message element
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.color = '#ff4757';
        errorDiv.style.fontSize = '12px';
        errorDiv.style.marginTop = '5px';
        
        field.parentNode.insertBefore(errorDiv, field.nextSibling);
    }

    // Clear all errors
    function clearErrors() {
        const inputs = [nameInput, emailInput, messageInput];
        inputs.forEach(input => {
            input.style.borderColor = '';
            input.style.boxShadow = '';
        });
        
        // Remove error messages
        const errorMessages = document.querySelectorAll('.field-error');
        errorMessages.forEach(msg => msg.remove());
    }

    // Show form message
    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        formMessage.style.padding = '10px';
        formMessage.style.borderRadius = '5px';
        formMessage.style.marginTop = '15px';
        
        if (type === 'success') {
            formMessage.style.backgroundColor = '#2ed573';
            formMessage.style.color = 'white';
        } else {
            formMessage.style.backgroundColor = '#ff4757';
            formMessage.style.color = 'white';
        }
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }

    // Add input focus effects
    const inputs = [nameInput, emailInput, messageInput];
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Social links hover effects
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile Menu Toggle (placeholder for future implementation)
    // Add mobile menu functionality here when needed
});
