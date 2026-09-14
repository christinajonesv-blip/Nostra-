// ---------------------------------------------------------
// Nostra – index.html page logic
// ---------------------------------------------------------

const BRAND_ICONS = {
  circle: (letter) => `<div class="w-9 h-9 sm:w-11 sm:h-11 mx-auto rounded-full bg-[#16181d] dark:bg-[#e5e2d9] text-white dark:text-[#16181d] flex items-center justify-center font-bold text-sm">${letter}</div>`,
  sun: () => `<svg class="mx-auto w-7 h-7 sm:w-[34px] sm:h-[34px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>`,
  mountain: () => `<svg class="mx-auto w-7 h-7 sm:w-[34px] sm:h-[34px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 20l5-14 5 14M13 20l5-14 3 8"/></svg>`,
  leaf: () => `<svg class="mx-auto w-7 h-7 sm:w-[34px] sm:h-[34px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3c3 3 3 9 0 12M12 3c-3 3-3 9 0 12"/></svg>`
};

function renderBrands() {
  const row = document.getElementById("brands-row");
  if (!row) return;
  row.innerHTML = BRANDS.map((b) => `
    <a href="collections.html" class="block hover:opacity-70 transition">
      ${BRAND_ICONS[b.icon](b.letter || "")}
      <p class="text-xs sm:text-sm mt-2">${b.name}</p>
    </a>
  `).join("");
}

function renderCategories() {
  const grid = document.getElementById("category-grid");
  if (!grid) return;
  grid.innerHTML = CATEGORIES.map((c) => `
    <a href="${c.link}" class="category-card block relative rounded-lg overflow-hidden group">
      <img src="${c.image}" alt="${c.name}" class="w-full h-40 sm:h-56 object-cover" />
      <div class="category-overlay absolute inset-0 bg-black/25 flex flex-col justify-end p-3 sm:p-4">
        <h3 class="text-white font-display font-bold text-sm sm:text-lg">${c.name}</h3>
        <p class="text-white/80 text-xs sm:text-sm mb-1">${c.tagline}</p>
        <span class="text-white text-xs sm:text-sm font-medium underline underline-offset-2">Shop Now!</span>
      </div>
    </a>
  `).join("");
}

function productCard(product, { showBadge = false, showHeart = false, scrollCard = false } = {}) {
  const wishlisted = Store.getWishlist().includes(product.id);
  return `
    <div class="product-card group relative rounded-lg overflow-hidden bg-white/40 dark:bg-white/5 ${scrollCard ? "mw-card" : ""}">
      <a href="product.html?id=${product.id}" class="block relative">
        <img src="${product.image}" alt="${product.name}" class="w-full h-40 sm:h-56 md:h-64 object-cover" />
        ${showBadge && product.badge ? `<span class="absolute top-2 left-2 bg-[#c65b3f] text-white text-xs font-medium px-2 py-1 rounded">${product.badge}</span>` : ""}
        <div class="shop-now-overlay absolute inset-x-0 bottom-3 flex justify-center">
          <span class="bg-white text-[#16181d] text-xs font-medium px-3 py-1.5 rounded shadow">Shop Now →</span>
        </div>
      </a>
      ${showHeart ? `
      <button class="wishlist-btn ${wishlisted ? "is-active" : ""} absolute bottom-2 right-2 bg-white/90 rounded-full w-7 h-7 flex items-center justify-center" data-product-id="${product.id}" aria-label="Toggle wishlist">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="${wishlisted ? "#c65b3f" : "none"}" stroke="#16181d" stroke-width="2"><path d="M12 21s-7-4.35-9.5-8.5C.5 8.5 3 5 6.5 5 8.7 5 10.5 6.2 12 8c1.5-1.8 3.3-3 5.5-3C21 5 23.5 8.5 21.5 12.5 19 16.65 12 21 12 21z"/></svg>
      </button>` : ""}
      <div class="p-2.5 sm:p-3">
        <p class="font-medium text-xs sm:text-sm">${product.name}</p>
        <p class="text-xs mt-0.5">${renderStars(product.rating)}</p>
        <p class="text-xs sm:text-sm text-[#5b5648] dark:text-[#a3a099] mt-0.5">
          ${product.oldPrice ? `<span class="line-through mr-1.5 text-[#a39d8e]">${formatPrice(product.oldPrice)}</span>` : ""}
          ${formatPrice(product.price)}
        </p>
      </div>
    </div>
  `;
}

function renderHomeGrids() {
  const newArrivals = PRODUCTS.filter((p) => p.section === "new-arrival").slice(0, 4);
  const mostWanted = PRODUCTS.filter((p) => p.section === "most-wanted");

  document.getElementById("new-arrival-grid").innerHTML = newArrivals
    .map((p) => productCard(p, { showBadge: false, showHeart: false }))
    .join("");

  document.getElementById("most-wanted-grid").innerHTML = mostWanted
    .map((p) => productCard(p, { showBadge: true, showHeart: true, scrollCard: true }))
    .join("");

  initWishlistButtons();
}

function initHeroCarousel() {
  const slides = document.querySelectorAll(".hero-slide");
  if (!slides.length) return;
  let current = 0;

  function show(index) {
    slides.forEach((s, i) => s.classList.toggle("is-active", i === index));
  }

  document.getElementById("hero-prev").addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    show(current);
  });
  document.getElementById("hero-next").addEventListener("click", () => {
    current = (current + 1) % slides.length;
    show(current);
  });

  setInterval(() => {
    current = (current + 1) % slides.length;
    show(current);
  }, 6000);
}

function initMostWantedScroller() {
  const track = document.getElementById("most-wanted-grid");
  if (!track) return;

  function scrollByCard(direction) {
    const card = track.querySelector(".mw-card");
    const step = card ? card.getBoundingClientRect().width + 20 : 240;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  ["mw-prev", "mw-prev-mobile"].forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener("click", () => scrollByCard(-1));
  });
  ["mw-next", "mw-next-mobile"].forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener("click", () => scrollByCard(1));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderBrands();
  renderCategories();
  renderHomeGrids();
  initHeroCarousel();
  initMostWantedScroller();
});
