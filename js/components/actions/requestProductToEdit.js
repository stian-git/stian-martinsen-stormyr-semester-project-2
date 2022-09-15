import getProducts from "../api/getProducts.js";
import { deleteProductButton, saveProductButton } from "../variables.js";
import displaySearchEditResults from "./displaySearchEditResults.js";
import saveAllProductsToStorage from "./saveAllProductsToStorage.js";

export default function requestProductToEdit() {
    // getAllProducts.
    // saveToStorage
    // live-filter Products
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
}
