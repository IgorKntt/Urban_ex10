import { getCategories, loadProducts, loadSingleProduct } from "../../scripts/dataLoading.js";
import { showProductCard } from "../productCard/productCard.js";
import './productList.scss';

const productList = document.getElementById("product-list");

let productsData = [];

let categoryFilter = '';

/*let categories = getCategories().then(value => {
  console.log("Categories loaded in Product list module", value);
  return value;

});*/


export async function setCategorySelect() {
  let categorySelect = document.createElement('div');
  categorySelect.className = 'productList__categories';
  categorySelect.setAttribute('id', 'productList__categories');

  getCategories().then(value => showCategorySelect(value, categorySelect));

}

function showCategorySelect(selectData, elem) {
  let categories = '<option value="">--Show all products--</option>';

  selectData.forEach(category => {
    categories = categories + `<option value="${category}">
        ${category}
      </option>`;
  });

  let categorySelect = `<label for="productList__select">
      Show products filtered by category:
    </label>
    <select name="productList__select" id="productList__select">
      ${categories};
    </select>`;

  elem.innerHTML = categorySelect;

  //console.log(categorySelect);
  productList.parentNode.prepend(elem);
  elem.addEventListener('change',
    (event) => filterProductList('category', event.target.value));
}

//let result = loadProducts(6);
export function initProductList() {

  let result = loadProducts(6);

  result.then((res) => {
    res.forEach((productData) => {
      showProductCard(productData, productList);
      productsData.push(productData);
    });
    console.log('productsData:', productsData);
  }).catch(error => {
    console.log('error loading data from API', error);
  })
}

export function loadMoreProducts() {

  console.log("load more products called");

  if (productsData.length >= 20) return;

  const loadCount = Math.min(6, 20 - productsData.length);
  let productIdArr = new Array(loadCount).fill()
    .map((_, i) => productsData.length + i + 1);

  Promise.allSettled(productIdArr.map(id => loadSingleProduct(id)))
    .then(results => {
      results.forEach((productData) => {
        if (!productData ?? productData.status !== 'fulfilled') return;

        productsData.push(productData.value);

        if (categoryFilter === '') {
          showProductCard(productData.value, productList);
        } else if (productData.value.category === categoryFilter) {
          showProductCard(productData.value, productList);
        }
      });
    }).catch(error => console.log(error));
}

export function filterProductList(filterBy, value) {
  let filteredProducts;
  productList.innerHTML = '';
  categoryFilter = value;

  if (value !== '') {
    filteredProducts = productsData.filter(prod => prod[filterBy] === value);
  } else {
    filteredProducts = productsData;
  }

  filteredProducts.forEach(prod => showProductCard(prod, productList));
}


