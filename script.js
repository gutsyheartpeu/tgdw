// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const headerNav = document.querySelector('.header-nav');
    
    if (mobileMenuBtn && headerNav) {
        mobileMenuBtn.addEventListener('click', () => {
            headerNav.style.display = headerNav.style.display === 'flex' ? 'none' : 'flex';
            headerNav.style.flexDirection = 'column';
            headerNav.style.position = 'absolute';
            headerNav.style.top = '100%';
            headerNav.style.left = '0';
            headerNav.style.right = '0';
            headerNav.style.background = 'rgba(10, 10, 18, 0.95)';
            headerNav.style.backdropFilter = 'blur(20px)';
            headerNav.style.padding = '2rem';
            headerNav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
            headerNav.style.gap = '1rem';
        });
    }

    // Parallax effect for background beams
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const beams = document.querySelectorAll('.light-beam');
        
        beams.forEach((beam, index) => {
            const speed = 0.1 + (index * 0.05);
            beam.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Add active class to nav links on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.header-nav a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Add glow effect on download buttons hover
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            const glow = button.querySelector('.btn-glow');
            if (glow) {
                glow.style.animation = 'glowPulse 1.5s infinite';
            }
        });
        
        button.addEventListener('mouseleave', () => {
            const glow = button.querySelector('.btn-glow');
            if (glow) {
                glow.style.animation = '';
            }
        });
    });
});

// Add CSS animation for glow pulse
const style = document.createElement('style');
style.textContent = `
    @keyframes glowPulse {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 0.8; }
    }
`;
document.head.appendChild(style);