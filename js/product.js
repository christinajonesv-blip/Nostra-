// ---------------------------------------------------------
// Nostra – product.html page logic
// ---------------------------------------------------------

const SIZES = ["XS", "S", "M", "L", "XL"];
let selectedSize = "M";

function renderProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || PRODUCTS[0].id;
  const product = getProductById(id) || PRODUCTS[0];
  const wishlisted = Store.getWishlist().includes(product.id);

  document.title = `${product.name} — Nostra`;

  document.getElementById("product-root").innerHTML = `
    <div>
      <img src="${product.image}" alt="${product.name}" class="w-full rounded-xl object-cover h-[280px] sm:h-[380px] md:h-[560px]" />
    </div>
    <div>
      <p class="text-xs uppercase tracking-wide text-[#5b5648] mb-2">${product.section.replace("-", " ")}</p>
      <h1 class="text-2xl sm:text-3xl font-display font-bold mb-3">${product.name}</h1>
      <p class="text-lg sm:text-xl mb-5 sm:mb-6">
        ${product.oldPrice ? `<span class="line-through text-[#a39d8e] mr-2">${formatPrice(product.oldPrice)}</span>` : ""}
        ${formatPrice(product.price)}
      </p>
      <p class="text-sm sm:text-base text-[#5b5648] leading-relaxed mb-6 sm:mb-8">${product.description}</p>

      <div class="mb-6 sm:mb-8">
        <p class="text-sm font-medium mb-2">Size</p>
        <div id="size-options" class="flex flex-wrap gap-2">
          ${SIZES.map((s) => `<button data-size="${s}" class="size-btn border rounded px-3.5 py-2 text-sm ${s === selectedSize ? "border-[#16181d] bg-[#16181d] text-white" : "border-[#dcd6c8]"}">${s}</button>`).join("")}
        </div>
      </div>

      <div class="flex gap-3">
        <button data-add-to-cart="${product.id}" class="flex-1 bg-[#16181d] text-white py-3 rounded-lg font-medium hover:bg-[#2a2d36] transition text-sm sm:text-base">Add to Cart</button>
        <button class="wishlist-btn ${wishlisted ? "is-active" : ""} border border-[#dcd6c8] rounded-lg w-12 shrink-0 flex items-center justify-center" data-product-id="${product.id}" aria-label="Toggle wishlist">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${wishlisted ? "#c65b3f" : "none"}" stroke="#16181d" stroke-width="2"><path d="M12 21s-7-4.35-9.5-8.5C.5 8.5 3 5 6.5 5 8.7 5 10.5 6.2 12 8c1.5-1.8 3.3-3 5.5-3C21 5 23.5 8.5 21.5 12.5 19 16.65 12 21 12 21z"/></svg>
        </button>
      </div>
    </div>
  `;

  document.querySelectorAll(".size-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedSize = btn.dataset.size;
      document.querySelectorAll(".size-btn").forEach((b) => {
        b.classList.toggle("border-[#16181d]", b === btn);
        b.classList.toggle("bg-[#16181d]", b === btn);
        b.classList.toggle("text-white", b === btn);
        b.classList.toggle("border-[#dcd6c8]", b !== btn);
      });
    });
  });

  // Re-hook add-to-cart with the currently selected size
  document.querySelector("[data-add-to-cart]").addEventListener("click", (e) => {
    e.preventDefault();
    Store.addToCart(product.id, 1, selectedSize);
    showToast(`Added to cart — size ${selectedSize}`);
  });

  initWishlistButtons();
  renderRelated(product);
}

function relatedCard(product) {
  return `
    <a href="product.html?id=${product.id}" class="block rounded-lg overflow-hidden bg-white/40">
      <img src="${product.image}" alt="${product.name}" class="w-full h-32 sm:h-48 object-cover" />
      <div class="p-2 sm:p-2.5">
        <p class="text-xs sm:text-sm font-medium">${product.name}</p>
        <p class="text-xs sm:text-sm text-[#5b5648]">${formatPrice(product.price)}</p>
      </div>
    </a>
  `;
}

function renderRelated(current) {
  const related = PRODUCTS.filter((p) => p.id !== current.id).slice(0, 4);
  document.getElementById("related-grid").innerHTML = related.map(relatedCard).join("");
}

document.addEventListener("DOMContentLoaded", renderProduct);