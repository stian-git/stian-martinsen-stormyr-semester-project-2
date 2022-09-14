import { baseUrl, imageEditContainerTable, storeUserToken } from "../variables.js";

export default async function deleteImage(e) {
    e.preventDefault();
    console.log("Deleting image now...");
    const apiToken = localStorage.getItem(storeUserToken);
    //console.log(this);
    const rowElement = this.parentElement.parentElement;
    const productId = rowElement.dataset.imageid;

    //console.log(this.parentElement.parentElement.dataset.imageid);
    console.log(productId);

    const url = baseUrl + "api/upload/files/" + productId;
    console.log(url);

    const options = {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${apiToken}`,
        },
    };

    this.parentElement.parentElement;
    try {
        const data = await fetch(url, options);
        const result = await data.json();
        console.log(result);
        rowElement.remove();
        const allImageElements = document.querySelectorAll(".editimages tbody tr");
        console.log(allImageElements.length);
        if (allImageElements.length <= 0) {
            console.log("We need to hide the table...");
            imageEditContainerTable.style.display = "none";
        } else {
            console.log("We got some images left...");
        }
        // If none left, hide the table...
    } catch (error) {
        console.log("Error deleting this image..." + error);
    }
}
