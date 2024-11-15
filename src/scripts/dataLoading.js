export async function loadProducts(limit) {
  let url = 'https://fakestoreapi.com/products';

  if (!isNaN(+limit)) {
    url = url + `?limit=${limit}`;
  }

  try {
    console.log("Sending fetch request");
    let result = await fetch(url);
    if (!result.ok) throw new Error("Network error");
    console.log("loading data");
    let value = await result.json();
    console.log(value);
    return value;

  } catch (error) {
    console.log("Error loading products", error);
  }
}


export async function loadSingleProduct(productId) {
  let url = `https://fakestoreapi.com/products/${productId}`;

  try {
    console.log("Sending fetch request");
    let result = await fetch(url);
    if (!result.ok) throw new Error('Network problem. ');

    console.log("loading data");
    let value = await result.json();
    console.log(value);
    return value;

  } catch (error) {
    console.log("Error loading products", error);
  }
}

export async function deleteProduct(productId) {
  let url = `https://fakestoreapi.com/products/${productId}`;

  try {
    console.log(`Sending fetch request for deleting product${productId}`);
    let result = await fetch(url, { method: 'DELETE' });
    if (!result.ok) throw new Error('Network problem');

    let value = await result.json();

    if (value === null) {
      console.dir(value);
      throw new Error("Удаляемый продкут в базе данных отсутствует");
    }

    if (value.id === productId) {
      alert(`Продукт: /n ${value.title} /n /n Успешно удален`);
    }

    console.log('Результат удаления объекта:');
    console.dir(value);
    return value;

  } catch (error) {
    alert("Error deleting product " + error);
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
    if (!result.ok) throw new Error("Network error");
    console.log("Loading server response of adding new product");

    let value = await result.json();

    console.log("Result of adding new product");
    console.dir(value);
    alert(`New product added. Assigned id - ${value.id}`);

    return value;

  } catch (error) {
    console.log('Результат добавления нового объекта');
    console.log('Ошибка добавления нового товара ', error);
  }
}

export async function getCategories() {
  const url = 'https://fakestoreapi.com/products/categories';

  try {
    console.log("Sending fetch request for load categories");
    let result = await fetch(url);
    if (!result.ok) throw new Error('Network error');

    console.log("Loading categories names");
    let value = await result.json();
    console.log(value);
    return value;

  } catch (error) {
    console.log("Error loading categories ", error);
  }
}
