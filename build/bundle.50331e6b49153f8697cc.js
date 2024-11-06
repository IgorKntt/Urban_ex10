/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/productCard/productCard.js":
/*!************************************************!*\
  !*** ./src/modules/productCard/productCard.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showProductCard: () => (/* binding */ showProductCard)
/* harmony export */ });
function showProductCard(productData, parent) {

  let productCard = document.createElement("div");
  productCard.className = 'productCard';
  productCard.dataset.productId = productData.id;

  productCard.innerHTML = `<img class="productCard-img" src="${productData.image}" alt="image">
    <h3 class="productCard-title">${productData.title}</h3>
    <p class="productCard-category">${productData.category}</p>
    <p class="productCard-price">${productData.price}</p>`;

  parent.appendChild(productCard);

}



/***/ }),

/***/ "./src/scripts/test.js":
/*!*****************************!*\
  !*** ./src/scripts/test.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calc: () => (/* binding */ calc)
/* harmony export */ });
function calc(a, b) {
  return a + b;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_productCard_productCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/productCard/productCard.js */ "./src/modules/productCard/productCard.js");
/* harmony import */ var _scripts_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/test */ "./src/scripts/test.js");


let productList = document.getElementById("product-list");
let sampleProductData = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120
  }
}

;(0,_modules_productCard_productCard_js__WEBPACK_IMPORTED_MODULE_0__.showProductCard)(sampleProductData, productList);
(0,_modules_productCard_productCard_js__WEBPACK_IMPORTED_MODULE_0__.showProductCard)(sampleProductData, productList);
(0,_modules_productCard_productCard_js__WEBPACK_IMPORTED_MODULE_0__.showProductCard)(sampleProductData, productList);




console.log("index.js code runs. Dev server and auto reload works");
console.log((0,_scripts_test__WEBPACK_IMPORTED_MODULE_1__.calc)(5, 15));








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLjUwMzMxZTZiNDkxNTNmODY5N2NjLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBLCtEQUErRCxrQkFBa0I7QUFDakYsb0NBQW9DLGtCQUFrQjtBQUN0RCxzQ0FBc0MscUJBQXFCO0FBQzNELG1DQUFtQyxrQkFBa0I7O0FBRXJEOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYk87QUFDUDtBQUNBOzs7Ozs7O1VDRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOc0U7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFGQUFlO0FBQ2Ysb0ZBQWU7QUFDZixvRkFBZTs7QUFFdUI7OztBQUd0QztBQUNBLFlBQVksbURBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91cmJhbl9leDEwLy4vc3JjL21vZHVsZXMvcHJvZHVjdENhcmQvcHJvZHVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vdXJiYW5fZXgxMC8uL3NyYy9zY3JpcHRzL3Rlc3QuanMiLCJ3ZWJwYWNrOi8vdXJiYW5fZXgxMC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91cmJhbl9leDEwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91cmJhbl9leDEwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdXJiYW5fZXgxMC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VyYmFuX2V4MTAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNob3dQcm9kdWN0Q2FyZChwcm9kdWN0RGF0YSwgcGFyZW50KSB7XG5cbiAgbGV0IHByb2R1Y3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvZHVjdENhcmQuY2xhc3NOYW1lID0gJ3Byb2R1Y3RDYXJkJztcbiAgcHJvZHVjdENhcmQuZGF0YXNldC5wcm9kdWN0SWQgPSBwcm9kdWN0RGF0YS5pZDtcblxuICBwcm9kdWN0Q2FyZC5pbm5lckhUTUwgPSBgPGltZyBjbGFzcz1cInByb2R1Y3RDYXJkLWltZ1wiIHNyYz1cIiR7cHJvZHVjdERhdGEuaW1hZ2V9XCIgYWx0PVwiaW1hZ2VcIj5cbiAgICA8aDMgY2xhc3M9XCJwcm9kdWN0Q2FyZC10aXRsZVwiPiR7cHJvZHVjdERhdGEudGl0bGV9PC9oMz5cbiAgICA8cCBjbGFzcz1cInByb2R1Y3RDYXJkLWNhdGVnb3J5XCI+JHtwcm9kdWN0RGF0YS5jYXRlZ29yeX08L3A+XG4gICAgPHAgY2xhc3M9XCJwcm9kdWN0Q2FyZC1wcmljZVwiPiR7cHJvZHVjdERhdGEucHJpY2V9PC9wPmA7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKHByb2R1Y3RDYXJkKTtcblxufVxuXG4iLCJleHBvcnQgZnVuY3Rpb24gY2FsYyhhLCBiKSB7XG4gIHJldHVybiBhICsgYjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc2hvd1Byb2R1Y3RDYXJkIH0gZnJvbSBcIi4vbW9kdWxlcy9wcm9kdWN0Q2FyZC9wcm9kdWN0Q2FyZC5qc1wiXG5cbmxldCBwcm9kdWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC1saXN0XCIpO1xubGV0IHNhbXBsZVByb2R1Y3REYXRhID0ge1xuICBpZDogMSxcbiAgdGl0bGU6IFwiRmphbGxyYXZlbiAtIEZvbGRzYWNrIE5vLiAxIEJhY2twYWNrLCBGaXRzIDE1IExhcHRvcHNcIixcbiAgcHJpY2U6IDEwOS45NSxcbiAgZGVzY3JpcHRpb246IFwiWW91ciBwZXJmZWN0IHBhY2sgZm9yIGV2ZXJ5ZGF5IHVzZSBhbmQgd2Fsa3MgaW4gdGhlIGZvcmVzdC4gU3Rhc2ggeW91ciBsYXB0b3AgKHVwIHRvIDE1IGluY2hlcykgaW4gdGhlIHBhZGRlZCBzbGVldmUsIHlvdXIgZXZlcnlkYXlcIixcbiAgY2F0ZWdvcnk6IFwibWVuJ3MgY2xvdGhpbmdcIixcbiAgaW1hZ2U6IFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL2ltZy84MWZQS2QtMkFZTC5fQUNfU0wxNTAwXy5qcGdcIixcbiAgcmF0aW5nOiB7XG4gICAgcmF0ZTogMy45LFxuICAgIGNvdW50OiAxMjBcbiAgfVxufVxuXG5zaG93UHJvZHVjdENhcmQoc2FtcGxlUHJvZHVjdERhdGEsIHByb2R1Y3RMaXN0KTtcbnNob3dQcm9kdWN0Q2FyZChzYW1wbGVQcm9kdWN0RGF0YSwgcHJvZHVjdExpc3QpO1xuc2hvd1Byb2R1Y3RDYXJkKHNhbXBsZVByb2R1Y3REYXRhLCBwcm9kdWN0TGlzdCk7XG5cbmltcG9ydCB7IGNhbGMgfSBmcm9tIFwiLi9zY3JpcHRzL3Rlc3RcIjtcblxuXG5jb25zb2xlLmxvZyhcImluZGV4LmpzIGNvZGUgcnVucy4gRGV2IHNlcnZlciBhbmQgYXV0byByZWxvYWQgd29ya3NcIik7XG5jb25zb2xlLmxvZyhjYWxjKDUsIDE1KSk7XG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==