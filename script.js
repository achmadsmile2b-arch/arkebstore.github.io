const products = [
  { brand: "Samsung", model: "Galaxy S24", price: 12000000, img: "https://i.imgur.com/qYZzv7F.jpg" },
  { brand: "iPhone", model: "iPhone 15 Pro", price: 22000000, img: "https://i.imgur.com/Fk7lYyO.jpg" },
  { brand: "Xiaomi", model: "Redmi Note 13 Pro", price: 5500000, img: "https://i.imgur.com/nR1yqZL.jpg" },
  { brand: "Oppo", model: "Reno 12", price: 6800000, img: "https://i.imgur.com/FSS7pZx.jpg" },
  { brand: "Vivo", model: "V30", price: 6700000, img: "https://i.imgur.com/ZG7vYCU.jpg" },
  { brand: "Infinix", model: "Zero 30", price: 4200000, img: "https://i.imgur.com/Nh1xltx.jpg" },
  { brand: "Realme", model: "Realme 12 Pro", price: 6100000, img: "https://i.imgur.com/AMIGtZx.jpg" },
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
