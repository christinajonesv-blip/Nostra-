// ---------------------------------------------------------
// Nostra – cart.html page logic
// ---------------------------------------------------------

function cartRow(item, product) {
  return `
    <div class="flex items-center gap-3 sm:gap-4 bg-white/40 dark:bg-white/5 rounded-lg p-3">
      <a href="product.html?id=${product.id}" class="shrink-0">
        <img src="${product.image}" alt="${product.name}" class="w-16 h-20 sm:w-20 sm:h-24 object-cover rounded" />
      </a>
      <div class="flex-1 min-w-0">
        <p class="font-medium text-sm sm:text-base truncate">${product.name}</p>
        <p class="text-xs sm:text-sm text-[#5b5648] dark:text-[#a3a099]">Size ${item.size} · Qty ${item.qty}</p>
      </div>
      <p class="font-medium text-sm sm:text-base shrink-0">${formatPrice(product.price * item.qty)}</p>
      <button data-remove="${product.id}" data-size="${item.size}" class="text-[#a39d8e] hover:text-[#c65b3f] text-xs sm:text-sm ml-1 sm:ml-2 shrink-0">Remove</button>
    </div>
  `;
}

function renderCart() {
  const cart = Store.getCart();
  const container = document.getElementById("cart-items");
  const empty = document.getElementById("cart-empty");
  const summary = document.getElementById("cart-summary");

  if (cart.length === 0) {
    container.innerHTML = "";
    empty.classList.remove("hidden");
    summary.classList.add("hidden");
    return;
  }

  empty.classList.add("hidden");
  summary.classList.remove("hidden");

  let total = 0;
  container.innerHTML = cart
    .map((item) => {
      const product = getProductById(item.id);
      if (!product) return "";
      total += product.price * item.qty;
      return cartRow(item, product);
    })
    .join("");

  document.getElementById("cart-total").textContent = formatPrice(total);

  document.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cart = Store.getCart().filter(
        (i) => !(i.id === btn.dataset.remove && i.size === btn.dataset.size)
      );
      Store.write("nostra-cart", cart);
      updateCartBadge();
      renderCart();
    });
  });
}

document.addEventListener("DOMContentLoaded", renderCart);
