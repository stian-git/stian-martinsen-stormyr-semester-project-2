import updateItemInBasket from "../actions/updateItemInCart.js";
import { storeCartContent } from "../variables.js";

export default function addListenersToProductsPage() {
    const addToCartButtons = document.querySelectorAll(".product__header_imagecontainer_buymebanner");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const productObj = {
                id: button.dataset.id,
                qty: 1,
                model: button.dataset.model,
                title: button.dataset.title,
                price: button.dataset.price,
                img: button.dataset.img,
            };
            updateItemInBasket(button.dataset.id, 1, productObj);
        });
    });
}
