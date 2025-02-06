const productContainer = document.querySelector(".productContainer");
let productId = new URLSearchParams(window.location.search).get("id");

console.log(productId);

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
   
       <img class="product_img" src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp"
        alt="light blue water bottle" />
        <div class="product-details">
          <h1> ${data.productdisplayname}</h1>
          <p>Pris: ${data.price}</p> 
          <p>Brand: ${data.category}</p>
          <div class="size-buttons">
  <button class="size-button">Small</button>
  <button class="size-button">Medium</button>
  <button class="size-button">Large</button>
</div>
          <button>ADD TO BASKET</button>
  
      `;
  });
