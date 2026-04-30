document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.process-tab-btn');
    const coatingsSection = document.getElementById('coatings-section');
    const polishedSection = document.getElementById('polished-section');
    const selector = document.querySelector('.process-selector');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-target');
                
                // Update active button
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Smooth scroll to the target section
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const offset = selector.offsetHeight + 20; // Offset for sticky header
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Simple Intersection Observer to update active tab on scroll
        const observerOptions = {
            root: null,
            rootMargin: '-150px 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    tabBtns.forEach(btn => {
                        if (btn.getAttribute('data-target') === id) {
                            btn.classList.add('active');
                        } else {
                            btn.classList.remove('active');
                        }
                    });
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        if (coatingsSection) observer.observe(coatingsSection);
        if (polishedSection) observer.observe(polishedSection);
    }
});
