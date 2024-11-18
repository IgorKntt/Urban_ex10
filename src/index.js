//import { showProductCard } from "./modules/productCard/productCard.js";
import { initProductList, loadMoreProducts, setCategorySelect, addNewProduct } from "@/modules/productList/productList.js";
import { addProduct, deleteProduct, getCategories } from "@/scripts/dataLoading.js";
//import { loadProducts } from "./scripts/dataLoading.js";
import "@/styles/main.scss";
import { showHeader } from "@/modules/Header/header.js";
import { showFooter } from "@/modules/footer/footer.js";
import { showMessage } from "@/modules/message/message";


const btnLoadMore = document.getElementById('loadMoreProducts');
const btnDeleteProduct = document.getElementById('deleteProduct');
const btnAddProduct = document.getElementById('btnAddProduct');
const btnAddNewProduct = document.getElementById('btnAddNewProduct');
const btnCancelNewProduct = document.getElementById('btnCancelNewProduct');

const popup = document.querySelector('.popup');


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
console.dir(document.body);

console.log("loaded from index.js");

console.log("index.js code runs. Dev server and auto reload works");

btnLoadMore.addEventListener("click", (event) => {
  loadMoreProducts(event.target);
  event.target.setAttribute('disabled', '');
  event.target.textContent = 'Loading...';
});


//btnLoadMore.addEventListener("click", loadMoreProducts)

btnAddProduct.addEventListener("click", () => {
  popup.style = "";
})

btnDeleteProduct.addEventListener("click", () => {
  deleteProduct(10);
  //showMessage("error", "product deletion");

});


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
    //  alert(newProductData[prop]);
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









