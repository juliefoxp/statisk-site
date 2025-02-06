console.log("index script loaded");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then(showCategory);

function showCategory(data) {
  console.log("mine data er:", data);

  const markup = data
    .map(
      (element) => `
      <div class="apparel">
 <a href="productlist.html?category=${element.category}"><p>${element.category}</p></a>
 </div>
 `
    )
    .join("");

  console.log("min markup er", markup);
  document.querySelector(".category_list_container").innerHTML = markup;
}
