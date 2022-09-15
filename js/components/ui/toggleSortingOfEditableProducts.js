export default function toggleSortingOfEditableProducts() {
    console.log(this);

    //console.log("Click");
    // console.log(modelFilter.classList.contains("sorting-enabled"));
    //console.log(this.dataset.sortby);
    const sortByField = this.dataset.sortby;
    const isActive = this.classList.contains("sorting-enabled");
    if (isActive) {
        //toggle ascending or descending.
        document.querySelector("th.sorting-enabled").dataset;
        if (this.dataset.sortdirection === "ascending") {
            this.dataset.sortdirection = "descending";
            this.lastElementChild.innerHTML = "Down";
        } else {
            this.dataset.sortdirection = "ascending";
            this.lastElementChild.innerHTML = "Up";
        }
        //console.log(this.);
    } else {
        // remove previous active field.
        document.querySelector("th.sorting-enabled").classList.remove("sorting-enabled");
        // add classlist to this field.
        this.classList.add("sorting-enabled");
    }
}
