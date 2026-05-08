document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    let scrollAmount = 0;
    const scrollStep = 300;

    document.querySelector('.carousel').addEventListener('wheel', function(event) {
        event.preventDefault();
        scrollAmount += event.deltaY > 0 ? scrollStep : -scrollStep;
        carousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});