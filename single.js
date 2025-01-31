const productContainer = document.querySelector(".productContainer");
const productId = 1163;
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
    <h1>PRODUCT INFORMATION</h1>
      <div class="productContainer">
        <div class="product-image">
       <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp"
        alt="light blue water bottle" />
        </div>
        <div class="product-details">
          <h1> ${data.productdisplayname}</h1>
          <p>Pris: ${data.price}</p> 
          <p>Brand: ${data.category}</p>
          <p>Product details: Light blue, 500 ml vandflaske.</p>
          <button>ADD TO BASKET</button>
        </div>
      </div>
      `;
  });
