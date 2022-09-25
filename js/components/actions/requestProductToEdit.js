import getProducts from "../api/getProducts.js";
import toggleSortingOfEditableProducts from "../ui/toggleSortingOfEditableProducts.js";
import { deleteProductButton, mainProductForm, modelFilter, priceFilter, saveProductButton, searchFilterField, titleFilter } from "../variables.js";
import displaySearchEditResults from "./displaySearchEditResults.js";
import filterEditableProducts from "./filterEditableProducts.js";
import saveAllProductsToStorage from "./saveAllProductsToStorage.js";
import sortEditableProducts from "./sortEditableProducts.js";

export default function requestProductToEdit() {
    searchFilterField.addEventListener("keyup", filterEditableProducts);
    // Remove the usual edit form and buttons.
    mainProductForm.remove();
    saveProductButton.remove();
    deleteProductButton.remove();

    const mainH2 = document.querySelector("main h2");
    mainH2.innerHTML += `Please select the product to edit:`;

    // get the products, store them for later use, sort and display them.
    getProducts().then((allProducts) => {
        saveAllProductsToStorage(allProducts);
        const sortedProducts = sortEditableProducts(allProducts);
        displaySearchEditResults(sortedProducts);
    });

    // Add eventlisteners
    modelFilter.addEventListener("click", toggleSortingOfEditableProducts);
    titleFilter.addEventListener("click", toggleSortingOfEditableProducts);
    priceFilter.addEventListener("click", toggleSortingOfEditableProducts);
}
