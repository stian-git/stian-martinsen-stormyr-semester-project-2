import { baseUrl, continueButton, deleteProductButton, header, imageFormContainer, prodIdField, saveProductButton } from "../variables.js";

export default async function addProduct(prodObj) {
    const addProductUrl = baseUrl + "api/products";
    const apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYyOTYyNjk5LCJleHAiOjE2NjU1NTQ2OTl9.imsBfAoVMhVEhBjsw2V3iBMMO7anweekVazf-CRzNyU";
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
        const json = await data.json();
        //console.log(json);

        prodIdField.value = json.data.id;
        // inform user.

        imageFormContainer.style.display = "block";
        continueButton.style.display = "none";
        //saveProductButton.style.display = "inline-block";
        saveProductButton.hidden = false;
        deleteProductButton.style.display = "inline-block";
        header.innerHTML = "Add Product (2/2)";
    } catch (error) {
        console.log("Error occured adding product: " + error);
    } finally {
        continueButton.innerHTML = "Continue";
        continueButton.disabled = false;
    }
}
