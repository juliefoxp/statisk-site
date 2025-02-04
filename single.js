const productContainer = document.querySelector(".productContainer");
let productId = new URLSearchParams(window.location.search).get("id");

console.log(productId);

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
   
       <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp"
        alt="light blue water bottle" />
        <div class="product-details">
          <h1> ${data.productdisplayname}</h1>
          <p>Pris: ${data.price}</p> 
          <p>Brand: ${data.category}</p>
          <button>ADD TO BASKET</button>
  
      `;
  });
