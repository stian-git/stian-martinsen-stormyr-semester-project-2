import displayStatusMessage from "../ui/displayStatusMessage.js";
import { baseUrl, continueButton, deleteProductButton, header, imageFormContainer, prodIdField, saveProductButton, storeUserToken } from "../variables.js";

export default async function addProduct(prodObj) {
    const addProductUrl = baseUrl + "api/products";
    const apiToken = localStorage.getItem(storeUserToken);
    const options = {
        method: "POST",
        body: JSON.stringify(prodObj),
        headers: {
            Authorization: `Bearer ${apiToken}`,
            "Content-Type": "application/json",
        },
    };

    try {
        const data = await fetch(addProductUrl, options);
        if (data.ok) {
            const json = await data.json();
            prodIdField.value = json.data.id;
            imageFormContainer.style.display = "block";
            continueButton.style.display = "none";
            saveProductButton.hidden = false;
            deleteProductButton.style.display = "inline-block";
            header.innerHTML = "Add Product (2/2)";
            displayStatusMessage("Product created, ready to add images.", "success");
        } else {
            throw "Failed to add product.";
        }
    } catch (error) {
        displayStatusMessage("Failed to create product. Please try again.", "error");
    } finally {
        continueButton.innerHTML = "Continue";
        continueButton.disabled = false;
    }
}
