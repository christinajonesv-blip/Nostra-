// ---------------------------------------------------------
// Nostra – shared data
// Every page reads from this single source of truth.
// ---------------------------------------------------------

const PRODUCTS = [
  // ---- New Arrivals ----
  {
    id: "p1",
    name: "Floral Weekend Shirt",
    price: 799,
    oldPrice: null,
    rating: 4,
    section: "new-arrival",
    arrival: "new",
    occasion: ["casual"],
    color: ["white", "green"],
    image: "images/photo-1511039912745-8bfa0bc56aeb.avif",
    badge: null,
    description: "A lightweight cotton-blend shirt printed with a hand-painted floral motif. Relaxed fit with a soft collar that layers well over a tee."
  },
  {
    id: "p2",
    name: "Tailored Trousers",
    price: 899,
    oldPrice: null,
    rating: 4,
    section: "new-arrival",
    arrival: "new",
    occasion: ["formal"],
    color: ["white"],
    image: "https://picsum.photos/seed/nostra-trouser/500/620",
    badge: null,
    description: "Sharp, straight-leg trousers in a breathable weave — built for the office and easy to dress down after hours."
  },
  {
    id: "p3",
    name: "Denim Overshirt",
    price: 999,
    oldPrice: null,
    rating: 3,
    section: "new-arrival",
    arrival: "new",
    occasion: ["casual"],
    color: ["blue"],
    image: "https://picsum.photos/seed/nostra-denim/500/620",
    badge: null,
    description: "A mid-weight denim overshirt with a boxy silhouette and dual chest pockets. Layer it open over plain tees."
  },
  {
    id: "p4",
    name: "Field Jacket",
    price: 1299,
    oldPrice: null,
    rating: 5,
    section: "new-arrival",
    arrival: "new",
    occasion: ["formal"],
    color: ["white"],
    image: "https://picsum.photos/seed/nostra-jacket/500/620",
    badge: null,
    description: "A utilitarian field jacket with four flap pockets and a corozo-button placket, finished in brushed cotton twill."
  },

  // ---- Most Wanted ----
  {
    id: "p5",
    name: "Ash Grey Hoodie",
    price: 899,
    oldPrice: 1199,
    rating: 4,
    section: "most-wanted",
    arrival: "old",
    occasion: ["casual"],
    color: ["white"],
    image: "https://picsum.photos/seed/nostra-hoodie/500/620",
    badge: "sale",
    description: "Brushed fleece hoodie in ash grey with a kangaroo pocket — soft, roomy, and built for everyday wear."
  },
  {
    id: "p6",
    name: "Cargo Joggers",
    price: 799,
    oldPrice: 999,
    rating: 3,
    section: "most-wanted",
    arrival: "old",
    occasion: ["casual"],
    color: ["green"],
    image: "https://picsum.photos/seed/nostra-cargo/500/620",
    badge: "sale",
    description: "Tapered cargo joggers with utility pockets and an elastic cuff — comfortable enough for all-day wear."
  },
  {
    id: "p7",
    name: "Utility Pullover",
    price: 949,
    oldPrice: 1199,
    rating: 4,
    section: "most-wanted",
    arrival: "old",
    occasion: ["casual"],
    color: ["green", "white"],
    image: "https://picsum.photos/seed/nostra-pullover/500/620",
    badge: "sale",
    description: "A half-zip utility pullover in a heavyweight cotton blend, with a chest pocket and ribbed cuffs."
  },
  {
    id: "p8",
    name: "Bomber Jacket",
    price: 1499,
    oldPrice: 1899,
    rating: 5,
    section: "most-wanted",
    arrival: "old",
    occasion: ["formal"],
    color: ["blue"],
    image: "https://picsum.photos/seed/nostra-bomber/500/620",
    badge: "sale",
    description: "A classic bomber cut in a soft-touch shell, ribbed hem and cuffs, fully lined for cooler evenings."
  },
  {
    id: "p9",
    name: "Graphic Tee",
    price: 499,
    oldPrice: 699,
    rating: 3,
    section: "most-wanted",
    arrival: "old",
    occasion: ["casual"],
    color: ["white"],
    image: "https://picsum.photos/seed/nostra-tee/500/620",
    badge: "sale",
    description: "100% cotton tee with a subtle front print — the everyday staple that layers under anything."
  },
  {
    id: "p10",
    name: "Zip Hoodie",
    price: 999,
    oldPrice: 1299,
    rating: 4,
    section: "most-wanted",
    arrival: "old",
    occasion: ["casual"],
    color: ["blue"],
    image: "https://picsum.photos/seed/nostra-ziphoodie/500/620",
    badge: "sale",
    description: "Full-zip hoodie in brushed fleece with a two-way zip and dropped shoulder seams."
  },
  {
    id: "p11",
    name: "Block Print Shirt",
    price: 849,
    oldPrice: 1099,
    rating: 4,
    section: "most-wanted",
    arrival: "old",
    occasion: ["formal"],
    color: ["red", "white"],
    image: "https://picsum.photos/seed/nostra-block/500/620",
    badge: "sale",
    description: "Short-sleeve shirt in a hand block-print pattern, cut for a relaxed camp-collar fit."
  },
  {
    id: "p12",
    name: "Knit Sweater",
    price: 1099,
    oldPrice: 1399,
    rating: 5,
    section: "most-wanted",
    arrival: "old",
    occasion: ["formal"],
    color: ["green"],
    image: "https://picsum.photos/seed/nostra-knit/500/620",
    badge: "sale",
    description: "A fine-gauge merino-blend sweater with a crew neck — dresses up or down with equal ease."
  },

  // ---- Collection extras (occasion / color variety for filtering) ----
  {
    id: "p13",
    name: "Beach Print Shirt",
    price: 749,
    oldPrice: null,
    rating: 4,
    section: "collection",
    arrival: "new",
    occasion: ["beach"],
    color: ["blue", "white"],
    image: "https://picsum.photos/seed/nostra-beachprint/500/620",
    badge: null,
    description: "Loose, breathable and quick-drying — designed for salt air and long afternoons by the water."
  },
  {
    id: "p14",
    name: "Coastal Stripe Shirt",
    price: 699,
    oldPrice: null,
    rating: 4,
    section: "collection",
    arrival: "old",
    occasion: ["beach"],
    color: ["blue", "white"],
    image: "https://picsum.photos/seed/nostra-coastal/500/620",
    badge: null,
    description: "Fine vertical stripes on a soft cotton-linen blend, cut with a relaxed body and short sleeve."
  },
  {
    id: "p15",
    name: "Classic White Shirt",
    price: 699,
    oldPrice: null,
    rating: 5,
    section: "collection",
    arrival: "new",
    occasion: ["formal"],
    color: ["white"],
    image: "https://picsum.photos/seed/nostra-white/500/620",
    badge: null,
    description: "A wardrobe staple woven from brushed oxford cotton, tailored with a clean point collar."
  },
  {
    id: "p16",
    name: "Rusty Brown Overshirt",
    price: 899,
    oldPrice: null,
    rating: 3,
    section: "collection",
    arrival: "old",
    occasion: ["casual"],
    color: ["red", "white"],
    image: "https://picsum.photos/seed/nostra-rusty/500/620",
    badge: null,
    description: "An unlined overshirt in a heavy cotton canvas, patch pockets front and back."
  },
  {
    id: "p17",
    name: "Party Floral Shirt",
    price: 599,
    oldPrice: null,
    rating: 5,
    section: "collection",
    arrival: "new",
    occasion: ["formal"],
    color: ["red"],
    image: "https://picsum.photos/seed/nostra-partyfloral/500/620",
    badge: null,
    description: "A statement short-sleeve shirt in a bold floral print — the one to reach for when the occasion calls for more."
  }
];

