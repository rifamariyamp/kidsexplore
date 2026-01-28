// Smooth scroll and fade-up animations
document.addEventListener('DOMContentLoaded', () => {

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Watch all elements with fade-up class
    const animatedElements = document.querySelectorAll('.fade-up, .card, h2');

    animatedElements.forEach(el => {
        // Ensure they have the base class if we caught them via tag selector
        el.classList.add('fade-up');
        observer.observe(el);
    });
});
