import { storeAllProductsArray } from "../variables.js";

export default function saveAllProductsToStorage(arr) {
    window.localStorage.setItem(storeAllProductsArray, JSON.stringify(arr));
}
