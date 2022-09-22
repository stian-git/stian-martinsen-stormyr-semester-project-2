import displayStatusMessage from "../ui/displayStatusMessage.js";
import { baseUrl, storeUserToken } from "../variables.js";

export default async function saveChangedProduct(prodObj, id) {
    const url = baseUrl + "api/products/" + id;
    const apiToken = localStorage.getItem(storeUserToken);
    const options = {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${apiToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(prodObj),
    };

    try {
        const data = await fetch(url, options);
        if (data.ok) {
            displayStatusMessage(`Successfully updated product.`, "success");
        }
    } catch (error) {
        displayStatusMessage(`Updating the product failed. Please try again.`, "error");
    }
}
