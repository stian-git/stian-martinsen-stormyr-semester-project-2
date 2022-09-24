import displayEditImages from "../actions/displayEditImages.js";
import { apiFormDataField, apiFormDataRef, baseUrl, prodIdField, spinnerModalBackButton, spinnerModalMessage, spinnerModalTriggerButton, storeUserToken } from "../variables.js";

export default async function addImages() {
    // SpinnerModal resets:
    spinnerModalBackButton.disabled = true;
    spinnerModalTriggerButton.click();
    spinnerModalBackButton.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Saving...`;
    spinnerModalMessage.innerHTML = "Please wait while uploading image(s).";

    const fileList = this.files;
    const apiToken = localStorage.getItem(storeUserToken);
    const url = baseUrl + "api/upload";
    const formData = new FormData();
    formData.append("ref", apiFormDataRef);
    formData.append("field", apiFormDataField);
    formData.append("refId", prodIdField.value);
    for (let i = 0; i < fileList.length; i++) {
        formData.append("files", fileList[i]);
    }
    const options = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiToken}`,
        },
        body: formData,
    };

    try {
        const data = await fetch(url, options);
        const result = await data.json();
        result.forEach((img) => {
            displayEditImages(img.id, img.formats.thumbnail.url, img.url);
        });
        this.value = "";
        // Present successful adding.
        spinnerModalMessage.innerHTML = "Image(s) successfully added.";
    } catch (error) {
        console.log("An error occured adding images...");
        spinnerModalMessage.innerHTML = "Upload of image(s) failed. Please try again.";
    } finally {
        spinnerModalBackButton.disabled = false;
        spinnerModalBackButton.innerHTML = "Go Back";
    }
}
