//import { showProductCard } from "./modules/productCard/productCard.js";
import { initProductList, loadMoreProducts, setCategorySelect } from "@/modules/productList/productList.js";
import { addProduct, deleteProduct, getCategories } from "@/scripts/dataLoading.js";
//import { loadProducts } from "./scripts/dataLoading.js";
import "@/styles/main.scss";
import { showHeader } from "@/modules/Header/header.js";
import { showFooter } from "@/modules/footer/footer.js";

const btnLoadMore = document.getElementById('loadMoreProducts');
const btnDeleteProduct = document.getElementById('deleteProduct');
const btnAddProduct = document.getElementById('addProduct');

const sampleProductData = {
  title: 'test product',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic'
}

showHeader();

initProductList();
//getCategories();
showFooter();

console.log("loaded from index.js");

console.log("index.js code runs. Dev server and auto reload works");

btnLoadMore.addEventListener("click", (event) => {
  loadMoreProducts(event.target);
  event.target.setAttribute('disabled', '');
  event.target.textContent = 'Загрузка...';
});


//btnLoadMore.addEventListener("click", loadMoreProducts)

btnDeleteProduct.addEventListener("click", () => deleteProduct(10));
btnAddProduct.addEventListener("click", () => addProduct(sampleProductData));









