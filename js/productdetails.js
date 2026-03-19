const params = new URLSearchParams(window.location.search);
const id = params.get("id");
// const id = 11;

const productURL = "https://dummyjson.com/products/" + id;
const productcontainer = document.querySelector(".produkt-kort");

function getData() {
  fetch(productURL)
    .then((res) => res.json())
    .then((data) => show(data));
}

function show(data) {
  console.log(data);
  productcontainer.innerHTML = `
            <div class="venstre-side">
                <h2 class="furniture">Furniture</h2>
                <p>Hjem / Produkter / Furniture / Bruno BookCase</p>
                <img class="produkt-billede" src="${data.thumbnail}" alt="Bruno BookCase">
                <div class="thumbnails" <img class="thumbnail" src="billeder/natbord1 1.webp" alt="Bruno BookCase">
                    <img class="thumbnail" src="${data.images[0]}" alt="Bruno BookCase">
                    <img class="thumbnail" src="${data.images[1]}" alt="Bruno BookCase">
                    <img class="thumbnail" src="${data.images[2]}" alt="Bruno BookCase">
                </div>
            </div>
            <div class="højre-side">
                <h2>${data.title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur
                    efficitur. Sed at felis a enim efficitur commodo. Curabitur ac ligula id odio bibendum
                    fermentum. Nulla facilisi. Donec ut ex nec nisl convallis tincidunt. In hac habitasse platea
                    dictumst.</p>
                <p class="pris">Price: ${data.price}</p>
                <p class="farve">color: </p>
                <img class="farvevalg" src="SVG/farvevalg.svg"
                    alt="Eksisterende farver du kan vælge imellem til din Bruno BookCase">
                <button class="cta_wishlist">Add to wishlist</button>
                <button class="cta_cart">Add to cart</button>
            </div>
 `;
}

getData();
