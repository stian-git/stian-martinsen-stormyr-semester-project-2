import filterEditableProducts from "../actions/filterEditableProducts.js";

export default function toggleSortingOfEditableProducts() {
    const isActive = this.classList.contains("producttable__attribute-sortenabled");
    if (isActive) {
        //toggle ascending or descending.
        if (this.classList.contains("producttable__attribute-ascending")) {
            this.classList.add("producttable__attribute-descending");
            this.classList.remove("producttable__attribute-ascending");
        } else {
            this.classList.remove("producttable__attribute-descending");
            this.classList.add("producttable__attribute-ascending");
        }
    } else {
        // when column was not already the active sort field we remove the previous one and use this instead
        document.querySelector("th.producttable__attribute-sortenabled").classList.remove("producttable__attribute-sortenabled");
        this.classList.add("producttable__attribute-sortenabled");
    }
    filterEditableProducts();
}
