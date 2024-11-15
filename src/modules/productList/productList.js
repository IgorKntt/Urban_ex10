import { getCategories, loadProducts, loadSingleProduct } from "@/scripts/dataLoading.js";
import { setCategorySelect } from "@/modules/productList/categoryFilter/categoryFilter.js";
import { showProductCard } from "@/modules/productList//productCard/productCard.js";
import '@/modules/productList//productList.scss';

const productList = document.getElementById("product-list");

let productsData = [];


/*let categories = getCategories().then(value => {
  console.log("Categories loaded in Product list module", value);
  return value;

});*/

let categoryFilter = '';


export async function initProductList() {
  try {
    let result = await loadProducts(6);
    console.log(result);

    result.forEach(prod => {
      showProductCard(prod, productList);
      productsData.push(prod);
    });
    setCategorySelect(productList);
  } catch (error) {
    console.log('error loading data from API', error);
  }

}

export function loadMoreProducts(btn) {

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

      });

      filterProductList("category", categoryFilter)

      if (productsData.length < 20) {
        btn.removeAttribute('disabled');
        btn.innerHTML = "Загрузить еще";
      } else {
        btn.innerHTML = "Нет данных для загрузки";
      }
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


