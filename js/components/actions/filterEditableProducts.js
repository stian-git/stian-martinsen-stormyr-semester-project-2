import displaySearchEditResults from "./displaySearchEditResults.js";
import getAllProductsFromStorage from "./getAllProductsFromStorage.js";

export default function filterEditableProducts() {
    console.log("Filtering now...");
    let currentProducts = getAllProductsFromStorage();
    console.log(currentProducts);
    console.log(typeof currentProducts);
    console.log("Current search: " + this.value);
    let filteredProducts;
    if (this.value === "") {
        // show all products, but sort them if enabled.
        displaySearchEditResults(currentProducts);
    } else {
        // filter products.
        filteredProducts = currentProducts.filter((product) => {
            const searchTitle = product.attributes.title.toLowerCase().includes(this.value.toLowerCase());
            const searchDescription = product.attributes.description.toLowerCase().includes(this.value.toLowerCase());
            const searchModel = product.attributes.productnumber.toLowerCase().includes(this.value.toLowerCase());
            if (searchTitle || searchDescription || searchModel) {
                return true;
            }
        });

        console.log(filteredProducts);

        // Sort by Title as default:
        const sortedProducts = filteredProducts.sort((a, b) => {
            // text filters: description, productnumber, title

            const sortbyFieldname = "price";
            if (sortbyFieldname === "price") {
                const valueA = parseFloat(a.attributes[sortbyFieldname]).toFixed(2);
                const valueB = parseFloat(b.attributes[sortbyFieldname]).toFixed(2);
                //console.log(valueA);
                return valueA - valueB;
            } else {
                const valueA = a.attributes[sortbyFieldname].toLowerCase();
                const valueB = b.attributes[sortbyFieldname].toLowerCase();

                if (valueA < valueB) {
                    return 1;
                }
                if (valueA > valueB) {
                    return -1;
                }
                // If values are identical:
                return 0;
            }
        });
        console.log(sortedProducts);
        //displaySearchEditResults(filteredProducts);
        displaySearchEditResults(sortedProducts);
    }
}
