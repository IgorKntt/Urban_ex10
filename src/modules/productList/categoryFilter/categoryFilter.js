import { getCategories } from "../../../scripts/dataLoading";
import { filterProductList } from "../productList";




export async function setCategorySelect(parentElement) {
  let categoryFilter = document.createElement('div');
  categoryFilter.className = 'productList__categories';
  categoryFilter.setAttribute('id', 'productList__categories');

  getCategories().then(value => showCategorySelect(value, categoryFilter));


  parentElement.parentNode.prepend(categoryFilter);
  categoryFilter.addEventListener('change',
    (event) => filterProductList('category', event.target.value));

}

function showCategorySelect(selectData, elem) {
  let categories = '<option value="">--Show all products--</option>';

  selectData.forEach(category => {
    categories = categories + `<option value="${category}">
        ${category}
      </option>`;
  });

  let categorySelect = `<label for="productList__select">
      Show products filtered by category:
    </label>
    <select name="productList__select" id="productList__select">
      ${categories};
    </select>`;

  elem.innerHTML = categorySelect;

  //console.log(categorySelect);
  //productList.parentNode.prepend(elem);
  /* elem.addEventListener('change',
     (event) => filterProductList('category', event.target.value));*/
}
