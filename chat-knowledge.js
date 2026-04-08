
const chatKnowledgeBase = [
  // --- Coating Systems ---
  {
    keywords: ['standard', 'system', 'epoxy', 'basic', 'starter'],
    answer: "Our **Standard System** is a 100% solids epoxy base coat with a polyaspartic top coat. It's a proven, cost-effective solution for light commercial and lower-traffic industrial spaces. 🛡️",
    followUp: true
  },
  {
    keywords: ['premium', 'system', 'polyurea', 'popular', 'best', 'value'],
    answer: "Our **Premium System** is our most specified commercial coating. 💎 It features a flexible Polyurea base coat and a UV-stable Polyaspartic top coat — 4x stronger than epoxy, cures in 24 hours, and handles daily forklift and pallet jack traffic.",
    followUp: true
  },
  {
    keywords: ['ultimate', 'system', 'moisture', 'mitigation', 'protection', 'lifetime'],
    answer: "The **Ultimate System** is our heavy-industrial spec. ⚔️ It includes a moisture-mitigation primer, a polyurea build coat, and a polyaspartic top coat. Required for facilities with moisture issues, cold storage, food processing, or round-the-clock heavy equipment use.",
    followUp: true
  },

  // --- Facility Types ---
  {
    keywords: ['warehouse', 'distribution', 'forklift', 'pallet', 'logistics'],
    answer: "We coat warehouses and distribution centers up to 100,000+ sq ft. Our systems are rated for daily forklift traffic, pallet jacks, and heavy loads. Most warehouse installs are done over a weekend — zero production downtime. 🏭",
    followUp: true
  },
  {
    keywords: ['auto', 'shop', 'dealership', 'automotive', 'mechanic', 'oil', 'chemical'],
    answer: "Auto shops and dealerships are one of our specialties. We use chemical-resistant polyaspartic topcoats that handle oil, brake fluid, and coolant. High-gloss, easy to clean, and built for daily vehicle traffic. 🚗",
    followUp: true
  },
  {
    keywords: ['food', 'kitchen', 'nsf', 'usda', 'fda', 'antimicrobial', 'sanitary', 'brewery', 'processing'],
    answer: "For commercial kitchens, food processing, and breweries, we install NSF-rated, antimicrobial coating systems that meet USDA/FDA requirements. Seamless, non-porous, chemical-resistant, and easy to sanitize. ✅",
    followUp: true
  },
  {
    keywords: ['manufacturing', 'plant', 'factory', 'machine', 'shop', 'industrial'],
    answer: "Manufacturing and machine shop floors take a beating. We spec heavy polyurea build coats with impact-rated polyaspartic topcoats. We work around your production schedule — nights, weekends, phased installs available. 🔧",
    followUp: true
  },
  {
    keywords: ['hangar', 'aviation', 'aircraft', 'airport'],
    answer: "We've coated aviation hangars up to 15,000 sq ft. Our systems handle aircraft weight, fuel exposure, and heavy equipment. High-gloss, seamless, and fully resistant to aviation fluids. ✈️",
    followUp: false
  },
  {
    keywords: ['cold', 'storage', 'freezer', 'refrigeration', 'freeze'],
    answer: "Cold storage facilities require moisture-mitigating primers and freeze-thaw rated systems. We test your slab's MVER before specifying — no shortcuts. Our Ultimate System is standard for all cold storage applications. 🥶",
    followUp: true
  },

  // --- General Coatings ---
  {
    keywords: ['coating', 'floor', 'concrete', 'commercial', 'industrial'],
    answer: "We specialize in commercial and industrial concrete floor coatings across West Michigan. Polyurea, Polyaspartic, and Epoxy systems engineered for demanding environments. ✨",
    followUp: true
  },
  {
    keywords: ['crack', 'repair', 'damage', 'pitting', 'spalling', 'oil', 'contamination'],
    answer: "All concrete defects are addressed before we coat. We fill cracks, grind pitting, and for oil-saturated slabs (common in auto shops), we use industrial degreasers and shot-blast the surface to get a clean mechanical profile. 🔧",
    followUp: false
  },
  {
    keywords: ['flake', 'color', 'chip', 'design', 'finish', 'custom'],
    answer: "We offer a wide range of flake colors, solid systems, and custom logo integration for showrooms and branded facilities. We'll help you match your facility's aesthetic or safety color requirements. 🎨",
    followUp: false
  },

  // --- Process & Logistics ---
  {
    keywords: ['time', 'long', 'duration', 'day', 'cure', 'dry', 'downtime', 'schedule'],
    answer: "Most commercial jobs are completed in **1–2 days**. Our polyurea/polyaspartic systems cure in 24 hours — your facility is back in operation the next day. We work nights and weekends to eliminate production downtime. ⏱️",
    followUp: false
  },
  {
    keywords: ['warranty', 'guarantee', 'last', 'life'],
    answer: "All commercial installations include a written warranty against peeling and delamination. Terms vary by system and project scope — full details provided in your proposal. Our prep standards make warranty claims extremely rare. ✅",
    followUp: false
  },
  {
    keywords: ['slip', 'slippery', 'safety', 'texture', 'anti-slip', 'grip', 'osha'],
    answer: "Safety compliance is built into our specs. Our broadcast flake systems provide natural texture. For wet areas, food processing, or OSHA-required zones, we add certified anti-slip additives directly to the topcoat. 🦶",
    followUp: false
  },
  {
    keywords: ['moisture', 'mver', 'vapor', 'wet', 'slab', 'below grade'],
    answer: "We test every slab for moisture vapor emission rate (MVER) before coating. If it's elevated, we install a moisture-mitigation primer as the first coat. This step is mandatory for cold storage, below-grade floors, and older industrial buildings. 💧",
    followUp: false
  },

  // --- Pricing ---
  {
    keywords: ['price', 'cost', 'money', 'much', 'estimate', 'quote', 'sq', 'ft', 'budget'],
    answer: "Commercial pricing typically ranges from **$4–$9 per sq. ft.** depending on surface condition, system spec, square footage, and site access. Larger jobs get volume pricing. We provide free site visits and itemized estimates — no ballpark numbers. 💵",
    followUp: true
  },

  // --- Service Area ---
  {
    keywords: ['where', 'area', 'location', 'cover', 'michigan', 'mi', 'grand rapids', 'kalamazoo', 'lansing', 'muskegon', 'west michigan'],
    answer: "We are based in **Grand Rapids, MI (49546)** and serve commercial clients within a 100-mile radius as our standard zone. For large industrial projects (10,000+ sq ft), we regularly travel 150+ miles. 📍",
    followUp: true
  },

  // --- Conversational ---
  {
    keywords: ['hello', 'hi', 'hey', 'start'],
    answer: "Hello! 👋 Welcome to A1 Concrete Coatings. We specialize in commercial and industrial floor coating systems across West Michigan. How can we help with your facility?",
    followUp: false
  },
  {
    keywords: ['thank', 'thanks', 'bye'],
    answer: "You're welcome! We're here if you need anything. We look forward to working on your facility. 🚀",
    followUp: false
  },
  {
    keywords: ['human', 'person', 'phone', 'call', 'speak', 'talk'],
    answer: "Our team is ready to discuss your project. Call us directly at **888.705.1146**. 📞",
    followUp: true
  }
];

if (typeof window !== 'undefined') {
  window.chatKnowledgeBase = chatKnowledgeBase;
}
