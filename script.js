const products = [
  { brand: "Samsung", model: "Galaxy S24", price: 12000000, img: "https://images.samsung.com/is/image/samsung/p6pim/id/galaxy-s24/gallery/id-galaxy-s24-s925-sm-s925blbqxid-thumb-539828205?$684_547_PNG$" },
  { brand: "iPhone", model: "iPhone 15 Pro", price: 22000000, img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-black-titanium" },
  { brand: "Xiaomi", model: "Redmi Note 13 Pro", price: 5500000, img: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-pro-1.jpg" },
  { brand: "Oppo", model: "Reno 12", price: 6000000, img: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-reno12-1.jpg" },
  { brand: "Vivo", model: "V30", price: 6700000, img: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v30.jpg" },
  { brand: "Infinix", model: "Zero 30", price: 4200000, img: "https://fdn2.gsmarena.com/vv/pics/infinix/infinix-zero30-1.jpg" },
  { brand: "Realme", model: "Realme 12 Pro", price: 7300000, img: "https://fdn2.gsmarena.com/vv/pics/realme/realme-12-pro.jpg" }
];

const container = document.getElementById("products");

function renderProducts(list) {
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.img}" alt="${p.model}">
        <h3>${p.brand} ${p.model}</h3>
        <p>Rp ${p.price.toLocaleString("id-ID")}</p>
        <button onclick="openPopup('${p.model}')">Beli Sekarang</button>
      </div>
    `;
  });
}

document.getElementById("search").addEventListener("input", e => {
  const val = e.target.value.toLowerCase();
  const filtered = products.filter(p =>
    p.brand.toLowerCase().includes(val) || p.model.toLowerCase().includes(val)
  );
  renderProducts(filtered);
});

renderProducts(products);

// === POPUP KONFIRMASI ===
const popup = document.getElementById("popup");
const popupMsg = document.getElementById("popup-message");
const confirmBtn = document.getElementById("confirm-btn");
const cancelBtn = document.getElementById("cancel-btn");
let selectedProduct = null;

function openPopup(model) {
  selectedProduct = model;
  popupMsg.textContent = `Yakin ingin melanjutkan ke pembayaran untuk ${model}?`;
  popup.style.display = "flex";
}

cancelBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

confirmBtn.addEventListener("click", () => {
  popup.style.display = "none";
  window.location.href = `https://ipaymu-shopify.onrender.com/pay?product=${selectedProduct}`;
});
