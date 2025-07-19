// ===== MOBILE NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger menu
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 70; // Height of fixed header
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== HEADER SCROLL EFFECT =====
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.ecosystem-card, .cert-category, .compliance-item, .feature').forEach(el => {
    observer.observe(el);
});

// ===== CONTACT FORM HANDLING =====
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.subject || !data.message) {
        showNotification('Veuillez remplir tous les champs requis.', 'error');
        return;
    }
    
    if (!data.privacy) {
        showNotification('Veuillez accepter la politique de confidentialité.', 'error');
        return;
    }
    
    // Simulate form submission
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Envoi en cours...';
    submitButton.disabled = true;
    
    // Here you would typically send the data to your backend
    // For now, we'll simulate a successful submission
    setTimeout(() => {
        showNotification('Message envoyé avec succès! Nous vous répondrons rapidement.', 'success');
        this.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
});

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
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
            <span class="notification-icon">${getNotificationIcon(type)}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        z-index: 10000;
        max-width: 400px;
        background: white;
        border-left: 4px solid ${getNotificationColor(type)};
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        animation: slideInRight 0.3s ease-out;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px 20px;
    `;
    
    notification.querySelector('.notification-icon').style.cssText = `
        font-size: 20px;
        color: ${getNotificationColor(type)};
    `;
    
    notification.querySelector('.notification-message').style.cssText = `
        flex: 1;
        color: #374151;
        font-weight: 500;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        font-size: 20px;
        color: #9CA3AF;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };
    return icons[type] || icons.info;
}

function getNotificationColor(type) {
    const colors = {
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
        info: '#3B82F6'
    };
    return colors[type] || colors.info;
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
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
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== PERFORMANCE OPTIMIZATIONS =====

// Lazy load images when they enter viewport
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// ===== ANALYTICS TRACKING =====
function trackEvent(category, action, label = '') {
    // Google Analytics tracking (when implemented)
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
    
    // Console log for development
    console.log(`Analytics: ${category} - ${action} - ${label}`);
}

// Track button clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const text = this.textContent.trim();
        const href = this.getAttribute('href');
        trackEvent('Button Click', text, href);
    });
});

// Track form submissions
document.getElementById('contact-form').addEventListener('submit', function() {
    trackEvent('Form', 'Contact Form Submit');
});

// Track page sections viewed
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionName = entry.target.id || entry.target.className;
            trackEvent('Page View', 'Section Viewed', sectionName);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('section[id]').forEach(section => {
    sectionObserver.observe(section);
});

// ===== ACCESSIBILITY IMPROVEMENTS =====

// Keyboard navigation for mobile menu
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.focus();
        }
    }
});

// Focus management for modal-like elements
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
});

// ===== BROWSER COMPATIBILITY =====

// Polyfill for IntersectionObserver (if needed)
if (!('IntersectionObserver' in window)) {
    // Fallback: immediately show all animated elements
    document.querySelectorAll('.ecosystem-card, .cert-category, .compliance-item, .feature').forEach(el => {
        el.classList.add('fade-in-up');
    });
}

// Console welcome message
console.log(`
🕌 CED HalalTech™ - Premier Écosystème Technologique Islamique Mondial
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ Bienvenue sur notre vitrine technologique !

📊 Statistiques Live:
   • 847,592 utilisateurs actifs
   • 67 pays couverts  
   • 78+ langues supportées
   • 99.9% conformité Sharia

🚀 Découvrez la plateforme complète:
   https://ced-halaltech.onrender.com

📧 Contact: contact@empreintedigitale.club
🇨🇭 Hébergé en Suisse • Sécurité & Éthique garanties

© Yakoubi Yamina - Tous droits réservés
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);

// ===== PWA SUPPORT =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// ===== LANGUAGE DETECTION =====
function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    const supportedLangs = ['fr', 'en', 'ar'];
    const detectedLang = userLang.substring(0, 2);
    
    if (supportedLangs.includes(detectedLang) && detectedLang !== 'fr') {
        // Show language suggestion notification
        setTimeout(() => {
            const langNames = { en: 'English', ar: 'العربية' };
            showNotification(
                `Site available in ${langNames[detectedLang]}. Switch language?`,
                'info'
            );
        }, 2000);
    }
}

// Initialize language detection
detectLanguage();

// ===== REDIRECT TO PLATFORM =====
function redirectToPlatform() {
    trackEvent('Navigation', 'Platform Redirect', 'ced-halaltech.onrender.com');
    window.open('https://ced-halaltech.onrender.com', '_blank');
}

// Add click handlers for platform redirect buttons
document.querySelectorAll('a[href*="onrender.com"]').forEach(link => {
    link.addEventListener('click', function(e) {
        trackEvent('Platform Access', 'Click', this.href);
    });
});

console.log('🚀 CED HalalTech™ Vitrine - Scripts loaded successfully!');