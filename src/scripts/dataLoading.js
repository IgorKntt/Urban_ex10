import { showMessage } from "@/modules/message/message.js";

export async function loadProducts(limit) {
  let url = 'https://fakestoreapi.com/products';

  if (!isNaN(+limit)) {
    url = url + `?limit=${limit}`;
  }

  try {
    console.log("Sending fetch request");
    let result = await fetch(url);
    if (!result.ok) throw new Error("Network error");
    console.log("loading data product data");
    let value = await result.json();
    console.log("Product data loaded. ", value);
    return value;

  } catch (error) {
    showMessage("error", "Error loading products " + error);
  }
}


export async function loadSingleProduct(productId) {
  let url = `https://fakestoreapi.com/products/${productId}`;

  try {
    console.log("Sending fetch request");
    let result = await fetch(url);
    if (!result.ok) throw new Error('Network problem. ');

    console.log("loading product data");
    let value = await result.json();
    console.log("Product data loaded. ", value);
    return value;

  } catch (error) {
    showMessage("error", "Error loading products data " + error);
  }
}

export async function deleteProduct(productId) {
  let url = `https://fakestoreapi.com/products/${productId}`;

  try {
    console.log(`Sending fetch request for deleting product ${productId}`);
    let result = await fetch(url, { method: 'DELETE' });
    if (!result.ok) throw new Error('Network problem when deleting product');

    let value = await result.json();

    if (value === null) {
      console.dir(value);
      throw new Error("No product in database");
    }

    console.log(value.id, productId);
    if (value.id == productId) {

      showMessage("success", `Product: ${value.title} successfully deleted from database`);
    }

    console.log(`Received result of deleting product ${value.title}`);
    console.dir(value);
    return value;

  } catch (error) {
    showMessage("error", "Error deleting product " + error);
  }
}

export async function addProduct(productData) {
  const url = 'https://fakestoreapi.com/products';
  const options = {
    method: "POST",
    body: JSON.stringify(productData)
  };

  try {
    console.log("Sending fetch request for adding new product");
    let result = await fetch(url, options);
    if (!result.ok) throw new Error("Network error when adding new product");
    console.log("Loading server response of adding new product");

    let value = await result.json();

    //console.log("Result of adding new product");
    //console.dir(value);

    return value;

  } catch (error) {
    showMessage("error", "Error while adding new product " + error);
  }
}

export async function getCategories() {
  const url = 'https://fakestoreapi.com/products/categories';

  try {
    console.log("Sending fetch request for load categories");
    let result = await fetch(url);
    if (!result.ok) throw new Error('Network error while loading categories');

    console.log("Loading categories names");
    let value = await result.json();
    console.log(value);
    return value;

  } catch (error) {
    showMessage("error", "Error loading categories " + error);
  }
}
