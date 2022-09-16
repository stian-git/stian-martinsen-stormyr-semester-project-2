import filterEditableProducts from "../actions/filterEditableProducts.js";

export default function toggleSortingOfEditableProducts() {
    const isActive = this.classList.contains("sorting-enabled");
    console.log(this);
    if (isActive) {
        //toggle ascending or descending.
        if (this.classList.contains("ascending")) {
            this.classList.add("descending");
            this.classList.remove("ascending");
            this.firstElementChild.lastElementChild.innerHTML = "Down";
        } else {
            this.classList.remove("descending");
            this.classList.add("ascending");
            this.firstElementChild.lastElementChild.innerHTML = "Up";
        }
    } else {
        // when column was not already the sort field we remove the previous one and use this instead
        document.querySelector("th.sorting-enabled").classList.remove("sorting-enabled");
        this.classList.add("sorting-enabled");
    }
    filterEditableProducts();
}
