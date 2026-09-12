// ---------------------------------------------------------
// Nostra – index.html page logic
// ---------------------------------------------------------

function productCard(product, { showBadge = false, showHeart = false } = {}) {
  const wishlisted = Store.getWishlist().includes(product.id);
  return `
    <div class="product-card group relative rounded-lg overflow-hidden bg-white/40">
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
        <p class="text-xs sm:text-sm text-[#5b5648] mt-0.5">
          ${product.oldPrice ? `<span class="line-through mr-1.5 text-[#a39d8e]">${formatPrice(product.oldPrice)}</span>` : ""}
          ${formatPrice(product.price)}
        </p>
      </div>
    </div>
  `;
}

function renderHomeGrids() {
  const newArrivals = PRODUCTS.filter((p) => p.section === "new-arrival").slice(0, 4);
  const mostWanted = PRODUCTS.filter((p) => p.section === "most-wanted").slice(0, 5);

  document.getElementById("new-arrival-grid").innerHTML = newArrivals
    .map((p) => productCard(p, { showBadge: false, showHeart: false }))
    .join("");

  document.getElementById("most-wanted-grid").innerHTML = mostWanted
    .map((p) => productCard(p, { showBadge: true, showHeart: true }))
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

document.addEventListener("DOMContentLoaded", () => {
  renderHomeGrids();
  initHeroCarousel();
});