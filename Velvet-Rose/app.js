const PRODUCTS = [
  {
    id: "rose-lace-set",
    name: "The Rose Lace Set",
    category: "Lingerie Sets",
    price: 68,
    was: 84,
    badge: "Bestseller",
    isNew: false,
    description: "An easy-to-love pairing with delicate lace and considered, comfortable support.",
    material: "Soft stretch lace · Adjustable straps · Gentle-care recommended",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [{ name: "Rose", hex: "#9b465a" }, { name: "Black", hex: "#251e20" }, { name: "Ivory", hex: "#f0e5d7" }],
    images: [
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=950&q=85",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=950&q=85",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=950&q=85"
    ]
  },
  {
    id: "silk-balconette",
    name: "Silk-Soft Balconette",
    category: "Bras",
    price: 46,
    was: 58,
    badge: "New arrival",
    isNew: true,
    description: "A graceful everyday shape in silky-soft fabric, designed for an effortless, flattering fit.",
    material: "Silky microfibre · Adjustable shoulder straps · Hook-and-eye fastening",
    sizes: ["30B", "30C", "32B", "32C", "32D", "34B", "34C", "36B", "36C"],
    colors: [{ name: "Rose", hex: "#a14f60" }, { name: "Midnight", hex: "#292228" }],
    images: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=950&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=950&q=85",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=950&q=85"
    ]
  },
  {
    id: "everyday-brief",
    name: "Everyday Soft Brief",
    category: "Panties",
    price: 22,
    badge: "",
    isNew: false,
    description: "A smooth, breathable everyday favourite with a soft-touch finish and no-fuss comfort.",
    material: "Cotton-modal blend · Smooth flat seams · Machine wash cold",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Blush", hex: "#df9fa7" }, { name: "Black", hex: "#251e20" }, { name: "Ivory", hex: "#f0e5d7" }],
    images: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=950&q=85",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=950&q=85",
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=950&q=85"
    ]
  },
  {
    id: "satin-robe",
    name: "The Satin Evening Robe",
    category: "Nightwear",
    price: 74,
    badge: "New arrival",
    isNew: true,
    description: "A light, fluid layer for your slower moments, finished with a self-tie belt and an easy drape.",
    material: "Recycled satin · Self-tie waist · Relaxed fit",
    sizes: ["XS/S", "M/L", "XL/XXL"],
    colors: [{ name: "Champagne", hex: "#c4a276" }, { name: "Rose", hex: "#a14f60" }],
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=950&q=85",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=950&q=85",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=950&q=85"
    ]
  },
  {
    id: "soft-sculpt",
    name: "Soft Sculpt Short",
    category: "Shapewear",
    price: 39,
    badge: "",
    isNew: false,
    description: "A breathable, flexible base layer with a smooth silhouette and room to move.",
    material: "Light-support stretch knit · Seamless edges · Breathable finish",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Mocha", hex: "#8f6552" }, { name: "Black", hex: "#251e20" }],
    images: [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=950&q=85",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=950&q=85",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=950&q=85"
    ]
  },
  {
    id: "intimate-comfort-wash",
    name: "Intimate Comfort Wash",
    category: "Personal Wellness",
    price: 24,
    badge: "Gentle care",
    isNew: false,
    description: "A gentle, fragrance-free wash for your everyday care ritual. For external use only.",
    material: "200 ml · Fragrance-free · Vegan formula · External use only",
    sizes: [],
    colors: [{ name: "Clear", hex: "#d8c6b6" }],
    images: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=950&q=85",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=950&q=85",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=950&q=85"
    ]
  },
  {
    id: "petal-bralette",
    name: "Petal Everyday Bralette",
    category: "Bras",
    price: 42,
    badge: "",
    isNew: false,
    description: "A soft, wire-free favourite with a relaxed shape and the easy comfort of an everyday layer.",
    material: "Cotton-modal blend · Wire-free support · Adjustable straps",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [{ name: "Blush", hex: "#df9fa7" }, { name: "Ivory", hex: "#f0e5d7" }],
    images: [
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=950&q=85",
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=950&q=85",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=950&q=85"
    ]
  },
  {
    id: "velvet-slip",
    name: "Velvet Hour Slip",
    category: "Nightwear",
    price: 82,
    was: 96,
    badge: "A little luxury",
    isNew: false,
    description: "A fluid, easy-to-layer slip with a graceful line and adjustable straps for a personal fit.",
    material: "Recycled satin · Adjustable straps · Relaxed, bias-cut feel",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [{ name: "Midnight", hex: "#292228" }, { name: "Champagne", hex: "#c4a276" }],
    images: [
      "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=950&q=85",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=950&q=85",
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=950&q=85"
    ]
  }
];

