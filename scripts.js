document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    const gradients = document.querySelectorAll('.feature, .step, .benefit, .use-case');
    
    gradients.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });

        element.addEventListener('mouseout', () => {
            element.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
});