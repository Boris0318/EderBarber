// ===================================
// Main JavaScript for Eder Barber Shop
// ===================================

// ===================================
// GLOBAL CONFIGURATION
// Change these values to update throughout the entire website
// ===================================
const BARBER_CONFIG = {
    // Business Name
    businessName: 'Barber Expresso',
    
    // Contact Information
    phone: '(555) 123-4567',
    phoneLink: '+15551234567',
    email: 'info@ederbarbershop.com',
    address: 'Calle Principal 123',
    addressLine2: 'Zona Centro',
    addressLine3: 'Ciudad, Estado 12345',
    
    // Social Media Links
    facebook: '#',
    instagram: '#',
    twitter: '#',
    tiktok: '#',
    
    // Business Hours
    hoursWeekday: '9:00 AM - 8:00 PM',
    hoursSaturday: '9:00 AM - 7:00 PM',
    hoursSunday: '10:00 AM - 5:00 PM',
    
    // SEO
    metaDescription: 'Cortes de cabello profesionales, arreglo de barba y servicios de estilismo. ¡Reserva tu cita hoy!',
    pageTitle: 'Servicios Profesionales de Barbería'
};

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Initialize Dynamic Content
    // ===================================
    initializeDynamicContent();
    
    // ===================================
    // Mobile Menu Toggle
    // ===================================
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ===================================
    // Navbar Scroll Effect
    // ===================================
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // ===================================
    // Smooth Scrolling for Navigation Links
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // Testimonials Slider
    // ===================================
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialBtns = document.querySelectorAll('.testimonial-btn');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonialCards.forEach(card => card.classList.remove('active'));
        testimonialBtns.forEach(btn => btn.classList.remove('active'));
        
        testimonialCards[index].classList.add('active');
        testimonialBtns[index].classList.add('active');
    }

    testimonialBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            currentTestimonial = index;
            showTestimonial(currentTestimonial);
        });
    });

    // Auto-rotate testimonials
    setInterval(function() {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    }, 5000);

    // Initialize first testimonial button as active
    if (testimonialBtns.length > 0) {
        testimonialBtns[0].classList.add('active');
    }

    // ===================================
    // Scroll to Top Button
    // ===================================
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===================================
    // Booking — handled by Calendly widget
    // ===================================

    // ===================================
    // Notification System
    // ===================================
    function showNotification(message, type = 'success') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                <p>${message}</p>
            </div>
            <button class="notification-close">&times;</button>
        `;

        // Add to page
        document.body.appendChild(notification);

        // Add styles dynamically
        if (!document.getElementById('notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                .notification {
                    position: fixed;
                    top: 100px;
                    right: 20px;
                    background-color: white;
                    padding: 1.5rem;
                    border-radius: 0;
                    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
                    z-index: 10000;
                    max-width: 400px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    animation: slideInRight 0.3s ease;
                    border-left: 4px solid;
                }
                
                .notification-success {
                    border-left-color: #4caf50;
                }
                
                .notification-error {
                    border-left-color: #f44336;
                }
                
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                
                .notification-content i {
                    font-size: 1.5rem;
                }
                
                .notification-success i {
                    color: #4caf50;
                }
                
                .notification-error i {
                    color: #f44336;
                }
                
                .notification-content p {
                    margin: 0;
                    color: #333;
                    line-height: 1.5;
                }
                
                .notification-close {
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    color: #999;
                    cursor: pointer;
                    padding: 0;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: color 0.3s ease;
                }
                
                .notification-close:hover {
                    color: #333;
                }
                
                @keyframes slideInRight {
                    from {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @keyframes slideOutRight {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                }
                
                @media (max-width: 768px) {
                    .notification {
                        right: 10px;
                        left: 10px;
                        max-width: none;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', function() {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        });

        // Auto-remove after 5 seconds
        setTimeout(function() {
            if (notification.parentElement) {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // ===================================
    // Intersection Observer for Animations
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .team-member, .gallery-item, .feature-item, .contact-item');
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // ===================================
    // Form Input Animations
    // ===================================
    const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Check if input has value on page load
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });

    // ===================================
    // Set minimum date for booking form
    // ===================================
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    // ===================================
    // Gallery Item Click Handler (for future lightbox)
    // ===================================
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Placeholder for future lightbox functionality
            console.log('Gallery item clicked');
            // You can add a lightbox library here in the future
        });
    });

    // ===================================
    // Active Navigation Link Highlighting
    // ===================================
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.pageYOffset + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', setActiveNavLink);

    // ===================================
    // Preloader (optional)
    // ===================================
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });


    // ===================================
    // Console Welcome Message
    // ===================================
    console.log(`%c👋 ¡Bienvenido a ${BARBER_CONFIG.businessName}!`, 'font-size: 20px; font-weight: bold; color: #d4af37;');
    console.log('%cSitio web diseñado con ❤️ por Sirob Labs', 'font-size: 14px; color: #888;');

});

// ===================================
// Initialize Dynamic Content Function
// ===================================
function initializeDynamicContent() {
    console.log('Initializing dynamic content with:', BARBER_CONFIG.businessName);
    
    // Update page title and meta description
    document.title = `${BARBER_CONFIG.businessName} - ${BARBER_CONFIG.pageTitle}`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', `${BARBER_CONFIG.businessName} - ${BARBER_CONFIG.metaDescription}`);
    }
    
    // Update all business name occurrences
    updateElementsByClass('business-name', BARBER_CONFIG.businessName);
    
    // Update contact information
    updateElementsByClass('contact-phone', BARBER_CONFIG.phone);
    updateElementsByClass('contact-email', BARBER_CONFIG.email);
    
    // Update phone links
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.href = `tel:${BARBER_CONFIG.phoneLink}`;
        if (link.classList.contains('contact-phone') || link.textContent.includes('555')) {
            link.textContent = BARBER_CONFIG.phone;
        }
    });
    
    // Update email links
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
        link.href = `mailto:${BARBER_CONFIG.email}`;
        if (link.classList.contains('contact-email')) {
            link.textContent = BARBER_CONFIG.email;
        }
    });
    
    // Update address
    const addressElements = document.querySelectorAll('.contact-address');
    addressElements.forEach(element => {
        element.innerHTML = `${BARBER_CONFIG.address}<br>${BARBER_CONFIG.addressLine2}<br>${BARBER_CONFIG.addressLine3}`;
    });
    
    // Update footer short address
    const footerAddress = document.querySelector('.footer-address');
    if (footerAddress) {
        footerAddress.textContent = `${BARBER_CONFIG.address}, ${BARBER_CONFIG.addressLine3.split(',')[0]}`;
    }
    
    // Update social media links
    updateSocialLinks();
    
    // Update business hours
    updateBusinessHours();
    
    console.log('Dynamic content initialized successfully');
}

// Helper function to update elements by class name
function updateElementsByClass(className, content) {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach(element => {
        element.textContent = content;
    });
}

// Update social media links
function updateSocialLinks() {
    document.querySelectorAll('a[href*="facebook"]').forEach(link => {
        if (BARBER_CONFIG.facebook !== '#') link.href = BARBER_CONFIG.facebook;
    });
    document.querySelectorAll('a[href*="instagram"]').forEach(link => {
        if (BARBER_CONFIG.instagram !== '#') link.href = BARBER_CONFIG.instagram;
    });
    document.querySelectorAll('a[href*="twitter"]').forEach(link => {
        if (BARBER_CONFIG.twitter !== '#') link.href = BARBER_CONFIG.twitter;
    });
    document.querySelectorAll('a[href*="tiktok"]').forEach(link => {
        if (BARBER_CONFIG.tiktok !== '#') link.href = BARBER_CONFIG.tiktok;
    });
}

// Update business hours
function updateBusinessHours() {
    const hoursContainer = document.querySelector('.info-card ul');
    if (hoursContainer) {
        hoursContainer.innerHTML = `
            <li><strong>Lunes - Viernes:</strong> ${BARBER_CONFIG.hoursWeekday}</li>
            <li><strong>Sábado:</strong> ${BARBER_CONFIG.hoursSaturday}</li>
            <li><strong>Domingo:</strong> ${BARBER_CONFIG.hoursSunday}</li>
        `;
    }
}

// ===================================
// Utility Functions
// ===================================

// Format phone number
function formatPhoneNumber(value) {
    const phoneNumber = value.replace(/\D/g, '');
    const phoneNumberLength = phoneNumber.length;
    
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
}

// Add phone formatting to phone input
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        const formattedNumber = formatPhoneNumber(e.target.value);
        e.target.value = formattedNumber;
    });
}

