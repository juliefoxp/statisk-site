const mycategory = new URLSearchParams(window.location.search).get("category");
console.log("productliste loader.. med category:", mycategory);

const productlist = document.querySelector(".product_list_container");
const overskrift = document.querySelector(".category_headline");

overskrift.innerHTML = mycategory;

fetch(`https://kea-alt-del.dk/t7/api/products?limit=100&category=${mycategory}`)
  .then((response) => response.json())
  .then(showProducts);

function showProducts(data) {
  console.log(data);
  markup = data
    .map(
      (element) =>
        `
      <div class="card_1 ${element.soldout ? "sold-out" : ""}">
  ${element.soldout ? '<span class="sold-out-label">SOLD OUT</span>' : ""}
   ${element.discount && element.discount > 0 ? '<span class="discount-label">-' + element.discount + "%</span>" : ""}
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="acc_1" /> 
          <h1>${element.productdisplayname}</h1>
          <p class="price"> Price: ${element.price}</p>
          <span class="original-price">Old Price: ${Math.floor(element.price / (1 - element.discount / 100))}</span>
          <p>Productyear: ${element.productionyear}</p>
          <p>Brand: ${element.brandname}</p>
          <p><a href="product.html?id=${element.id}" class="button">ADD TO BASKET</a></p>
        </div>`
    )
    .join("");
  console.log(markup);
  productlist.innerHTML = markup;
}
