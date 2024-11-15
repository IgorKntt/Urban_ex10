import './productCard.scss'

export function showProductCard(productData, parent) {

  let productCard = document.createElement("div");
  productCard.className = 'productCard';
  productCard.dataset.productId = productData.id;

  productCard.innerHTML = `<div class="productCard__imgContainer">
      <img class="productCard__img" src="${productData.image}" alt="image">
    </div>
    <div class="productCard__info">
      <h3 class="productCard__title">${productData.title}</h3>
      <p class="productCard__category">${productData.category}</p>
      <p class="productCard__price">${productData.price}</p>
    </div>`;

  parent.appendChild(productCard);

}

