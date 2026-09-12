<div align="center">

# 🛍️ Nostra

**A modern, responsive e-commerce storefront**
Built with plain HTML, Tailwind CSS, and vanilla JavaScript — no build step, no dependencies.

## ✨ Features

- 🎠 **Hero carousel** with auto-play and manual controls
- 🧥 **New Arrivals** grid + horizontally-scrollable **Most Wanted** rail
- 🔍 **Live search & filtering** on the Collections page (by occasion, color, arrival status)
- ❤️ **Wishlist** and 🛒 **cart**, both persisted with `localStorage`
- 📱 **Fully responsive** — mobile hamburger nav, collapsible filter drawer, swipeable product rails
- ✉️ **Contact form** ready to wire up to a backend
- ⚡ Zero dependencies to install — just open a browser

---

## 📄 Pages

| Page | Description |
|---|---|
| `index.html` | Home — promo bar, hero carousel, brands strip, New Arrivals, Most Wanted, limited-offer banner, feature strip, footer |
| `collections.html` | Full catalogue with sidebar filters + live search |
| `product.html` | Product detail page (reads `?id=` from the URL) — size picker, add-to-cart, related items |
| `cart.html` | Cart summary, backed by `localStorage` |
| `contact.html` | Contact form (Name / Email / Message) |

---

## 📁 Folder Structure

> ⚠️ **Important:** everything must sit **flat** inside one project folder — no nested `html/` subfolder, or links between pages will break.

```
NOSTRA/
├── index.html
├── collections.html
├── product.html
├── cart.html
├── contact.html
├── css/
│   └── style.css
└── js/
    ├── products.js      ← single source of truth for all product data
    ├── site.js          ← shared behaviour (nav, cart, wishlist, toasts)
    ├── index.js
    ├── collections.js
    ├── product.js
    ├── cart.js
    └── contact.js
```

---

## 🚀 Getting Started

**Option 1 — Just open it**
Double-click `index.html`. Works straight away as long as you're online (Tailwind and product photos load from CDNs).

**Option 2 — Serve it locally** *(recommended)*
```bash
cd NOSTRA
python3 -m http.server 8080
```
Then visit **http://localhost:8080** 🎉

---

## 🧠 How It's Wired Together

| File | Role |
|---|---|
| `js/products.js` | All product data lives here — name, price, images, filter tags. Edit once, updates everywhere. |
| `js/site.js` | Shared across every page: promo-bar dismissal, mobile nav, cart/wishlist state, toast notifications. |
| `js/index.js`, `collections.js`, `product.js`, `cart.js`, `contact.js` | Page-specific rendering logic. |

---

## 📝 Notes & Next Steps

- 🖼️ Product photos are currently placeholders from `picsum.photos` — swap the `image` URLs in `js/products.js` for real photography when ready.
- 💾 Cart & wishlist persist in `localStorage` — per browser/device, not synced to an account.
- 📬 The contact form is front-end only — connect `js/contact.js` to a backend or a service like Formspree to actually receive messages.

---

<div align="center">
<sub>Built for the Nostra clothing brand · 2026</sub>
</div> hamburger nav, collapsible filter drawer on Collections, and a swipeable/arrow-controlled Most Wanted row.
-# Nostra-
