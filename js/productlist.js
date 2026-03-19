const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const listURL = category ? `https://dummyjson.com/products/category/${category}` : "https://dummyjson.com/products";

const listContainer = document.querySelector(".productlist-container");
document.querySelector("h2").textContent = category ? category : "Products";

let allProducts = [];
// SortBy buttons
const sortPriceBtnLh = document.querySelector("#sortPriceBtnLh");
const sortPriceBtnHl = document.querySelector("#sortPriceBtnHl");
// filterbtn
const discountBtn = document.getElementById("filterDiscountBtn");
let discountActive = false;

function getProducts() {
  fetch(listURL)
    .then((res) => res.json())
    .then((data) => {
      allProducts = data.products;
      showProducts(allProducts);
    })
    .catch((err) => console.error("Error fetching products:", err));
}

function showProducts(products) {
  console.log(products);
  listContainer.innerHTML = "";

  products.forEach((product) => {
    listContainer.innerHTML += ` <article class="product-card">
                <img src="${product.thumbnail}" alt="${product.title}">
                <div class="product-indhold">
                    <h3>${product.brand}</h3>
                    <p class="price">Price: ${product.price} DKK</p>
                    <p class="color">Color:</p>
                    <img class="farvevalg" src="SVG/farvevalg.svg" alt="Eksisterende farver du kan vælge imellem til din Bruno BookCase">
                     <p class="size">Size: N/A</p>
                </div>
                <br>
                <a class="productdetailsB" href="productdetails.html?id=${product.id}">Buy</a>
                  </article>`;
  });
}
// Price Low to High
function sortByPriceAsc() {
  const sorted = [...allProducts].sort((a, b) => a.price - b.price);
  showProducts(sorted);
}
sortPriceBtnLh.addEventListener("click", sortByPriceAsc);

function sortByPriceDesc() {
  const sorted = [...allProducts].sort((a, b) => b.price - a.price);
  showProducts(sorted);
}

sortPriceBtnHl.addEventListener("click", sortByPriceDesc);

// filter
discountBtn.addEventListener("click", () => {
  if (discountActive) {
    discountActive = false;
  } else {
    discountActive = true;
  }
  discountBtn.classList.toggle("active");

  let filteredProducts = allProducts;
  if (discountActive) {
    filteredProducts = allProducts.filter((p) => p.discountPercentage);
  }

  showProducts(filteredProducts);
});
getProducts();
