import { getCategories, loadProducts, loadSingleProduct } from "../../scripts/dataLoading.js";
import { showProductCard } from "../productCard/productCard.js";
import './productList.scss';

const productList = document.getElementById("product-list");


let productsData = [];

let categories = getCategories().then(value => {
  console.log("Categories loaded in Product list module", value);
  return value;

});


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

  if (productsData.length >= 20) return;

  const loadCount = Math.min(6, 20 - productsData.length);
  let productIdArr = new Array(loadCount).fill()
    .map((_, i) => productsData.length + i + 1);

  Promise.allSettled(productIdArr.map(id => loadSingleProduct(id)))
    .then(results => {
      results.forEach((productData) => {
        if (productData && productData.status == 'fulfilled') {
          showProductCard(productData.value, productList);
          productsData.push(productData.value);
        }
      });
    }).catch(error => console.log(error));
}


