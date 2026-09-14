// ---------------------------------------------------------
// Nostra – collections.html page logic
// ---------------------------------------------------------

function collectionCard(product) {
  const wishlisted = Store.getWishlist().includes(product.id);
  return `
    <div class="product-card group relative rounded-lg overflow-hidden bg-white/40 dark:bg-white/5">
      <a href="product.html?id=${product.id}" class="block relative">
        <img src="${product.image}" alt="${product.name}" class="w-full h-40 sm:h-56 md:h-64 object-cover" />
        ${product.badge ? `<span class="absolute top-2 left-2 bg-[#c65b3f] text-white text-xs font-medium px-2 py-1 rounded">${product.badge}</span>` : ""}
      </a>
      <button class="wishlist-btn ${wishlisted ? "is-active" : ""} absolute bottom-[60px] sm:bottom-[76px] right-2 bg-white/90 rounded-full w-7 h-7 flex items-center justify-center" data-product-id="${product.id}" aria-label="Toggle wishlist">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="${wishlisted ? "#c65b3f" : "none"}" stroke="#16181d" stroke-width="2"><path d="M12 21s-7-4.35-9.5-8.5C.5 8.5 3 5 6.5 5 8.7 5 10.5 6.2 12 8c1.5-1.8 3.3-3 5.5-3C21 5 23.5 8.5 21.5 12.5 19 16.65 12 21 12 21z"/></svg>
      </button>
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

function getActiveFilters() {
  const active = { occasion: [], color: [], arrival: [] };
  document.querySelectorAll(".filter-check:checked").forEach((el) => {
    active[el.dataset.filter].push(el.value);
  });
  return active;
}

function applyFilters() {
  const filters = getActiveFilters();
  const query = document.getElementById("search-input").value.trim().toLowerCase();

  const results = PRODUCTS.filter((p) => {
    const matchesOccasion = filters.occasion.length === 0 || filters.occasion.some((f) => p.occasion.includes(f));
    const matchesColor = filters.color.length === 0 || filters.color.some((f) => p.color.includes(f));
    const matchesArrival = filters.arrival.length === 0 || filters.arrival.includes(p.arrival);
    const matchesSearch = !query || p.name.toLowerCase().includes(query);
    return matchesOccasion && matchesColor && matchesArrival && matchesSearch;
  });

  const grid = document.getElementById("product-grid");
  const empty = document.getElementById("empty-state");
  const count = document.getElementById("results-count");

  count.textContent = `${results.length} product${results.length === 1 ? "" : "s"}`;
  grid.innerHTML = results.map(collectionCard).join("");
  grid.classList.toggle("hidden", results.length === 0);
  empty.classList.toggle("hidden", results.length !== 0);

  initWishlistButtons();
}

document.addEventListener("DOMContentLoaded", () => {
  applyFilters();
  document.querySelectorAll(".filter-check").forEach((el) => el.addEventListener("change", applyFilters));
  document.getElementById("search-input").addEventListener("input", applyFilters);
  document.getElementById("clear-filters").addEventListener("click", () => {
    document.querySelectorAll(".filter-check").forEach((el) => (el.checked = false));
    document.getElementById("search-input").value = "";
    applyFilters();
  });

  const filtersToggle = document.getElementById("filters-toggle");
  const filtersPanel = document.getElementById("filters-panel");
  if (filtersToggle && filtersPanel) {
    filtersToggle.addEventListener("click", () => {
      const nowHidden = filtersPanel.classList.toggle("hidden");
      filtersToggle.setAttribute("aria-expanded", nowHidden ? "false" : "true");
    });
  }
});
