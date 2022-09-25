import displayStatusMessage from "../ui/displayStatusMessage.js";
import { baseUrl, imageEditContainerTable, storeUserToken } from "../variables.js";
import updateProduct from "./updateProduct.js";

export default async function deleteImage(e) {
    e.preventDefault();
    const apiToken = localStorage.getItem(storeUserToken);
    const rowElement = this.parentElement.parentElement;
    const productId = rowElement.dataset.imageid;
    const url = baseUrl + "api/upload/files/" + productId;
    const options = {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${apiToken}`,
        },
    };
    try {
        const data = await fetch(url, options);
        if (data.ok) {
            //make sure we only make changes if the deletion was successful.
            rowElement.remove();
            const allImageElements = document.querySelectorAll(".editimages tbody tr");
            if (allImageElements.length <= 0) {
                imageEditContainerTable.style.display = "none";
            }
            updateProduct();
        } else {
            displayStatusMessage("Deleting image failed. Please try again.", "error");
        }
    } catch (error) {
        displayStatusMessage("Deleting image failed. Please try again.", "error");
    }
}
