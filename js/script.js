// ============================================
// ANTARES RENTCAR - JAVASCRIPT
// Apple-Inspired Design System
// ============================================

// Configuration
const WHATSAPP_NUMBER = "6287754441820"; // Update dengan nomor WhatsApp Anda
const BUSINESS_NAME = "Antares Rentcar";

// ============ Navigation Hamburger ============
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ============ Smooth Scroll Navigation ============
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ============ WhatsApp Integration ============
function openWhatsApp() {
    const message = encodeURIComponent(
        `Halo ${BUSINESS_NAME}, saya ingin mengetahui lebih lanjut tentang layanan sewa mobil Anda. Terima kasih.`
    );
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappLink, '_blank');
}

function openWhatsAppFleet(vehicleType) {
    const message = encodeURIComponent(
        `Halo ${BUSINESS_NAME}, saya tertarik menyewa ${vehicleType}. Bisakah Anda memberikan informasi harga dan ketersediaan? Terima kasih.`
    );
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappLink, '_blank');
}

// ============ Intersection Observer for Scroll Animations ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.service-card, .fleet-card, .benefit-card, .contact-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ============ Active Navigation Link on Scroll ============
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '#ffffff';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#d4af37';
        }
    });
});

// ============ Mobile Menu Auto Close on Link Click ============
if (window.innerWidth < 768) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks) {
                navLinks.classList.remove('active');
                if (hamburger) hamburger.classList.remove('active');
            }
        });
    });
}

// ============ Prevent Search Button Default ============
document.querySelector('.search-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    // Implementasi search functionality
    console.log('Search clicked');
});

// ============ Page Load Animation ============
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.6s ease';
        document.body.style.opacity = '1';
    }, 100);
});

console.log(`${BUSINESS_NAME} - Website Loaded Successfully`);
