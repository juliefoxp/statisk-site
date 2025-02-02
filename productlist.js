const product_list_container = document.querySelector(".product_list_container");
fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));
function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += `
        <div class="card_1">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="acc_1" /> 
          <h1>${product.productdisplayname}</h1>
          <p class="price"> Price: ${product.price}</p>
          <p>Productyear: ${product.productionyear}</p>
          <p>Brand: ${product.brandname}</p>
          <p><a href="product.html" class="button">Buy</a></p>
        </div>`;
    })
    .join("");
  console.log(markup);
  product_list_container.innerHTML = markup;
}