const CATEGORIES = [
  {
    name: "Shirts",
    tagline: "Casual to classy",
    image: "https://picsum.photos/seed/nostra-cat-shirts/500/600",
    link: "collections.html"
  },
  {
    name: "Bottoms",
    tagline: "Comfort in every mode",
    image: "https://picsum.photos/seed/nostra-cat-bottoms/500/600",
    link: "collections.html"
  },
  {
    name: "Layers",
    tagline: "Everyday essentials",
    image: "https://picsum.photos/seed/nostra-cat-layers/500/600",
    link: "collections.html"
  },
  {
    name: "Hoodies",
    tagline: "Comfort meets style",
    image: "https://picsum.photos/seed/nostra-cat-hoodies/500/600",
    link: "collections.html"
  }
];

const BRANDS = [
  { name: "Aeon", icon: "circle", letter: "A" },
  { name: "Solstice", icon: "sun" },
  { name: "Ridgeline", icon: "mountain" },
  { name: "Northfolk", icon: "leaf" },
  { name: "Halcyon", icon: "circle", letter: "H" }
];

function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

function formatPrice(value) {
  return "₹" + value.toLocaleString("en-IN");
}

function renderStars(rating) {
  const full = "★".repeat(rating);
  const empty = "☆".repeat(5 - rating);
  return `<span class="text-[#c65b3f] tracking-tight" aria-label="${rating} out of 5 stars">${full}<span class="text-[#c9c2b2] dark:text-[#4a4c54]">${empty}</span></span>`;
}
