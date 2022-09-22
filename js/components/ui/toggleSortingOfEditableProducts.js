import filterEditableProducts from "../actions/filterEditableProducts.js";

export default function toggleSortingOfEditableProducts() {
    const isActive = this.classList.contains("sorting-enabled");
    if (isActive) {
        //toggle ascending or descending.
        if (this.classList.contains("ascending")) {
            this.classList.add("descending");
            this.classList.remove("ascending");
        } else {
            this.classList.remove("descending");
            this.classList.add("ascending");
        }
    } else {
        // when column was not already the active sort field we remove the previous one and use this instead
        document.querySelector("th.sorting-enabled").classList.remove("sorting-enabled");
        this.classList.add("sorting-enabled");
    }
    filterEditableProducts();
}
