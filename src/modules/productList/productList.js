import { loadProducts } from "../../scripts/dataLoading.js";
import { showProductCard } from "../productCard/productCard.js";
//import { loadProducts } from "./scripts/dataLoading.js";
import './productList.scss';

const productList = document.getElementById("product-list");

//let result = loadProducts(6);
export function initProductList() {

  let result = loadProducts(6);

  result.then((res) => {
    res.forEach((data) => {
      showProductCard(data, productList);
    })
  }).catch(error => {
    console.log('error loading data from API', error)
  })
}
