import displayStatusMessage from "../ui/displayStatusMessage.js";
import getNumberOfItemsInCart from "../ui/getNumberOfItemsInCart.js";
import { storeCartContent } from "../variables.js";

export default function updateItemInCart(id, action, productObj = "") {
    // Set id if not provided.
    if (!id) {
        id = productObj.id;
    }
    let currentItemsInCart = JSON.parse(localStorage.getItem(storeCartContent));
    if (currentItemsInCart) {
        // If there are items in the cart, check for duplicates:
        for (let i = 0; i < currentItemsInCart.length; i++) {
            if (currentItemsInCart[i].id === id) {
                // Item already in cart. We will update qty.
                if (typeof action === "number") {
                    currentItemsInCart[i].qty = currentItemsInCart[i].qty + action;
                    if (currentItemsInCart[i].qty < 1) {
                        // We have probably reached 0 and should delete the item.
                        currentItemsInCart.splice(i, 1);
                    }
                    // Item value is either above 0 and will be updated in the Cart or already deleted.
                    localStorage.setItem(storeCartContent, JSON.stringify(currentItemsInCart));
                    getNumberOfItemsInCart();
                    displayStatusMessage("Cart updated", "success");
                    return;
                } else {
                    currentItemsInCart.splice(i, 1);
                    localStorage.setItem(storeCartContent, JSON.stringify(currentItemsInCart));
                    displayStatusMessage("Item deleted from Cart", "success");
                }
                getNumberOfItemsInCart();
                return;
            }
        }
        // The item was not in the cart and can be added, otherwise it will be returned above.
        currentItemsInCart.push(productObj);
        localStorage.setItem(storeCartContent, JSON.stringify(currentItemsInCart));
        displayStatusMessage("Item added to Cart", "success");
    } else {
        // Cart is empty, and we will add the product.
        let newCartList = [];
        newCartList.push(productObj);
        localStorage.setItem(storeCartContent, JSON.stringify(newCartList));
        displayStatusMessage("Item added to Cart", "success");
    }
    getNumberOfItemsInCart();
}
