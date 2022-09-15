import getProducts from "../api/getProducts.js";
import toggleSortingOfEditableProducts from "../ui/toggleSortingOfEditableProducts.js";
import { deleteProductButton, saveProductButton } from "../variables.js";
import displaySearchEditResults from "./displaySearchEditResults.js";
import filterEditableProducts from "./filterEditableProducts.js";
import saveAllProductsToStorage from "./saveAllProductsToStorage.js";

export default function requestProductToEdit() {
    // getAllProducts.
    // saveToStorage
    // live-filter Products
    const searchFilterField = document.querySelector("input.textfilter");
    searchFilterField.addEventListener("keyup", filterEditableProducts);
    // displayProducts
    document.querySelector("main .productform").remove();
    saveProductButton.remove();
    deleteProductButton.remove();
    const mainH2 = document.querySelector("main h2");
    mainH2.innerHTML += `<h2>Please select the product to edit</h2>`;
    const rowContainer = document.querySelector(".producttable tbody");

    getProducts().then((allProducts) => {
        console.log(allProducts);
        saveAllProductsToStorage(allProducts);
        displaySearchEditResults(allProducts);
    });

    // save the filtered results to storage to handle sorting?

    const modelFilter = document.querySelector("th[data-sortby=productnumber]");
    const titleFilter = document.querySelector("th[data-sortby=title]");
    const priceFilter = document.querySelector("th[data-sortby=price]");
    modelFilter.addEventListener("click", toggleSortingOfEditableProducts);
    titleFilter.addEventListener("click", toggleSortingOfEditableProducts);
    priceFilter.addEventListener("click", toggleSortingOfEditableProducts);
}
