// ---------------------------------------------------------
// Nostra – shared product catalogue
// Every page (index, collections, product) reads from this
// single source of truth so prices / names / images stay in sync.
// ---------------------------------------------------------

const PRODUCTS = [
  {
    id: "p1",
    name: "Floral Summer Shirt",
    price: 220,
    oldPrice: null,
    section: "new-arrival",
    occasion: ["summer"],
    color: ["white", "green"],
    image: "https://picsum.photos/seed/nostra-shirt1/500/620",
    badge: null,
    description: "A lightweight cotton-blend shirt printed with a hand-painted floral motif. Cut for a relaxed fit with a soft collar that layers well over a tee."
  },
  {
    id: "p2",
    name: "Summer Green Trousers",
    price: 260,
    oldPrice: null,
    section: "new-arrival",
    occasion: ["summer", "beach"],
    color: ["green", "white"],
    image: "https://picsum.photos/seed/nostra-trouser1/500/620",
    badge: null,
    description: "Cropped wide-leg trousers in a breathable weave. The elastic waistband and tapered ankle make these easy to dress up or down."
  },
  {
    id: "p3",
    name: "Denim Overshirt",
    price: 340,
    oldPrice: null,
    section: "new-arrival",
    occasion: ["party"],
    color: ["blue"],
    image: "https://picsum.photos/seed/nostra-denim1/500/620",
    badge: null,
    description: "A mid-weight denim overshirt with a boxy silhouette and dual chest pockets. Layer it open over plain tees for an easy, undone look."
  },
  {
    id: "p4",
    name: "Field Jacket",
    price: 410,
    oldPrice: null,
    section: "new-arrival",
    occasion: ["party", "summer"],
    color: ["white"],
    image: "https://picsum.photos/seed/nostra-jacket1/500/620",
    badge: null,
    description: "A utilitarian field jacket with four flap pockets and a corozo-button placket. Finished in a soft brushed cotton twill."
  },
  {
    id: "p5",
    name: "Classic Oxford Shirt",
    price: 199,
    oldPrice: 260,
    section: "most-wanted",
    occasion: ["party"],
    color: ["white"],
    image: "https://picsum.photos/seed/nostra-oxford/500/620",
    badge: "sale",
    description: "A wardrobe staple woven from brushed oxford cotton, tailored with a clean point collar and a single chest pocket."
  },
  {
    id: "p6",
    name: "Tan Chore Jacket",
    price: 289,
    oldPrice: 360,
    section: "most-wanted",
    occasion: ["party", "summer"],
    color: ["white"],
    image: "https://picsum.photos/seed/nostra-chore/500/620",
    badge: "sale",
    description: "An unlined chore jacket in a heavy cotton canvas, patch pockets front and back, finished with corozo buttons."
  },
  {
    id: "p7",
    name: "Cropped Linen Trousers",
    price: 175,
    oldPrice: 230,
    section: "most-wanted",
    occasion: ["beach", "summer"],
    color: ["white"],
    image: "https://picsum.photos/seed/nostra-linen/500/620",
    badge: "sale",
    description: "Wide-leg trousers in washed linen with a drawstring waist — built for warm days and easy movement."
  },
  {
    id: "p8",
    name: "Botanical Print Shirt",
    price: 249,
    oldPrice: 320,
    section: "most-wanted",
    occasion: ["summer", "beach"],
    color: ["green", "white"],
    image: "https://picsum.photos/seed/nostra-botanical/500/620",
    badge: "sale",
    description: "Short-sleeve shirt printed all-over with a muted botanical pattern, cut for a relaxed camp collar fit."
  },
  {
    id: "p9",
    name: "Camel Overshirt",
    price: 265,
    oldPrice: 330,
    section: "most-wanted",
    occasion: ["party"],
    color: ["white"],
    image: "https://picsum.photos/seed/nostra-camel/500/620",
    badge: "sale",
    description: "A heavyweight cotton overshirt in camel, styled with twin flap pockets and horn-effect buttons."
  },
  {
    id: "p10",
    name: "Party Floral Shirt",
    price: 399,
    oldPrice: null,
    section: "collection",
    occasion: ["party"],
    color: ["red", "white"],
    image: "https://picsum.photos/seed/nostra-partyfloral/500/620",
    badge: null,
    description: "A statement short-sleeve shirt in a bold floral print — the one to reach for when the occasion calls for more."
  },
  {
    id: "p11",
    name: "Beach Shirt",
    price: 579,
    oldPrice: null,
    section: "collection",
    occasion: ["beach"],
    color: ["blue"],
    image: "https://picsum.photos/seed/nostra-beach/500/620",
    badge: null,
    description: "Loose, breathable and quick-drying — designed for salt air and long afternoons by the water."
  },
  {
    id: "p12",
    name: "Coastal Stripe Shirt",
    price: 310,
    oldPrice: null,
    section: "collection",
    occasion: ["beach", "summer"],
    color: ["blue", "white"],
    image: "https://picsum.photos/seed/nostra-stripe/500/620",
    badge: null,
    description: "Fine vertical stripes on a soft cotton-linen blend, cut with a relaxed body and short sleeve."
  }
];

function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

function formatPrice(value) {
  return "$" + value.toFixed(2);
}