import { getCategories, loadProducts, loadSingleProduct, addProduct } from "@/scripts/dataLoading.js";
import { setCategorySelect } from "@/modules/productList/categoryFilter/categoryFilter.js";
import { showProductCard } from "@/modules/productList//productCard/productCard.js";
import '@/modules/productList//productList.scss';
import { showMessage } from "@/modules/message/message.js";


const productList = document.getElementById("product-list");

let productsData = [];
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
    showMessage("error", "error loading data from API " + error);
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
        btn.innerHTML = "Load more";
      } else {
        btn.innerHTML = "No dta for loading";
      }
    }).catch(error => showMessage("error", error));
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

export async function addNewProduct(newProductData) {


  try {
    let response = await addProduct(newProductData);

    newProductData.id = response.id;
    let index = productsData.findIndex(prod => prod.id === newProductData.id);
    if (index === -1) index = productsData.length;

    productsData[index] = newProductData;
    filterProductList("category", categoryFilter);

    showMessage("success", `New product <strong>${newProductData.title}</strong> added.`);
  } catch (error) {
    showMessage("error", error);
  }

}

