import { storeEditProductsArray } from "../variables";

export default function sortEditableProducts(arr) {
    if (!arr) {
        arr = localStorage.getItem(storeEditProductsArray);
    }
    // Handle if there are no products in either arr or localstorage?
    console.log(arr);
    // identify sort method and direction.
    const currentSortMethod = document.querySelector("th.sorting-enabled").dataset.sortby;
    const currentSortDirection = document.querySelector("th.sorting-enabled").dataset.sortdirection;
    //
    //
    // check if the above for boolean and use that instead of the text?
    //
    //
    // Sort by Title as default:
    const sortedProducts = arr.sort((a, b) => {
        // text filters: description, productnumber, title

        //const sortbyFieldname = "price";
        if (currentSortMethod === "price") {
            const valueA = parseFloat(a.attributes[currentSortMethod]).toFixed(2);
            const valueB = parseFloat(b.attributes[currentSortMethod]).toFixed(2);
            //console.log(valueA);

            return valueA - valueB;
        } else {
            const valueA = a.attributes[currentSortMethod].toLowerCase();
            const valueB = b.attributes[currentSortMethod].toLowerCase();

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
}
