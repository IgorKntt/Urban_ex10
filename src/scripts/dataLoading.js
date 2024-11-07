export async function loadProducts(limit) {
  let url = 'https://fakestoreapi.com/products';

  if (!isNaN(+limit)) {
    url = url + `?limit=${limit}`;
  }

  try {
    console.log("Sending fetch request");
    let result = await fetch(url);
    console.log("loading data");
    let value = await result.json();
    console.log(value);
    return value;

  } catch (error) {
    console.log("Error loading products", error);
  }



}
