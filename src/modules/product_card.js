export function showProductCard(productData, parent) {
  let productCard = document.createElement("div");
  productCard.className = 'productCard';
  productCard.dataset.productId = productData.id;

  productCard.innerHTML = `<img class="productCard-img" src="${productData.image}" alt="image">
    <h3 class="productCard-title">${productData.title}</h3>
    <p class="productCard-category">${productData.category}</p>
    <p class="productCard-price">${productData.price}</p>`;

  parent.appendChild(productCard);
}

