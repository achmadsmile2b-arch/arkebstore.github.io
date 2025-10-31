const products = [
  { brand: "Samsung", model: "Galaxy S24", price: 12000000, img: "https://images.samsung.com/is/image/samsung/p6pim/id/sm-s921bzkdxid/gallery/id-galaxy-s24-sm-s921-483418-sm-s921bzkdxid-537275222?$650_519_PNG$" },
  { brand: "iPhone", model: "iPhone 15 Pro", price: 22000000, img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium" },
  { brand: "Xiaomi", model: "Redmi Note 13 Pro", price: 5500000, img: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-pro-5g-1.jpg" },
  { brand: "Oppo", model: "Reno 12", price: 6800000, img: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-reno12-1.jpg" },
  { brand: "Vivo", model: "V30", price: 6700000, img: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v30-1.jpg" },
  { brand: "Infinix", model: "Zero 30", price: 4200000, img: "https://fdn2.gsmarena.com/vv/pics/infinix/infinix-zero-30-1.jpg" },
  { brand: "Realme", model: "Realme 12 Pro", price: 6100000, img: "https://fdn2.gsmarena.com/vv/pics/realme/realme-12-pro-plus-1.jpg" },
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
        <button onclick="window.location.href='https://ipaymu-shopify.onrender.com?product=${p.model}'">Beli Sekarang</button>
      </div>`;
  });
}

document.getElementById("search").addEventListener("input", e => {
  const val = e.target.value.toLowerCase();
  const filtered = products.filter(p =>
    p.brand.toLowerCase().includes(val) ||
    p.model.toLowerCase().includes(val)
  );
  renderProducts(filtered);
});

renderProducts(products);
