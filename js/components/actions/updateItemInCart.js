import { storeCartContent } from "../variables.js";

export default function updateItemInBasket(id, action, productObj) {
    // productObj is required if item doesn`t already exist.

    //console.log("Action is: " + action);
    //console.log(typeof action);
    let currentItemsInCart = JSON.parse(localStorage.getItem(storeCartContent));

    if (currentItemsInCart) {
        // If there are items in the cart, check for duplicates:
        for (let i = 0; i < currentItemsInCart.length; i++) {
            if (currentItemsInCart[i].id == productObj.id || currentItemsInCart[i].id == id) {
                // Update qty. If action is NaN it will still be handled later on.
                currentItemsInCart[i].qty = currentItemsInCart[i].qty + action;
                console.log("New qty: " + currentItemsInCart[i].qty);
                if (currentItemsInCart[i].qty < 1) {
                    // We have probably reached 0 and should delete the item.
                    action = "";
                }
                if (typeof action === "number") {
                    console.log("We will add or remove item");
                    //localStorage.setItem(storeCartContent, JSON.stringify(currentItemsInCart));
                } else {
                    console.log("We will delete this item");
                    console.log(currentItemsInCart);
                    currentItemsInCart.splice(currentItemsInCart[i]);
                    console.log(currentItemsInCart);
                    // delete item
                    //localStorage.setItem(storeCartContent, JSON.stringify(currentItemsInCart));
                }
                localStorage.setItem(storeCartContent, JSON.stringify(currentItemsInCart));
                return;
            }
        }
        currentItemsInCart.push(productObj);
        localStorage.setItem(storeCartContent, JSON.stringify(currentItemsInCart));
    } else {
        // add to an empty array.
        let newCartList = [];
        newCartList.push(productObj);
        console.log(newCartList);
        localStorage.setItem(storeCartContent, JSON.stringify(newCartList));
    }

    // console.log(currentItemsInCart.length);
}
