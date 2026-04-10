const reviewsData = [
    {
        name: "Marcus T.",
        date: "1 month ago",
        text: "A1 Concrete Coatings coated 18,000 sq ft of our distribution warehouse in Grand Rapids. The floor was a nightmare — cracked, stained, forklift damage everywhere. They prepped the entire thing in one day and had the polyurea system down by end of day two. Six months later, zero peeling, forklifts running on it daily. Worth every penny."
    },
    {
        name: "Jennifer Caldwell",
        date: "3 months ago",
        text: "We brought A1 in to coat our commercial kitchen floors — NSF-rated, slip-resistant, the full deal. They understood the food safety requirements without us having to explain them twice. Installation was done over a weekend so we didn't miss a single service day. Highly professional from estimate to final walkthrough."
    },
    {
        name: "Derek Russo",
        date: "2 months ago",
        text: "Runs a 3-bay auto dealership service center. We needed chemical-resistant flooring that could hold up to oil, coolant, and brake fluid daily. A1 delivered a high-gloss polyaspartic system that our techs love working on. Looks brand new and cleans up in minutes. Would hire again without hesitation."
    },
    {
        name: "Lori Schaefer",
        date: "4 months ago",
        text: "Our manufacturing floor had been neglected for years. A1 Concrete Coatings came in, grinding-prepared the entire surface, and applied a heavy-duty industrial coating system. The crew was respectful of our active operations — worked around our shifts, kept the area contained, and finished on schedule. Professional at every step."
    },
    {
        name: "Tyler Nguyen",
        date: "5 months ago",
        text: "We had A1 coat our aviation hangar — roughly 9,000 sq ft. The floor needed to handle aircraft, heavy carts, and spills. The result is incredible. High gloss, totally seamless, and two years on it shows no signs of wear. If you have a serious commercial job, these are your guys."
    },
    {
        name: "Sandra Kowalski",
        date: "2 months ago",
        text: "Property manager here. I hired A1 to coat the parking structure floors for one of our commercial buildings. They came with the right equipment, handled the prep properly, and gave us an anti-slip industrial finish that exceeds our insurance requirements. Will be using them for all future properties."
    },
    {
        name: "Brian Okafor",
        date: "6 months ago",
        text: "A1 coated our machine shop floor — 4,500 sq ft of heavy-impact rated polyurea. The team was knowledgeable, the prep was thorough, and the finish is holding up under serious industrial use. We had quotes from three companies and A1 was clearly the most experienced. Great choice."
    },
    {
        name: "Christine Daly",
        date: "3 months ago",
        text: "We operate a large veterinary clinic and needed flooring that was antimicrobial, easy to clean, and professional-looking. A1 delivered exactly that. The crew was respectful of our animals and completed the work in phases so we stayed operational. The floor looks outstanding and hygiene compliance has never been easier."
    },
    {
        name: "Josh Feldman",
        date: "1 month ago",
        text: "Had A1 coat the showroom floor at our collision center — about 6,000 sq ft. They matched our brand colors with a custom flake blend and the result is showroom-quality. Our customers comment on it constantly. The job was done right the first time, on time, and on budget. Very impressed."
    },
    {
        name: "Paula Hernandez",
        date: "7 months ago",
        text: "Our cold storage facility needed moisture-resistant coatings that could handle constant freeze-thaw cycling. A1 specified the right system, prepped properly, and the coating has been performing flawlessly for months now. They understood the technical requirements of our environment and delivered. Excellent work."
    },
    {
        name: "Kevin Marsh",
        date: "2 months ago",
        text: "We run a large commercial laundry facility. The floor was deteriorating from years of moisture and chemical exposure. A1 came in, ground the whole surface down, applied a moisture-mitigation primer, and topped it with a chemical-resistant polyaspartic. It's been holding up perfectly. These guys know industrial flooring."
    },
    {
        name: "Rachel Thompson",
        date: "4 months ago",
        text: "Brought A1 in to coat three of our warehouse bays in Kalamazoo. The crew was punctual, professional, and extremely thorough with the diamond grinding. The floor was ready for forklift traffic in under 24 hours. We've since referred them to two other businesses in our park."
    },
    {
        name: "Mike Donovan",
        date: "5 months ago",
        text: "A1 Concrete Coatings recoated our fire station apparatus bay — 7,200 sq ft. They matched our scheduling perfectly, working overnight to avoid any disruption to emergency operations. The finish is absolutely bulletproof. It handles the weight of apparatus, water spills, and daily cleanings without any issues."
    },
    {
        name: "Ann Patel",
        date: "3 months ago",
        text: "We used A1 for a retail distribution facility upgrade. They coated 12,000 sq ft over a long weekend. Communication was excellent throughout — we always knew what stage they were at. The floor came out exceptional and the team left the site cleaner than they found it. Can't ask for more."
    },
    {
        name: "Greg Sommer",
        date: "1 month ago",
        text: "A1 coated our entire brewery floor — fermentation room, packaging area, and loading dock. They understood the USDA-compliant requirements and specified the right system. The floor drains properly, cleans up instantly, and has held up to constant forklift and pallet jack traffic. Outstanding results."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Homepage Carousel
    const carouselContainer = document.querySelector('.reviews-grid');
    if (carouselContainer) {
        initUpdates(carouselContainer, true);
    }

    // 2. Reviews Page Grid
    const gridContainer = document.querySelector('.all-reviews-grid');
    if (gridContainer) {
        initUpdates(gridContainer, false);
    }

    function initUpdates(container, isCarousel) {
        const createReviewCard = (review) => {
            const card = document.createElement('div');
            card.className = 'review-card'; // Updated class to match CSS

            const MAX_LENGTH = 120;
            const isLong = review.text.length > MAX_LENGTH;
            const truncatedText = isLong ? review.text.substring(0, MAX_LENGTH) : review.text;
            const fullText = review.text;

            const stars = '★★★★★';
            const initial = review.name.charAt(0);

            card.innerHTML = `
            <div class="review-header">
              <div class="reviewer-avatar">${initial}</div>
              <div class="reviewer-info">
                <div class="reviewer-name">${review.name}</div>
                <div class="review-meta">
                  <span class="review-stars">${stars}</span>
                  <span class="review-date">${review.date}</span>
                </div>
              </div>
              <div class="google-icon">
                 <!-- Simple Google G Icon -->
                 <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                 </svg>
              </div>
            </div>
            <div class="review-body">
              <p class="review-text" data-full="${fullText.replace(/"/g, '&quot;')}" data-truncated="${truncatedText.replace(/"/g, '&quot;')}">${truncatedText}</p>
              ${isLong ? '<button class="read-more-btn">Read more</button>' : ''}
            </div>
            `;
            return card;
        };

        if (isCarousel) {
            reviewsData.forEach((review) => {
                container.appendChild(createReviewCard(review));
            });
            setupCarouselLogic(container);
        } else {
            // Grid logic: Show 6 initially, then View More
            const initialCount = 6;
            const shownReviews = reviewsData.slice(0, initialCount);
            const hiddenReviews = reviewsData.slice(initialCount);

            shownReviews.forEach(review => {
                container.appendChild(createReviewCard(review));
            });

            if (hiddenReviews.length > 0) {
                const btnContainer = document.createElement('div');
                btnContainer.style.textAlign = 'center';
                btnContainer.style.width = '100%';
                btnContainer.style.marginTop = '3rem';

                // Button Styles
                const btn = document.createElement('button');
                btn.textContent = 'View More';
                // Inline styles to match typical primary button if class isn't enough, 
                // but we use .btn-cta which likely exists.
                btn.className = 'btn btn-cta';

                btn.addEventListener('click', () => {
                    hiddenReviews.forEach(review => {
                        container.appendChild(createReviewCard(review));
                    });
                    btnContainer.remove(); // Remove button after clicking
                });

                btnContainer.appendChild(btn);
                // Insert after the grid container
                container.parentNode.appendChild(btnContainer);
            }
        }

        // Common Event Listener for Read More
        // Note: For dynamically added content, we need to ensure this still works. 
        // Since we verify classList on click, it delegates fine.

        container.addEventListener('click', (e) => {
            if (e.target.classList.contains('read-more-btn')) {
                const btn = e.target;
                const textEl = btn.previousElementSibling;
                const fullText = textEl.getAttribute('data-full');
                const truncatedText = textEl.getAttribute('data-truncated');

                // Collapse others
                if (!btn.classList.contains('expanded')) {
                    const expandedBtns = container.querySelectorAll('.read-more-btn.expanded');
                    expandedBtns.forEach(b => {
                        const t = b.previousElementSibling;
                        t.textContent = t.getAttribute('data-truncated');
                        b.textContent = 'Read more';
                        b.classList.remove('expanded');
                    });
                }

                if (btn.classList.contains('expanded')) {
                    // Collapse
                    textEl.textContent = truncatedText;
                    btn.textContent = 'Read more';
                    btn.classList.remove('expanded');
                } else {
                    // Expand
                    textEl.textContent = fullText;
                    btn.textContent = 'Read less';
                    btn.classList.add('expanded');
                }
            }
        });
    }

    function setupCarouselLogic(container) {
        const SCROLL_SPEED = 1;
        let rAFId;
        let isPaused = false;
        let isInteract = false;

        const scrollStep = () => {
            // We only need to check for expanded buttons if not interacting
            // But to avoid DOM query string every frame, we'll assume if there's no interaction, 
            // nothing changes, but let's be safe and check if needed.
            if (!isPaused && !isInteract) {
                const anyExpanded = container.querySelector('.read-more-btn.expanded');
                if (!anyExpanded) {
                    container.scrollLeft += SCROLL_SPEED;
                    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
                        container.scrollLeft = 0;
                    }
                }
            }
            rAFId = requestAnimationFrame(scrollStep);
        };

        const startAutoScroll = () => {
            if (rAFId) cancelAnimationFrame(rAFId);
            rAFId = requestAnimationFrame(scrollStep);
        };

        const stopAutoScroll = () => {
            if (rAFId) cancelAnimationFrame(rAFId);
        };

        // Interaction Handlers
        container.addEventListener('mouseenter', () => isInteract = true);
        container.addEventListener('mouseleave', () => isInteract = false);
        container.addEventListener('touchstart', () => isInteract = true, { passive: true });
        container.addEventListener('touchend', () => setTimeout(() => isInteract = false, 1200));

        // Auto-collapse on scroll
        container.addEventListener('scroll', () => {
            if (isInteract) {
                const expandedBtns = container.querySelectorAll('.read-more-btn.expanded');
                if (expandedBtns.length > 0) {
                    expandedBtns.forEach(btn => {
                        const textEl = btn.previousElementSibling;
                        textEl.textContent = textEl.getAttribute('data-truncated');
                        btn.textContent = 'Read more';
                        btn.classList.remove('expanded');
                    });
                }
            }
        });

        // Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => entry.isIntersecting ? startAutoScroll() : stopAutoScroll());
        }, { threshold: 0.1 });
        observer.observe(container);
    }
});