const STORAGE_KEYS = { cart: "velvet-rose-cart-v1", wishlist: "velvet-rose-wishlist-v1" };
const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
const getProduct = id => PRODUCTS.find(product => product.id === id);
const formatMoney = amount => currency.format(amount);
let cart = readStorage(STORAGE_KEYS.cart, []);
let wishlist = readStorage(STORAGE_KEYS.wishlist, []);
let currentFilter = "All";
let currentSearch = "";
let selectedProduct = null;
let galleryIndex = 0;
let activeDiscount = 0;
let toastTimeout;

function readStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (error) {
    console.error(`Could not read ${key} from browser storage.`, error);
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Could not save ${key} to browser storage.`, error);
    notify("Your browser could not save this change. It will last only for this visit.");
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function notify(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function selectedProducts() {
  return PRODUCTS.filter(product => {
    const categoryMatches = currentFilter === "All"
      || (currentFilter === "New arrivals" ? product.isNew : product.category === currentFilter);
    const query = currentSearch.toLocaleLowerCase();
    const queryMatches = !query || `${product.name} ${product.category} ${product.description}`.toLocaleLowerCase().includes(query);
    return categoryMatches && queryMatches;
  });
}

function renderProducts() {
  const products = selectedProducts();
  const grid = document.getElementById("product-grid");
  document.getElementById("search-status").textContent =
    currentSearch ? `${products.length} ${products.length === 1 ? "piece" : "pieces"} found for “${currentSearch}”` : "";

  if (!products.length) {
    grid.innerHTML = '<p class="empty-products">Nothing found just yet. Try another search or explore all pieces.</p>';
    return;
  }

  grid.innerHTML = products.map(product => `
    <article class="product-card">
      <div class="product-photo">
        <img src="${product.images[0]}" alt="${escapeHTML(product.name)}" loading="lazy" data-fallback="true">
        ${product.badge ? `<span class="product-badge">${escapeHTML(product.badge)}</span>` : ""}
        <button class="product-heart" type="button" data-action="wishlist" data-id="${product.id}" aria-label="Save ${escapeHTML(product.name)} to wishlist" aria-pressed="${wishlist.includes(product.id)}">♡</button>
        <button class="product-quickview" type="button" data-action="view" data-id="${product.id}">View all three images</button>
      </div>
      <div class="product-meta">
        <p class="product-category">${escapeHTML(product.category)}</p>
        <h3 class="product-title">${escapeHTML(product.name)}</h3>
        <p class="product-price">${product.was ? `<s>${formatMoney(product.was)}</s>` : ""}${formatMoney(product.price)}</p>
        <div class="product-colors" aria-label="Available colors">
          ${product.colors.map(color => `<span class="swatch" title="${escapeHTML(color.name)}" style="background:${escapeHTML(color.hex)}"></span>`).join("")}
          <span class="product-size-note">${product.sizes.length ? `${product.sizes.length} sizes` : "One size"}</span>
        </div>
        <button class="button product-add" type="button" data-action="view" data-id="${product.id}">Choose options</button>
      </div>
    </article>
  `).join("");
  watchImages(grid);
}

function watchImages(scope) {
  scope.querySelectorAll("img").forEach(image => {
    image.addEventListener("error", () => {
      image.hidden = true;
      image.closest(".product-photo,.category-card,.story-image,.offer-section,.gallery-main")?.classList.add("image-unavailable");
    }, { once: true });
  });
}

function openProduct(id) {
  selectedProduct = getProduct(id);
  if (!selectedProduct) return;
  galleryIndex = 0;
  const sizeSelect = document.getElementById("detail-size");
  const sizeLabel = document.getElementById("size-label");
  sizeSelect.required = selectedProduct.sizes.length > 0;
  sizeSelect.innerHTML = selectedProduct.sizes.length
    ? `<option value="">Choose your size</option>${selectedProduct.sizes.map(size => `<option value="${escapeHTML(size)}">${escapeHTML(size)}</option>`).join("")}`
    : '<option value="One size">One size</option>';
  sizeSelect.hidden = !selectedProduct.sizes.length;
  sizeLabel.hidden = !selectedProduct.sizes.length;
  document.getElementById("detail-color").innerHTML =
    `<option value="">Choose a color</option>${selectedProduct.colors.map(color => `<option value="${escapeHTML(color.name)}">${escapeHTML(color.name)}</option>`).join("")}`;
  document.getElementById("detail-quantity").value = "1";
  document.getElementById("detail-category").textContent = selectedProduct.category;
  document.getElementById("detail-title").textContent = selectedProduct.name;
  document.getElementById("detail-price").innerHTML = `${selectedProduct.was ? `<s>${formatMoney(selectedProduct.was)}</s>` : ""}${formatMoney(selectedProduct.price)}`;
  document.getElementById("detail-description").textContent = selectedProduct.description;
  document.getElementById("detail-material").textContent = selectedProduct.material;
  document.getElementById("detail-wishlist").textContent = wishlist.includes(id) ? "♥ Saved to wishlist" : "♡ Save to wishlist";
  renderGallery();
  document.getElementById("product-dialog").showModal();
}

function renderGallery() {
  if (!selectedProduct) return;
  const image = document.getElementById("detail-image");
  image.src = selectedProduct.images[galleryIndex];
  image.alt = `${selectedProduct.name} — view ${galleryIndex + 1} of 3`;
  image.classList.remove("is-unavailable");
  image.onerror = () => {
    image.hidden = true;
    image.closest(".gallery-main")?.classList.add("image-unavailable");
  };
  image.hidden = false;
  document.getElementById("gallery-counter").textContent = `${galleryIndex + 1} / 3`;
  document.getElementById("gallery-thumbnails").innerHTML = selectedProduct.images.map((src, index) => `
    <button class="gallery-thumbnail ${index === galleryIndex ? "is-active" : ""}" type="button" data-gallery-index="${index}" aria-label="View product image ${index + 1}" aria-pressed="${index === galleryIndex}">
      <img src="${src}" alt="" loading="${index ? "lazy" : "eager"}">
    </button>
  `).join("");
  document.querySelectorAll(".gallery-thumbnail img").forEach(thumb => thumb.addEventListener("error", () => { thumb.hidden = true; }, { once: true }));
}

function moveGallery(direction) {
  if (!selectedProduct) return;
  galleryIndex = (galleryIndex + direction + selectedProduct.images.length) % selectedProduct.images.length;
  renderGallery();
}

function addToCart(product, size, color, quantity) {
  const key = `${product.id}|${size}|${color}`;
  const line = cart.find(item => item.key === key);
  if (line) line.quantity = Math.min(10, line.quantity + quantity);
  else cart.push({ key, id: product.id, size, color, quantity });
  writeStorage(STORAGE_KEYS.cart, cart);
  renderCart();
  document.getElementById("product-dialog").close();
  notify("Added to your bag. Beautifully chosen.");
}

function safeCart() {
  cart = (Array.isArray(cart) ? cart : []).filter(item => {
    if (!item || typeof item !== "object") return false;
    const product = getProduct(item.id);
    return product && Number.isInteger(item.quantity) && item.quantity > 0 && item.quantity <= 10
      && typeof item.color === "string" && typeof item.size === "string"
      && product.colors.some(color => color.name === item.color)
      && (!product.sizes.length || product.sizes.includes(item.size));
  }).map(item => ({ ...item, key: `${item.id}|${item.size}|${item.color}` }));
}

function renderCart() {
  safeCart();
  writeStorage(STORAGE_KEYS.cart, cart);
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").textContent = count;
  document.getElementById("cart-drawer-count").textContent = count ? `(${count})` : "";
  const lines = document.getElementById("cart-lines");
  lines.innerHTML = cart.length ? cart.map(item => {
    const product = getProduct(item.id);
    return `<article class="cart-line">
      <img src="${product.images[0]}" alt="${escapeHTML(product.name)}" data-fallback="true">
      <div><h3>${escapeHTML(product.name)}</h3><p>${item.size !== "One size" ? `Size ${escapeHTML(item.size)} · ` : ""}${escapeHTML(item.color)}</p>
      <div class="quantity-control"><button type="button" data-action="quantity" data-key="${escapeHTML(item.key)}" data-delta="-1" aria-label="Decrease quantity">−</button><span>${item.quantity}</span><button type="button" data-action="quantity" data-key="${escapeHTML(item.key)}" data-delta="1" aria-label="Increase quantity">+</button>
      <button class="remove-item" type="button" data-action="remove" data-key="${escapeHTML(item.key)}">Remove</button></div></div>
      <span class="cart-line-price">${formatMoney(product.price * item.quantity)}</span>
    </article>`;
  }).join("") : '<p class="cart-empty">Your bag is waiting for something lovely.</p>';
  watchImages(lines);
  const subtotal = cart.reduce((sum, item) => sum + getProduct(item.id).price * item.quantity, 0);
  const discount = Math.round(subtotal * activeDiscount * 100) / 100;
  const shipping = subtotal === 0 || subtotal >= 75 ? 0 : 6;
  document.getElementById("cart-subtotal").textContent = formatMoney(subtotal);
  document.getElementById("cart-shipping").textContent = subtotal === 0 || shipping === 0 ? (subtotal === 0 ? formatMoney(0) : "Complimentary") : formatMoney(shipping);
  document.getElementById("cart-discount-line").hidden = discount === 0;
  document.getElementById("cart-discount").textContent = `−${formatMoney(discount)}`;
  document.getElementById("cart-total").textContent = formatMoney(subtotal - discount + shipping);
  document.getElementById("checkout-total").textContent = formatMoney(subtotal - discount + shipping);
  document.getElementById("checkout-open").disabled = cart.length === 0;
}

function renderWishlist() {
  wishlist = (Array.isArray(wishlist) ? wishlist : []).filter(id => getProduct(id));
  writeStorage(STORAGE_KEYS.wishlist, wishlist);
  const target = document.getElementById("wishlist-items");
  target.innerHTML = wishlist.length ? wishlist.map(id => {
    const product = getProduct(id);
    return `<div class="wishlist-item"><span>${escapeHTML(product.name)} · ${formatMoney(product.price)}</span><button type="button" data-action="view" data-id="${product.id}">View</button></div>`;
  }).join("") : '<p class="cart-empty">Save a piece you love and it will be waiting here.</p>';
}

function toggleWishlist(id) {
  wishlist = wishlist.includes(id) ? wishlist.filter(saved => saved !== id) : [...wishlist, id];
  writeStorage(STORAGE_KEYS.wishlist, wishlist);
  renderProducts();
  renderWishlist();
  if (selectedProduct?.id === id) {
    document.getElementById("detail-wishlist").textContent = wishlist.includes(id) ? "♥ Saved to wishlist" : "♡ Save to wishlist";
  }
  notify(wishlist.includes(id) ? "Saved to your personal edit." : "Removed from your personal edit.");
}

function closeDialogsExcept(keep) {
  document.querySelectorAll("dialog[open]").forEach(dialog => {
    if (dialog !== keep) dialog.close();
  });
}

document.getElementById("product-grid").addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  if (button.dataset.action === "view") openProduct(button.dataset.id);
  if (button.dataset.action === "wishlist") toggleWishlist(button.dataset.id);
});

document.getElementById("gallery-thumbnails").addEventListener("click", event => {
  const button = event.target.closest("[data-gallery-index]");
  if (!button) return;
  galleryIndex = Number(button.dataset.galleryIndex);
  renderGallery();
});
document.querySelector(".gallery-previous").addEventListener("click", () => moveGallery(-1));
document.querySelector(".gallery-next").addEventListener("click", () => moveGallery(1));
document.getElementById("gallery-thumbnails").addEventListener("keydown", event => {
  if (event.key === "ArrowRight") moveGallery(1);
  if (event.key === "ArrowLeft") moveGallery(-1);
});
let touchStartX = 0;
document.querySelector(".gallery-main").addEventListener("touchstart", event => { touchStartX = event.changedTouches[0].screenX; }, { passive: true });
document.querySelector(".gallery-main").addEventListener("touchend", event => {
  const distance = event.changedTouches[0].screenX - touchStartX;
  if (Math.abs(distance) > 45) moveGallery(distance < 0 ? 1 : -1);
}, { passive: true });

document.getElementById("detail-add").addEventListener("click", () => {
  if (!selectedProduct) return;
  const size = document.getElementById("detail-size").value;
  const color = document.getElementById("detail-color").value;
  const quantity = Number(document.getElementById("detail-quantity").value);
  if (selectedProduct.sizes.length && !size) {
    document.getElementById("detail-size").focus();
    notify("Please choose a size to continue.");
    return;
  }
  if (!color) {
    document.getElementById("detail-color").focus();
    notify("Please choose a color to continue.");
    return;
  }
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
    document.getElementById("detail-quantity").focus();
    notify("Choose a quantity between 1 and 10.");
    return;
  }
  addToCart(selectedProduct, size || "One size", color, quantity);
});
document.getElementById("detail-wishlist").addEventListener("click", () => {
  if (selectedProduct) toggleWishlist(selectedProduct.id);
});

document.getElementById("cart-lines").addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  if (button.dataset.action === "quantity") {
    const line = cart.find(item => item.key === button.dataset.key);
    if (!line) return;
    line.quantity += Number(button.dataset.delta);
    if (line.quantity < 1) cart = cart.filter(item => item !== line);
    if (line.quantity > 10) line.quantity = 10;
    renderCart();
  }
  if (button.dataset.action === "remove") {
    cart = cart.filter(item => item.key !== button.dataset.key);
    renderCart();
  }
});

document.getElementById("discount-form").addEventListener("submit", event => {
  event.preventDefault();
  const code = document.getElementById("discount-code").value.trim().toUpperCase();
  const message = document.getElementById("discount-message");
  if (code === "ROSE10") {
    activeDiscount = .1;
    message.textContent = "A little treat: 10% has been applied.";
  } else {
    activeDiscount = 0;
    message.textContent = "That code isn't available. Try ROSE10.";
  }
  renderCart();
});

document.querySelectorAll("[data-open-cart]").forEach(button => button.addEventListener("click", () => {
  closeDialogsExcept(document.getElementById("cart-dialog"));
  document.getElementById("cart-dialog").showModal();
}));
document.querySelector(".wishlist-open").addEventListener("click", () => {
  renderWishlist();
  closeDialogsExcept(document.getElementById("wishlist-dialog"));
  document.getElementById("wishlist-dialog").showModal();
});
document.getElementById("checkout-open").addEventListener("click", () => {
  if (!cart.length) return;
  closeDialogsExcept(document.getElementById("checkout-dialog"));
  document.getElementById("checkout-result").hidden = true;
  document.getElementById("checkout-form").hidden = false;
  document.getElementById("checkout-dialog").showModal();
});

document.getElementById("checkout-form").addEventListener("submit", event => {
  event.preventDefault();
  const result = document.getElementById("checkout-result");
  result.textContent = "This was a checkout preview only. No order was placed and none of your details were sent or saved. A secure server connection is required before this store can accept orders.";
  result.hidden = false;
  event.currentTarget.reset();
  event.currentTarget.hidden = true;
});

document.querySelectorAll("[data-close-dialog]").forEach(button => button.addEventListener("click", () => button.closest("dialog").close()));
document.querySelectorAll("dialog").forEach(dialog => dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
}));

document.getElementById("filters").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  currentFilter = button.dataset.filter;
  document.querySelectorAll(".filter-chip").forEach(chip => chip.classList.toggle("is-active", chip === button));
  renderProducts();
});
document.querySelectorAll("[data-category]").forEach(link => link.addEventListener("click", () => {
  currentFilter = link.dataset.category;
  document.querySelectorAll(".filter-chip").forEach(chip => chip.classList.toggle("is-active", chip.dataset.filter === currentFilter));
  renderProducts();
}));
document.querySelectorAll("[data-filter-link]").forEach(link => link.addEventListener("click", () => {
  currentFilter = link.dataset.filterLink;
  document.querySelectorAll(".filter-chip").forEach(chip => chip.classList.toggle("is-active", chip.dataset.filter === currentFilter));
  renderProducts();
}));

const searchForm = document.getElementById("search-form");
document.querySelector(".search-open").addEventListener("click", () => {
  searchForm.hidden = !searchForm.hidden;
  if (!searchForm.hidden) document.getElementById("site-search").focus();
});
document.querySelector(".search-close").addEventListener("click", () => { searchForm.hidden = true; });
searchForm.addEventListener("submit", event => {
  event.preventDefault();
  currentSearch = document.getElementById("site-search").value.trim();
  currentFilter = "All";
  document.querySelectorAll(".filter-chip").forEach(chip => chip.classList.toggle("is-active", chip.dataset.filter === "All"));
  renderProducts();
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});

const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
  document.getElementById("primary-menu").classList.toggle("is-open", !isExpanded);
});
document.querySelectorAll("#primary-menu a").forEach(link => link.addEventListener("click", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  document.getElementById("primary-menu").classList.remove("is-open");
}));

document.getElementById("newsletter-form").addEventListener("submit", event => {
  event.preventDefault();
  event.currentTarget.reset();
  document.getElementById("newsletter-message").textContent = "Thank you for your interest. Newsletter sign-up is not connected, so your email was not stored or sent.";
});
document.getElementById("current-year").textContent = String(new Date().getFullYear());
watchImages(document);
renderProducts();
renderCart();
renderWishlist();
