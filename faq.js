document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-container');
    const tabBtns = document.querySelectorAll('.faq-tab-btn');
    const categoryGroups = document.querySelectorAll('.faq-category-group');

    // Tab Switching Logic
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(t => t.classList.remove('active'));
            categoryGroups.forEach(g => g.classList.remove('active'));
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            const targetGroup = document.getElementById(targetId);
            if (targetGroup) {
                targetGroup.classList.add('active');
            }
        });
    });

    if (faqContainer) {
        faqContainer.addEventListener('click', (e) => {
            const header = e.target.closest('.accordion-header-modern');
            if (header) {
                const item = header.parentElement;
                const isActive = item.classList.contains('active');
                const allItems = faqContainer.querySelectorAll('.accordion-item-modern');
                allItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                if (isActive) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                }
            }
        });
    }
});
