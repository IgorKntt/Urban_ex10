//import { showProductCard } from "./modules/productCard/productCard.js";
import { initProductList, loadMoreProducts, setCategorySelect, addNewProduct } from "@/modules/productList/productList.js";
import { addProduct, deleteProduct, getCategories } from "@/scripts/dataLoading.js";
//import { loadProducts } from "./scripts/dataLoading.js";
import "@/styles/main.scss";
import { showHeader } from "@/modules/Header/header.js";
import { showFooter } from "@/modules/footer/footer.js";
import { showMessage } from "@/modules/message/message";


const btnLoadMore = document.getElementById('loadMoreProducts');
const btnAddProduct = document.getElementById('btnAddProduct');
const btnAddNewProduct = document.getElementById('btnAddNewProduct');
const btnCancelNewProduct = document.getElementById('btnCancelNewProduct');

const popup = document.querySelector('.popup');


showHeader();

initProductList();
//getCategories();
showFooter();

btnLoadMore.addEventListener("click", (event) => {
  loadMoreProducts(event.target);
  event.target.setAttribute('disabled', '');
  event.target.textContent = 'Loading...';
});


btnAddProduct.addEventListener("click", () => {
  popup.style = "";
})

btnAddNewProduct.addEventListener("click", (event) => {
  event.preventDefault();
  const form = document.forms.newProduct;

  const newProductData = {
    title: form.newProductName.value,
    category: form.newProductCategory.value,
    price: form.newProductPrice.value,
    image: form.newProductImage.value
  }

  for (let prop in newProductData) {
    if (newProductData[prop] === "") {
      alert("Все поля формы должны быть заполнены");
      return
    }
  }

  addNewProduct(newProductData);

  //clear form
  form.newProductName.value = "";
  form.newProductCategory.value = "";
  form.newProductPrice.value = "";
  form.newProductImage.value = "";

  //hide popup,
  popup.style = "display:none";
});

btnCancelNewProduct.addEventListener("click", (event) => {
  event.preventDefault();
  const form = document.forms.newProduct;

  //clear form
  form.newProductName.value = "";
  form.newProductCategory.value = "";
  form.newProductPrice.value = "";
  form.newProductImage.value = "";

  //hide popup, clear form;
  popup.style = "display:none";
});









