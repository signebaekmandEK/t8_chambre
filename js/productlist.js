const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const listURL = `https://dummyjson.com/products/category/${category}`;

const listContainer = document.querySelector(".productlist-container");
document.querySelector("h2").textContent = category ? category : "Products";

function getProducts() {
  fetch(listURL)
    .then((res) => res.json())
    .then((data) => {
      showProducts(data.products);
    })
    .catch((err) => console.error("Error fetching products:", err));
}

function showProducts(products) {
  console.log(products);
  listContainer.innerHTML = "";

  products.forEach((product) => {
    listContainer.innerHTML += `<article class="product-card">
                <img src="${product.thumbnail}" alt="${product.title}">
                <div class="product-indhold">
                    <h3>${product.brand}</h3>
                    <p class="price">Price: ${product.price} DKK</p>
                    <p class="size">Size: N/A</p>
                    <p class="color">...</p>
                </div>
                <br>
                <a class="productdetailsB" href="product.html?id=${product.id}">Buy</a>
            </article>`;
  });
}

getProducts();

/* filtrerting og sorting knapper 

/* const sortPriceBtnLh = document.querySelector("#sortPriceBtnLh");
const sortPriceBtnHl = document.querySelector("#sortPriceBtnHl");
const filterWomenBtn = document.querySelector("#filterWomenBtn"); */
