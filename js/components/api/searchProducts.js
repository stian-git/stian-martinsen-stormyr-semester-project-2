import displayStatusMessage from "../ui/displayStatusMessage.js";
import { baseUrl } from "../variables.js";

export default async function searchProducts(str) {
    const searchUrl = baseUrl + "api/products?filters[$or][0][title][$containsi]=" + str + "&filters[$or][1][description][$containsi]=" + str + "&populate=*";
    try {
        const data = await fetch(searchUrl);
        if (data.ok) {
            const result = await data.json();
            return result.data;
        } else {
            throw "Error searching";
        }
    } catch (error) {
        displayStatusMessage("Search failed. Please try again.", "error");
    }
}
