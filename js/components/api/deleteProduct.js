import updateItemInCart from "../actions/updateItemInCart.js";
import displayStatusMessage from "../ui/displayStatusMessage.js";
import getNumberOfItemsInCart from "../ui/getNumberOfItemsInCart.js";
import isProductInCart from "../validations/isProductInCart.js";
import { baseUrl, spinnerModalBackButton, spinnerModalHeader, spinnerModalMessage, spinnerModalTriggerButton, storeUserToken } from "../variables.js";

// NB: Deleting the product will not delete the images in Cloudinary because in theory these images can be used by other things.

export default async function deleteProduct(id, deletebutton) {
    if (window.confirm("Are you sure you want to delete this product?")) {
        const apiToken = localStorage.getItem(storeUserToken);
        const url = baseUrl + "api/products/" + id;

        const options = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${apiToken}`,
                "Content-Type": "application/json",
            },
        };

        try {
            const data = await fetch(url, options);
            if (data.ok) {
                if (window.location.pathname === "/products.html") {
                    // Hide the deleted product instead of reloading the page:
                    deletebutton.parentElement.parentElement.parentElement.parentElement.style.display = "none";
                    displayStatusMessage("Successfully deleted product.", "success");
                } else {
                    // We have deleted the product from the edit page.
                    // We use a modal to improve UX by informing the user what happens next.
                    spinnerModalHeader.innerHTML = "Delete";
                    spinnerModalMessage.innerHTML = "Successfully deleted product.";
                    spinnerModalTriggerButton.click();
                    spinnerModalBackButton.innerHTML = "Go to add product";
                    spinnerModalBackButton.addEventListener("click", () => {
                        window.location.href = "/admin/edit.html";
                    });
                }
            } else {
                throw "Delete product failed.";
            }
        } catch (error) {
            displayStatusMessage("Deleting product failed. Please try again.", "error");
        }

        // Remove from basket if it is there...
        //updateItemInCart(id);
        const isInCart = isProductInCart(id);
        if (isInCart) {
            updateItemInCart(id, "delete");
            getNumberOfItemsInCart();
            // Update basket counter.
        }
    }
}
