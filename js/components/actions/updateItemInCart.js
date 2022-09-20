import getNumberOfItemsInCart from "../ui/getNumberOfItemsInCart.js";
import { storeCartContent } from "../variables.js";

export default function updateItemInCart(id, action, productObj = "") {
    //console.log(id);
    //console.log(action);
    //console.log(productObj.id);
    if (!id) {
        id = productObj.id;
    }
    // productObj is required if item doesn`t already exist.

    //console.log("Action is: " + action);
    //console.log(typeof action);
    let currentItemsInCart = JSON.parse(localStorage.getItem(storeCartContent));

    if (currentItemsInCart) {
        // If there are items in the cart, check for duplicates:
        for (let i = 0; i < currentItemsInCart.length; i++) {
            // if (currentItemsInCart[i].id === productObj.id || currentItemsInCart[i].id === id) {
            if (currentItemsInCart[i].id === id) {
                // Item already in cart. We will update qty.
                if (typeof action === "number") {
                    //console.log("Action is a number and We will add or remove item");
                    currentItemsInCart[i].qty = currentItemsInCart[i].qty + action;
                    if (currentItemsInCart[i].qty < 1) {
                        // We have probably reached 0 and should delete the item.
                        currentItemsInCart.splice(i, 1);
                    }
                    //     Item value is either above 0 and will be updated in the Cart or already deleted.
                    localStorage.setItem(storeCartContent, JSON.stringify(currentItemsInCart));
                    getNumberOfItemsInCart();
                    return;
                } else {
                    //console.log("We will delete this item because the action is not a number...");
                    currentItemsInCart.splice(i, 1);
                    localStorage.setItem(storeCartContent, JSON.stringify(currentItemsInCart));
                }
                getNumberOfItemsInCart();
                return;
            }
        }
        // The item was not in the cart and can be added, otherwise it will be returned above.
        //console.log("The item was not in the cart and can be added...");
        currentItemsInCart.push(productObj);
        localStorage.setItem(storeCartContent, JSON.stringify(currentItemsInCart));
    } else {
        // Cart is empty, and we will add the product.
        //console.log("Cart is empty...adding a new item now...");
        let newCartList = [];
        newCartList.push(productObj);
        //console.log(newCartList);
        localStorage.setItem(storeCartContent, JSON.stringify(newCartList));
    }

    getNumberOfItemsInCart();
}
