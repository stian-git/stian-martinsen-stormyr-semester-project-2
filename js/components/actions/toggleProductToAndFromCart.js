import displayStatusMessage from "../ui/displayStatusMessage.js";
import { carouselImageContainer, cartButton, priceContainer, productModel, productTitle, storeCartContent } from "../variables.js";
import createProductObject from "./createProductObject.js";
import updateItemInCart from "./updateItemInCart.js";

export default function toggleProductToAndFromCart(id) {
    //console.log("Checking id: " + id);
    let currentItemsInCart = JSON.parse(localStorage.getItem(storeCartContent));
    const preCount = currentItemsInCart.length;
    //console.log(currentItemsInCart);
    //console.log(preCount);
    let filteredProducts = currentItemsInCart.filter((product) => {
        if (product.id !== id) {
            return true;
        }
    });
    //console.log(filteredProducts);
    //console.log(filteredProducts.length);
    if (preCount > filteredProducts.length) {
        // we removed this item.
        // update buttontext
        // save filteredproducts to storage.
        localStorage.setItem(storeCartContent, JSON.stringify(filteredProducts));
        cartButton.innerHTML = "Add to cart";

        displayStatusMessage("Item deleted from Cart", "success");
    } else {
        // add item to cart.
        // update buttontext
        cartButton.innerHTML = "Remove from cart";
        const prodPrice = priceContainer.innerText.split(" ")[0];
        const prodModel = productModel.innerText.split(" ")[1];

        const productObj = {
            id: id,
            qty: 1,
            model: prodModel,
            title: productTitle.innerHTML,
            price: prodPrice,
            img: carouselImageContainer.dataset.defaultimg,
        };
        updateItemInCart(id, 1, productObj);
    }
}
