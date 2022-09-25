import getSearchParam from "../actions/getSearchParams.js";
import displayStatusMessage from "../ui/displayStatusMessage.js";
import { baseUrl } from "../variables.js";

export default async function getProductDetails(id) {
    if (!id) {
        id = getSearchParam("id");
        if (!id) {
            // Forward user to Products-page if id is missing...
            window.location.href = "/products.html";
            return;
        }
    }
    const getProdUrl = baseUrl + "api/products/" + id + "?populate=*";

    try {
        const data = await fetch(getProdUrl);
        if (data.ok) {
            const result = await data.json();
            return result.data.attributes;
        } else {
            throw "Retrieving product data failed.";
        }
    } catch (error) {
        displayStatusMessage("Unable to retrieve product data. Please try again.", "error");
    }
}
