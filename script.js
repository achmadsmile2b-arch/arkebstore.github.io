const products = [
  { brand: "Samsung", model: "Galaxy S24", price: 12000000, img: "https://images.samsung.com/is/image/samsung/p6pim/id/2401/gallery/id-galaxy-s24-s921-sm-s921bzkdxid-thumb-539189882" },
  { brand: "iPhone", model: "iPhone 15 Pro", price: 22000000, img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-blue-titanium-select-2023" },
  { brand: "Xiaomi", model: "Redmi Note 13 Pro", price: 5500000, img: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-pro-1.jpg" },
  { brand: "Oppo", model: "Reno 12", price: 6000000, img: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-reno12-pro-1.jpg" },
  { brand: "Vivo", model: "V30", price: 6700000, img: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v30-1.jpg" },
  { brand: "Infinix", model: "Zero 30", price: 4200000, img: "https://fdn2.gsmarena.com/vv/pics/infinix/infinix-zero-30-5g-1.jpg" },
  { brand: "Realme", model: "Realme 12 Pro", price: 7300000, img: "https://fdn2.gsmarena.com/vv/pics/realme/realme-12-pro-plus-5g-1.jpg" },
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
        <button class="buy-btn" data-model="${p.model}" data-price="${p.price}">Beli Sekarang</button>
      </div>
    `;
  });

  // === Event listener tombol beli ===
  document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      const model = e.target.dataset.model;
      const price = e.target.dataset.price;

      const orderData = {
        order_id: Date.now(),
        buyerName: "Pelanggan Arkebstore",
        buyerEmail: "email@contoh.com",
        buyerPhone: "08123456789",
        buyerAddress: "Alamat pelanggan",
        amount: price
      };

      try {
        const response = await fetch("https://ipaymu-shopify.onrender.com/pay", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData)
        });

        if (response.redirected) {
          window.location.href = response.url; // redirect ke halaman pembayaran iPaymu
        } else {
          alert("Gagal membuat link pembayaran iPaymu.");
        }
      } catch (err) {
        alert("Terjadi kesalahan koneksi ke server iPaymu.");
        console.error(err);
      }
    });
  });
}

// === Fitur pencarian produk ===
document.getElementById("search").addEventListener("input", e => {
  const val = e.target.value.toLowerCase();
  const filtered = products.filter(p =>
    p.brand.toLowerCase().includes(val) ||
    p.model.toLowerCase().includes(val)
  );
  renderProducts(filtered);
});

// === Render awal ===
renderProducts(products);
