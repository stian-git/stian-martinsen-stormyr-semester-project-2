import { baseUrl, storeUserToken } from "../variables.js";

// NB: Deleting the product will not delete the images in Cloudinary because in theory these images can be used by other things.

export default async function deleteProduct(id, deletebutton) {
    if (window.confirm("Are you sure you want to delete this product?")) {
        console.log("Deleting..." + id);
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
            const result = await data.json();
            console.log(result);

            if (window.location.pathname === "/products.html") {
                // Hide the deleted product instead of reloading the page:
                deletebutton.parentElement.parentElement.parentElement.parentElement.style.display = "none";
            } else {
                // We have deleted the image from the edit page.
                // Inform user.
                // Forward user away from the deleted products page:
                window.location.href = "/admin/edit.html";
            }
        } catch (error) {
            console.log("Error occured deleting product id: " + id);
        }
    }
}
