export default function sortEditableProducts(arr) {
    // identify sort method and direction.
    const currentSortMethod = document.querySelector("th.producttable__attribute-sortenabled").dataset.sortby;
    const isAscending = document.querySelector("th.producttable__attribute-sortenabled").classList.contains("producttable__attribute-ascending");

    let lowerThanValue = -1;
    let higherThanValue = 1;
    if (!isAscending) {
        // opposite values when descending...
        lowerThanValue = 1;
        higherThanValue = -1;
    }

    const sortedProducts = arr.sort((a, b) => {
        if (currentSortMethod === "price") {
            const valueA = parseFloat(a.attributes[currentSortMethod]).toFixed(2);
            const valueB = parseFloat(b.attributes[currentSortMethod]).toFixed(2);
            if (!isAscending) {
                // opposite values when descending numbers
                return valueB - valueA;
            }
            return valueA - valueB;
        } else {
            const valueA = a.attributes[currentSortMethod].toLowerCase();
            const valueB = b.attributes[currentSortMethod].toLowerCase();
            if (valueA < valueB) {
                return lowerThanValue;
            }
            if (valueA > valueB) {
                return higherThanValue;
            }
            // If values are identical:
            return 0;
        }
    });

    return sortedProducts;
}
