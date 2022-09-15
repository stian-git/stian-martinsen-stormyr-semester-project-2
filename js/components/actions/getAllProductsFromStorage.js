import { storeAllProductsArray } from "../variables.js";

export default function getAllProductsFromStorage() {
    // returned as arr
    return JSON.parse(localStorage.getItem(storeAllProductsArray));
}
