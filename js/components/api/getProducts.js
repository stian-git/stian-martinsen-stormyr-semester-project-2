import displayStatusMessage from "../ui/displayStatusMessage.js";
import { baseUrl } from "../variables.js";

export default async function getProducts(getFeaturedOnly = false) {
    let getProductsUrl = baseUrl + "api/products?populate=*";
    if (getFeaturedOnly === true) {
        getProductsUrl += "&filters[featured][$eq]=true";
    }
    // make the call with the generated url below:
    try {
        const data = await fetch(getProductsUrl);
        if (data.ok) {
            const result = await data.json();
            return result.data;
        } else {
            displayStatusMessage("Failed to get products. Please try again.", "error");
        }
    } catch (error) {
        displayStatusMessage("Failed to get products. Please try again.", "error");
    }
}
