import { cartButton, storeCartContent } from "../variables.js";
import createProductObject from "./createProductObject.js";

export default function toggleProductToAndFromCart(id) {
    console.log("Checking id: " + id);
    let currentItemsInCart = JSON.parse(localStorage.getItem(storeCartContent));
    const preCount = currentItemsInCart.length;
    console.log(currentItemsInCart);
    console.log(preCount);
    let filteredProducts = currentItemsInCart.filter((product) => {
        if (product.id !== id) {
            return true;
        }
    });
    console.log(filteredProducts);
    console.log(filteredProducts.length);
    if (preCount > filteredProducts.length) {
        // we removed this item.
        // update buttontext
        // save filteredproducts to storage.
        //localStorage.setItem(storeCartContent, JSON.stringify(filteredProducts));
        cartButton.innerHTML = "Add to cart";
    } else {
        // add item to cart.
        // update buttontext
        cartButton.innerHTML = "Remove from cart";
        const prodObj = createProductObject();
        console.log(prodObj);
    }
}
