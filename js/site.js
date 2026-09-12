// ---------------------------------------------------------
// Nostra – site-wide behaviour shared by every page
// ---------------------------------------------------------

/* ---------- Promo bar ---------- */
function initPromoBar() {
  const bar = document.getElementById("promo-bar");
  const closeBtn = document.getElementById("promo-close");
  if (!bar || !closeBtn) return;

  if (sessionStorage.getItem("nostra-promo-dismissed") === "1") {
    bar.remove();
    return;
  }
  closeBtn.addEventListener("click", () => {
    bar.style.display = "none";
    sessionStorage.setItem("nostra-promo-dismissed", "1");
  });
}

/* ---------- Mobile nav ---------- */
function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

/* ---------- Cart + Wishlist (localStorage) ---------- */
const Store = {
  read(key) {
    try {
      return JSON.parse(localStorage.getItem(key)) || [];
    } catch {
      return [];
    }
  },
  write(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getCart() {
    return this.read("nostra-cart");
  },
  getWishlist() {
    return this.read("nostra-wishlist");
  },
  addToCart(productId, qty = 1, size = "M") {
    const cart = this.getCart();
    const existing = cart.find((i) => i.id === productId && i.size === size);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ id: productId, qty, size });
    }
    this.write("nostra-cart", cart);
    updateCartBadge();
  },
  toggleWishlist(productId) {
    let list = this.getWishlist();
    if (list.includes(productId)) {
      list = list.filter((id) => id !== productId);
    } else {
      list.push(productId);
    }
    this.write("nostra-wishlist", list);
    updateCartBadge();
    return list.includes(productId);
  }
};

function updateCartBadge() {
  const cartCount = Store.getCart().reduce((sum, i) => sum + i.qty, 0);
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = cartCount;
    el.classList.toggle("hidden", cartCount === 0);
  });
}

function initWishlistButtons() {
  document.querySelectorAll(".wishlist-btn").forEach((btn) => {
    const id = btn.dataset.productId;
    if (Store.getWishlist().includes(id)) btn.classList.add("is-active");
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const active = Store.toggleWishlist(id);
      btn.classList.toggle("is-active", active);
      showToast(active ? "Added to wishlist" : "Removed from wishlist");
    });
  });
}

function initAddToCartButtons() {
  document.querySelectorAll("[data-add-to-cart]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = btn.dataset.addToCart;
      Store.addToCart(id, 1);
      showToast("Added to cart");
    });
  });
}

/* ---------- Toast ---------- */
let toastTimer = null;
function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className =
      "fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#16181d] text-white text-sm px-5 py-3 rounded-full shadow-lg opacity-0 pointer-events-none z-50";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = "1";
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.style.opacity = "0";
  }, 1800);
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initPromoBar();
  initMobileNav();
  updateCartBadge();
  initWishlistButtons();
  initAddToCartButtons();
});