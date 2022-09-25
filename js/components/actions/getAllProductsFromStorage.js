import { storeAllProductsArray } from "../variables.js";

export default function getAllProductsFromStorage() {
    return JSON.parse(localStorage.getItem(storeAllProductsArray));
}
