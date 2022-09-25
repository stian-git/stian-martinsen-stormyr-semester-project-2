import { searchFilterField } from "../variables.js";
import displayProducts from "./displayProducts.js";
import displaySearchEditResults from "./displaySearchEditResults.js";
import getAllProductsFromStorage from "./getAllProductsFromStorage.js";
import sortEditableProducts from "./sortEditableProducts.js";

export default function filterEditableProducts() {
    let filteredProducts = getAllProductsFromStorage();
    if (searchFilterField.value !== "") {
        // filter products only when there is a value in the search field.
        filteredProducts = filteredProducts.filter((product) => {
            const searchTitle = product.attributes.title.toLowerCase().includes(searchFilterField.value.toLowerCase());
            const searchDescription = product.attributes.description.toLowerCase().includes(searchFilterField.value.toLowerCase());
            const searchModel = product.attributes.productnumber.toLowerCase().includes(searchFilterField.value.toLowerCase());
            if (searchTitle || searchDescription || searchModel) {
                return true;
            }
        });
    }

    if (window.location.pathname === "/products.html") {
        displayProducts(filteredProducts);
    } else {
        // Edit.html: Sort the products before displaying them:
        const sortedProducts = sortEditableProducts(filteredProducts);
        displaySearchEditResults(sortedProducts);
    }
}
