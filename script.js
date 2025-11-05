// === Koleksi HP Terbaru ArkebStore ===
const products = [
  // 📱 SAMSUNG
  { brand: "Samsung", model: "Galaxy S24 Ultra", price: 18999000, img: "https://images.samsung.com/is/image/samsung/p6pim/id/galaxy-s24/gallery/id-galaxy-s24-ultra-sm-s928bzkexid-thumb-539828203?$684_547_PNG$" },
  { brand: "Samsung", model: "Galaxy S24+", price: 15999000, img: "https://images.samsung.com/is/image/samsung/p6pim/id/galaxy-s24/gallery/id-galaxy-s24plus-sm-s926bzkexid-thumb-539828202?$684_547_PNG$" },
  { brand: "Samsung", model: "Galaxy A55 5G", price: 6799000, img: "https://images.samsung.com/is/image/samsung/p6pim/id/2403/gallery/id-galaxy-a55-sm-a556blbaxid-thumb-539854179?$684_547_PNG$" },
  { brand: "Samsung", model: "Galaxy A35 5G", price: 4999000, img: "https://images.samsung.com/is/image/samsung/p6pim/id/2403/gallery/id-galaxy-a35-sm-a356blbaxid-thumb-539854170?$684_547_PNG$" },
  { brand: "Samsung", model: "Galaxy M15 5G", price: 2799000, img: "https://images.samsung.com/is/image/samsung/p6pim/id/2403/gallery/id-galaxy-m15-5g-sm-m156bzbxid-thumb-539845121?$684_547_PNG$" },

  // 🍎 IPHONE
  { brand: "iPhone", model: "iPhone 15 Pro Max", price: 24999000, img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-finish-select-202309-6-7inch-black-titanium" },
  { brand: "iPhone", model: "iPhone 15 Pro", price: 21999000, img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-black-titanium" },
  { brand: "iPhone", model: "iPhone 15 Plus", price: 18999000, img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-plus-finish-select-202309-6-7inch-blue" },
  { brand: "iPhone", model: "iPhone 15", price: 16999000, img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue" },
  { brand: "iPhone", model: "iPhone SE (3rd Gen)", price: 6999000, img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202203-midnight" },

  // 🔥 XIAOMI
  { brand: "Xiaomi", model: "Redmi Note 13 Pro+", price: 5999000, img: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-pro-plus-1.jpg" },
  { brand: "Xiaomi", model: "Redmi Note 13 Pro", price: 5499000, img: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-pro-1.jpg" },
  { brand: "Xiaomi", model: "Redmi Note 13", price: 3799000, img: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-1.jpg" },
  { brand: "Xiaomi", model: "Redmi 13C", price: 1699000, img: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-13c-1.jpg" },
  { brand: "Xiaomi", model: "Poco X6 Pro 5G", price: 4699000, img: "https://fdn2.gsmarena.com/vv/pics/poco/poco-x6-pro-1.jpg" },

  // 🟣 OPPO
  { brand: "Oppo", model: "Reno 12 Pro 5G", price: 6499000, img: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-reno12-pro-1.jpg" },
  { brand: "Oppo", model: "Reno 12 5G", price: 5799000, img: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-reno12-1.jpg" },
  { brand: "Oppo", model: "A79 5G", price: 3299000, img: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-a79-5g-1.jpg" },
  { brand: "Oppo", model: "A38", price: 1899000, img: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-a38-1.jpg" },
  { brand: "Oppo", model: "A18", price: 1799000, img: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-a18-1.jpg" },

  // 🔵 VIVO
  { brand: "Vivo", model: "V30 Pro 5G", price: 7499000, img: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v30-pro-1.jpg" },
  { brand: "Vivo", model: "V30 5G", price: 6599000, img: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v30-1.jpg" },
  { brand: "Vivo", model: "Y100 5G", price: 3899000, img: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-y100-5g-1.jpg" },
  { brand: "Vivo", model: "Y27s", price: 2499000, img: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-y27s-1.jpg" },
  { brand: "Vivo", model: "Y18", price: 1999000, img: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-y18-1.jpg" },

  // 🟢 INFINIX
  { brand: "Infinix", model: "Zero 30 5G", price: 4199000, img: "https://fdn2.gsmarena.com/vv/pics/infinix/infinix-zero-30-5g-1.jpg" },
  { brand: "Infinix", model: "Note 40 Pro 5G", price: 3499000, img: "https://fdn2.gsmarena.com/vv/pics/infinix/infinix-note-40-pro-5g-1.jpg" },
  { brand: "Infinix", model: "Hot 40 Pro", price: 2399000, img: "https://fdn2.gsmarena.com/vv/pics/infinix/infinix-hot-40-pro-1.jpg" },
  { brand: "Infinix", model: "Smart 8", price: 1299000, img: "https://fdn2.gsmarena.com/vv/pics/infinix/infinix-smart-8-1.jpg" },
  { brand: "Infinix", model: "GT 20 Pro", price: 3899000, img: "https://fdn2.gsmarena.com/vv/pics/infinix/infinix-gt-20-pro-1.jpg" },

  // 🟡 REALME
  { brand: "Realme", model: "12 Pro+ 5G", price: 7299000, img: "https://fdn2.gsmarena.com/vv/pics/realme/realme-12-pro-plus-5g-1.jpg" },
  { brand: "Realme", model: "12 Pro 5G", price: 6199000, img: "https://fdn2.gsmarena.com/vv/pics/realme/realme-12-pro-5g-1.jpg" },
  { brand: "Realme", model: "C67 4G", price: 2499000, img: "https://fdn2.gsmarena.com/vv/pics/realme/realme-c67-4g-1.jpg" },
  { brand: "Realme", model: "11 Pro+", price: 4999000, img: "https://fdn2.gsmarena.com/vv/pics/realme/realme-11-pro-plus-1.jpg" },
  { brand: "Realme", model: "C53", price: 1999000, img: "https://fdn2.gsmarena.com/vv/pics/realme/realme-c53-1.jpg" },

  // 🔵 TECNO
  { brand: "Tecno", model: "Camon 30 Pro 5G", price: 3599000, img: "https://fdn2.gsmarena.com/vv/pics/tecno/tecno-camon-30-pro-5g-1.jpg" },
  { brand: "Tecno", model: "Camon 30", price: 2999000, img: "https://fdn2.gsmarena.com/vv/pics/tecno/tecno-camon-30-1.jpg" },
  { brand: "Tecno", model: "Pova 6 Pro", price: 3199000, img: "https://fdn2.gsmarena.com/vv/pics/tecno/tecno-pova-6-pro-1.jpg" },
  { brand: "Tecno", model: "Spark 20 Pro", price: 1899000, img: "https://fdn2.gsmarena.com/vv/pics/tecno/tecno-spark-20-pro-1.jpg" },
  { brand: "Tecno", model: "Spark 20C", price: 1499000, img: "https://fdn2.gsmarena.com/vv/pics/tecno/tecno-spark-20c-1.jpg" },

  // 🟠 POCO
  { brand: "Poco", model: "Poco F6 Pro", price: 7999000, img: "https://fdn2.gsmarena.com/vv/pics/poco/poco-f6-pro-1.jpg" },
  { brand: "Poco", model: "Poco F6", price: 6299000, img: "https://fdn2.gsmarena.com/vv/pics/poco/poco-f6-1.jpg" },
  { brand: "Poco", model: "Poco X6 Pro", price: 4699000, img: "https://fdn2.gsmarena.com/vv/pics/poco/poco-x6-pro-1.jpg" },
  { brand: "Poco", model: "Poco X6", price: 4199000, img: "https://fdn2.gsmarena.com/vv/pics/poco/poco-x6-1.jpg" },
  { brand: "Poco", model: "Poco M6 Pro", price: 2699000, img: "https://fdn2.gsmarena.com/vv/pics/poco/poco-m6-pro-1.jpg" },
];

// === RENDER PRODUK ===
const container = document.getElementById("products");
function renderProducts(list) {
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.img}" alt="${p.model}">
        <h3>${p.brand} ${p.model}</h3>
        <p>Rp ${p.price.toLocaleString("id-ID")}</p>
        <button onclick="openPopup('${p.brand} ${p.model}')">Beli Sekarang</button>
      </div>`;
  });
}

// === FITUR PENCARIAN ===
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
cancelBtn.addEventListener("click", () => (popup.style.display = "none"));
confirmBtn.addEventListener("click", () => {
  popup.style.display = "none";

  // Ambil data produk yang dipilih
  const product = products.find(p => `${p.brand} ${p.model}` === selectedProduct);

  if (!product) {
    alert("Produk tidak ditemukan!");
    return;
  }

  // Buat order_id acak
  const orderId = "ORD" + Date.now();

  // Arahkan ke server iPaymu dengan data lengkap
  const params = new URLSearchParams({
    order_id: orderId,
    product: product.model,
    amount: product.price
  });

  window.location.href = `https://ipaymu-shopify.onrender.com/pay?${params.toString()}`;
});
