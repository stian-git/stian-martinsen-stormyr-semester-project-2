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
    } else {
        // add item to cart.
        // update buttontext
        cartButton.innerHTML = "Remove from cart";
        //const prodObj = createProductObject();
        //console.log(prodObj);
        // const productObj = {
        //     id: button.dataset.id,
        //     qty: 1,
        //     model: button.dataset.model,
        //     title: button.dataset.title,
        //     price: button.dataset.price,
        //     img: button.dataset.img,
        // };
        //console.log(priceContainer.innerText.split(" ")[0]);
        //console.log(productTitle.innerHTML);
        const prodPrice = priceContainer.innerText.split(" ")[0];
        const prodModel = productModel.innerText.split(" ")[1];
        //carouselImageContainer.dataset.defaultimg

        //carousel
        //console.log(prodModel);
        const productObj = {
            id: id,
            qty: 1,
            model: prodModel,
            title: productTitle.innerHTML,
            price: prodPrice,
            img: carouselImageContainer.dataset.defaultimg,
        };
        //console.log(productObj);
        updateItemInCart(id, 1, productObj);
    }
}
