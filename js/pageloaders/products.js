import displayProducts from "../components/actions/displayProducts.js";
import filterEditableProducts from "../components/actions/filterEditableProducts.js";
import getSearchParam from "../components/actions/getSearchParams.js";
import getSearchResult from "../components/actions/getSearchResult.js";
import saveAllProductsToStorage from "../components/actions/saveAllProductsToStorage.js";
import getProducts from "../components/api/getProducts.js";
import { productsFilterField, productsMainHeader } from "../components/variables.js";

const isSearchMode = getSearchParam("search");
if (isSearchMode) {
    productsMainHeader.innerHTML = "Products (filtered)";
    const searchResult = getSearchResult();
    if (searchResult.length > 0) {
        displayProducts(searchResult);
    }
    getProducts(false).then((arr) => {
        saveAllProductsToStorage(arr);
    });
} else {
    getProducts(false).then((arr) => {
        displayProducts(arr);
        saveAllProductsToStorage(arr);
    });
}

productsFilterField.addEventListener("keyup", () => {
    filterEditableProducts();
    if (productsFilterField.value.length > 0) {
        productsMainHeader.innerHTML = "Products (filtered)";
    } else {
        productsMainHeader.innerHTML = "Products";
    }
});
